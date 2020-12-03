<template>
  <div>
    <el-row :gutter="20">
      <div id="damage-taken-chart" />
    </el-row>
    <el-row :gutter="20">
      <el-col :span="22" :offset="1">
        <div id="skill-by-chart" />
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="11">
        <div id="skill-name-chart" />
      </el-col>
      <el-col :span="13">
        <el-row>
          <el-col :span="12">
            <div id="critical-chart" />
          </el-col>
          <el-col :span="12">
            <div id="skill-action-chart" />
          </el-col>
        </el-row>
        <el-row>
          <div class="dc-data-count">
            <el-col :span="12" :offset="6">
              <span class="filter-count"></span>
              selected out of
              <span class="total-count"></span> records.
            </el-col>
          </div>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="6">Showing {{tabelBegin}}-{{tabelEnd}}</el-col>
          <el-button-group>
            <el-button
              type="primary"
              icon="el-icon-arrow-left"
              @click="last"
              size="small"
              :disabled="lastBtnDisabled"
            >Previous Page</el-button>
            <el-button type="primary" @click="next" size="small" :disabled="nextBtnDisabled">
              Next Page
              <i class="el-icon-arrow-right el-icon-right"></i>
            </el-button>
          </el-button-group>
        </el-row>
        <el-row style="margin-top: 15px;">
          <div id="data-table" class="table table-hover" />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.dc-data-count {
  float: none;
}
.dc-chart g.row text {
  fill: #000;
}
.x .tick text {
  transform: translate(-10px, 10px) rotate(-55deg);
}
</style>

<script>
import { scaleOrdinal } from "d3-scale";
import "dc/dc.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dc from "dc";
import crossfilter from "crossfilter2";

