<template>
  <div>
    <div v-show="error">{{ error }}</div>

    <div v-show="logsIds">
      <el-select v-model="logsId" placeholder="Select logsId">
        <el-option v-for="logsId in logsIds" :key="logsId" :label="logsId" :value="logsId"></el-option>
      </el-select>
    </div>

    <div v-show="logsId" style="margin-top: 15px;">
      <el-button @click="loadLogs" size="small" type="primary">Select Log</el-button>
    </div>

    <el-row :gutter="20" style="margin-top: 15px;">
      <el-col :span="10" :offset="7">
        <div v-show="logs">
          <el-table :data="logs" height="500" border>
            <el-table-column prop="dateTime" label="Date" width="180"></el-table-column>
            <el-table-column prop="skillName" label="Skill Name" width="180"></el-table-column>
            <el-table-column prop="skillAmount" label="Skill Amount"></el-table-column>
            <el-table-column prop="skillAction" label="Skill Action"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Logs",
  data() {
    return {
      logsIds: null,
      logIds: null,
      logsId: null,
      logs: null,
      error: null
    };
  },
  beforeCreate() {
    // this.loadLogsIds();
    console.log("1", this.loadLogsIds);
  },
  created() {
    console.log("2", this);
    this.loadLogsIds();
  },
  methods: {
    async loadLogsIds() {
      try {
        this.logsIds = await (await fetch(
          "http://212.83.56.166:5000/getMyLogs"
        )).json();
      } catch (err) {
        this.error = "cannot load logsIds";
        console.error("cannot load logsIds", err);
      }
    },
    async loadLogs() {
      try {
        this.logs = await (await fetch(
          "/logsById/${this.logsId}"
        )).json();
      } catch (err) {
        this.error = "cannot load logs";
        console.error("cannot load logs", err);
      }
    }
  }
};
</script>