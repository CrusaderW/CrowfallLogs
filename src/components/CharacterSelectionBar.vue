<template>
  <div id="root">
    <nav>
      <select v-model="selectedRace">
        <option disabled value="">Choose Race</option>
        <option v-for="race in races_filtered" :key="race">{{ race }}</option>
      </select>
      <select v-model="selectedPromotion">
        <option disabled value="">Choose Promotion</option>
        <option v-for="promotion in promotions_filtered" :key="promotion">
          {{ promotion }}
        </option>
      </select>
      <select v-model="selectedDomain">
        <option disabled value="">Choose Domain</option>
        <option v-for="domain in data.domains_list" :key="domain">
          {{ domain }}
        </option>
      </select>
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
      selectedPromotion: this.$route.query.promotion || "",
      selectedDomain: this.$route.query.domain || "",
    };
  },
  watch: {
    '$route.hash': function() {
      this.selectedClass = this.upperWord(this.$route.hash.split("_")[1]);
    },
    selectedRace: 'setQuerySelections',
    selectedPromotion: 'setQuerySelections',
    selectedDomain: 'setQuerySelections',
  },
  computed: {
    races_filtered() {
      if (this.selectedClass !== "") {
        return this.data.classes_fulldata[this.selectedClass].classraces;
      } else {
        return this.data.races_list;
      }
    },
    promotions_filtered() {
      if (this.selectedClass !== "") {
        return this.data.classes_fulldata[this.selectedClass].promotions;
      } else {
        return this.data.promotions_list;
      }
    },
  },
  methods: {
    reSet() {
      this.selectedDomain = ''
      this.selectedPromotion = ''
      this.selectedRace = ''
      this.$router.push("/character_planner#2.0_");
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
      if(word) {
        const wordArr = word.split("");
        wordArr[0] = word[0].toUpperCase();
        return wordArr.join("");
      }
      else {
        return "";
      }
    },
    lowerWord(word) {
      if(word) {
        const wordArr = word.split("");
        wordArr[0] = word[0].toLowerCase();
        return wordArr.join("");
      }
      else {
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
</style> 