export default {
  props: {
    fight: Object
  },
  data() {
    return {
      ndx: null,
      logsTable: null,
      pageCount: 15,
      offset: 0,
      tabelBegin: 0,
      tabelEnd: 0,
      nextBtnDisabled: false,
      lastBtnDisabled: false
    };
  },
  methods: {
    prepareCriticalChart() {
      const criticalChart = dc.pieChart("#critical-chart");
      const criticalDimension = this.ndx.dimension(d => d.skillCritical);

      criticalChart
        .width(180)
        .height(180)
        .radius(90)
        .dimension(criticalDimension)
        .group(criticalDimension.group())
        .label(d => (d.key ? "Critical" : "Uncritical"))
        .renderLabel(true)
        .innerRadius(30)
        .transitionDuration(500);
    },
    prepareSkillActionChart() {
      const skillActionChart = dc.pieChart("#skill-action-chart");
      const skillActionDimension = this.ndx.dimension(d => d.skillAction);
      skillActionChart
        .width(180)
        .height(180)
        .radius(90)
        .dimension(skillActionDimension)
        .group(skillActionDimension.group())
        .label(d => d.key)
        .renderLabel(true)
        .innerRadius(30)
        .transitionDuration(500);
    },
    prepareSkillsChart() {
      const skillNameChart = dc.rowChart("#skill-name-chart");
      const skillNameDimension = this.ndx.dimension(d => d.skillName);

      const hitPointsPerSkill = skillNameDimension
        .group()
        .reduce(
          (p, v) => p + v.skillAmount,
          (p, v) => p - v.skillAmount,
          () => 0
        );

      skillNameChart
        .cap(25)
        .height(() => {
          const count = skillNameDimension.group().size() + 1;
          return (count > 25 ? 25 : count) * 40;
        })
        .dimension(skillNameDimension)
        .group(hitPointsPerSkill)
        .elasticX(true);
    },
    prepareDamageTakenChart() {
      return;
      // const skillByChart = dc.rowChart("#damage-taken-chart");
      // const damageTakenDimension = this.ndx.dimension(d => d.skillBy);

      // const damageTakenPerTarget = damageTakenDimension
      //   .filter(d => d !== this.username)
      //   .group()
      //   .reduce(
      //     (p, v) =>
      //       v.skillBy === this.username || v.skillTarget !== this.username
      //         ? p
      //         : p + v.skillAmount,
      //     (p, v) =>
      //       v.skillBy === this.username || v.skillTarget !== this.username
      //         ? p
      //         : p - v.skillAmount,
      //     () => 0
      //   );
      // skillByChart
      //   .cap(30)
      //   .height(() => {
      //     const count = damageTakenPerTarget.size() + 1;
      //     return (count > 30 ? 30 : count) * 30;
      //   })
      //   .dimension(damageTakenDimension)
      //   .group(damageTakenPerTarget)
      //   .elasticX(true);
    },
    prepareSkillByChart() {
      const skillByChart = dc.barChart("#skill-by-chart");
      const skillByDimension = this.ndx.dimension(d => d.source);

      function sel_stack(i) {
        return function(d) {
          return d.value[i];
        };
      }
      const hpDealtPerTarget = skillByDimension.group().reduce(
        (p, v) => {
          p[v.action] += v.skillAmount;
          return p;
        },
        (p, v) => {
          p[v.action] -= v.skillAmount;
          return p;
        },
        () => ({ HIT: 0, HEAL: 0 })
      );
      skillByChart
        .height(400)
        .margins({ left: 80, top: 20, right: 10, bottom: 50 })
        .clipPadding(10)
        .dimension(skillByDimension)
        .group(hpDealtPerTarget, "Hit", sel_stack("HIT"))
        .brushOn(false)
        .xUnits(dc.units.ordinal)
        .x(scaleOrdinal().domain(skillByDimension))
        .elasticY(true)
        .ordering(d => -d.value.HIT - d.value.HEAL);

      skillByChart.stack(hpDealtPerTarget, "Heal", sel_stack("HEAL"));
    },
    prepareCounter() {
      const logsCount = dc.dataCount(".dc-data-count");
      logsCount.crossfilter(this.ndx).groupAll(this.ndx.groupAll());
    },
    prepareTabel() {
      this.logsTable = dc.dataTable("#data-table");
      const dateDimension = this.ndx.dimension(d => d.timestamp);
      this.logsTable
        .dimension(dateDimension)
        .size(Infinity)
        .showSections(false)
        .columns([
          { label: "Date", format: d => d.timestamp },
          { label: "Skill Action", format: d => d.action },
          { label: "Skill Name", format: d => d.skillName },
          { label: "Skill By", format: d => d.source },
          { label: "Skill Target", format: d => d.target },
          { label: "Skill Amount", format: d => d.skillAmount },
          {
            label: "Is Critical",
            format: d => (d.skillCritical ? "Yes" : "No")
          }
        ])
        .on("preRender", this.updateOffset)
        .on("preRedraw", this.updateOffset)
        .on("pretransition", this.displayCounts);
    },

    initializeCharts() {
      const logs = this.fight
        .filter(
          a =>
            a &&
            a.skillName &&
            a.source &&
            a.target &&
            a.skillName.trim() &&
            a.source.trim() &&
            a.target.trim()
        )
        .map(d => ({
          ...d,
          dateTime: new Date(d.dateTime)
        }));
      this.ndx = crossfilter(logs);
      this.prepareCriticalChart();
      this.prepareSkillActionChart();
      this.prepareSkillsChart();
      // this.prepareDamageTakenChart();
      this.prepareSkillByChart();
      this.prepareCounter();
      this.prepareTabel();

      dc.renderAll();
    },

    displayCounts() {
      const totFilteredRecs = this.ndx.groupAll().value();
      this.tabelEnd =
        this.offset + this.pageCount > totFilteredRecs
          ? totFilteredRecs
          : this.offset + this.pageCount;

      this.offset + this.pageCount > totFilteredRecs
        ? totFilteredRecs
        : this.offset + this.pageCount;
      this.tabelBegin = this.tabelEnd === 0 ? this.offset : this.offset + 1;
      this.nextBtnDisabled = this.offset + this.pageCount >= totFilteredRecs;
      this.lastBtnDisabled = this.offset - this.pageCount < 0;
    },

    updateOffset() {
      const totFilteredRecs = this.ndx.groupAll().value();

      this.offset =
        this.offset >= totFilteredRecs
          ? Math.floor((totFilteredRecs - 1) / this.pageCount) * this.pageCount
          : this.offset;

      this.offset = this.offset < 0 ? 0 : this.offset;
      this.logsTable.beginSlice(this.offset);
      this.logsTable.endSlice(this.offset + this.pageCount);
    },

    next() {
      this.offset += this.pageCount;
      this.updateOffset();
      this.logsTable.redraw();
    },
    last() {
      this.offset -= this.pageCount;
      this.updateOffset();
      this.logsTable.redraw();
    }
  },
  mounted() {
    this.initializeCharts();
  }
};
</script>
