<template>
  <div>
    <h1>Fights page</h1>
    <el-row v-if="selectedFight" :gutter="20">
      <fight-logs-visualization :fight="selectedFight" />
    </el-row>
    <el-row v-if="!selectedFight" :gutter="20">
      <el-col :span="10" :offset="7">
        <div v-if="fights" style="margin-top: 15px;">
          <div v-for="fight in fights" :key="fight._id">
            <fight-card
              :fight="fight"
              :key="fight._id"
              :selectable="true"
              @select-fight="selectFight"
              @update-fight-location="updateFightLocation"
              @delete-fight="deleteFight"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.location_input {
  width: 150px;
  margin-left: 15px;
}
</style>

<script>
import FightCard from "../components/FightCard.vue";
import FightLogsVisualization from "../components/FightLogsVisualization.vue";

// const fights = [
//   {
//     datetimeStart: 'datetimeStart',
//     datetimeEnd: 'datetimeEnd',
//     location: {
//       campaign: 'campaign',
//       zone: 'zone',
//       POI: 'POI'
//     },
//     _id: 1
//   },
//   {
//     datetimeStart: 'datetimeStart',
//     datetimeEnd: 'datetimeEnd',
//     location: {
//       campaign: 'campaign',
//       zone: 'zone',
//       POI: 'POI'
//     },
//     _id: 2
//   }
// ]

export default {
  name: "fightsPage",
  components: {
    FightCard,
    FightLogsVisualization
  },
  data() {
    return {
      fights: null,
      selectedFight: null
    };
  },
  methods: {
    selectFight(fight) {
      this.selectedFight = fight;
    },
    deleteFight(fightId) {
      this.fights = this.fights.filter(fight => fight._id !== fightId);
    },
    async updateFightLocation(fight) {
      try {
        this.fights = await (await fetch("/updateLocation", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            _id: fight._id,
            location: fight.location
          })
        })).json();
        this.$analytics.trackEvent("UpdateLocation", "update", fight._id);
      } catch (err) {
        this.$analytics.trackEvent("UpdateLocation", "updateFailed", fight._id);
      }
    }
  },
  async mounted() {
    var date_today = new Date('2020-11-24').toJSON().slice(0,10);
    // this.fights = fights;
    this.fights = await (await fetch("http://212.83.56.166:5000/getParsedLogsByDate?date="+date_today)).json();
    this.selectedFight = this.fights.logs;
  }
};
</script>
