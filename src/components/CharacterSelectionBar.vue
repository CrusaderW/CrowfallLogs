<template>
  <div id="root">
    <nav>
      <div class="output">Class: {{ selectedClass }}</div>
      <select v-model="selectedRace">
        <option disabled value="">Choose Race</option>
        <option v-for="race in races_filtered" :key="race">{{ race }}</option>
      </select>
      <div class="output">Promotion: {{ selectedPromotion }}</div>
      <div class="output">Domain: {{ selectedDomain }}</div>
      <button @click="reSet()">Reset</button>
    </nav>
  </div>
</template>

<script>
import data from "../../data/CPSB_ClassesRacesPromotions.json";

export default {
  name: "CharacterSelectionBar",
  data() {
    return {
      data,
      selectedClass: this.upperWord(this.$route.hash.split("_")[1]) || "",
      selectedRace: this.$route.query.race || "",
      selectedPromotion: this.findPromotion(this.$route.hash) || "",
      selectedDomain: this.findDomain(this.$route.hash) || "",
    };
  },
  watch: {
    "$route.hash": function () {
      this.selectedClass = this.upperWord(this.$route.hash.split("_")[1]);
      this.selectedPromotion = this.findPromotion(this.$route.hash);
      this.selectedDomain = this.findDomain(this.$route.hash);
    },
    selectedRace: "setQuerySelections",
  },
  computed: {
    races_filtered() {
      if (this.selectedClass !== "") {
        return this.data.classes_fulldata[this.selectedClass].classraces;
      } else {
        return this.data.races_list;
      }
    },
  },
  methods: {
    findPromotion(myhash) {
      if (myhash.split("g0-")[1] && this.selectedClass) {
        return (this.selectedPromotion = this.data.classes_fulldata[
          this.selectedClass
        ].promotions[myhash.split("g0-")[1].substring(0, 2)]);
      } else {
        return "";
      }
    },
    findDomain(myhash) {
      if (myhash && this.selectedClass && this.data.classes_fulldata[
          this.selectedClass
        ].domains[myhash.substring(myhash.length - 2, myhash.length)]) {
        return this.data.classes_fulldata[
          this.selectedClass
        ].domains[myhash.substring(myhash.length - 2, myhash.length)];
      } else {
        return "";
      }
    },
    reSet() {
      /* this.selectedDomain = ''
      this.selectedPromotion = ''
      this.selectedRace = '' */
      // are those (above) still necessary?
      window.location.href="/character_planner#2.0_"; 
      // used this instead of  this.$router.push() because want to force reload (resetting the component of Aedius)
      // Question: why does the component of Aedius reset WITHOUT reload and not ours
    },
    setQuerySelections() {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          race: this.selectedRace || undefined,
          promotion: this.selectedPromotion || undefined,
          domain: this.selectedDomain || undefined,
        },
      });
    },
    upperWord(word) {
      if (word) {
        const wordArr = word.split("");
        wordArr[0] = word[0].toUpperCase();
        return wordArr.join("");
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: none;
  padding: 0.5em;
  margin: 0.5em;
}
a {
  color: black;
}
select {
  padding: 0.5em;
}
.output {
  border-color: black;
  border-style: double;
  padding: 0.5em;
}
</style> 