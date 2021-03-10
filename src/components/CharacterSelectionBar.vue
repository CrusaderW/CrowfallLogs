<template>
  <div id="root">
    <nav>
      <select v-model="selectedClass" >
        <option disabled value="">Choose Class</option>
        <option v-for="item in data.classes_fulldata" :key="item">
          {{ item.classname }}
        </option>
      </select>
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

/* TO DO's:
  - reset the attributes with the reset button!
  - test driven development for Vue JS vs. JS (vs. Solidity?)
  - Vuex store: empty - should it be deleted? how? **coding review**
  - simplify filter code and more? Best practice with **coding review**
  - check that my reset button logic is OK, and best practice **coding review**
  - nice to have: 
      reset when class changes (instead of blank) 
          selection bar to "choose race" etc. and 
          disciplines to "choose major" etc. 
*/

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
    $route() {
      // should I add condition to only trigger if data does not exist yet?
      this.selectedClass = this.upperWord(this.$route.hash.split("_")[1]);
      this.selectedRace = this.$route.query.race || "";
      this.selectedPromotion = this.$route.query.promotion || "";
      this.selectedDomain = this.$route.query.domain || "";
    },
    selectedClass() {
      this.$router.push(this.newURL());
    },
    selectedRace() {
      this.$router.replace({
        ...this.$route,
        query: { ...this.$route.query, race: this.selectedRace || undefined },
      }); // add the or condition?
    },
    selectedPromotion() {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          promotion: this.selectedPromotion || undefined,
        },
      });
    },
    selectedDomain() {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          domain: this.selectedDomain || undefined,
        },
      });
    },
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
      this.$router.push("/character_planner#2.0_");
    },
    newURL() {
      var urlArray = [];
      var smallClass = "";
      urlArray = this.$route.fullPath.split("_");
      smallClass = this.lowerWord(this.selectedClass);
      urlArray.splice(2, 1, smallClass);
      return urlArray.join("_");
    },
    upperWord(word) {
      if(word !== "") {
        const wordArr = word.split("");
        wordArr[0] = word[0].toUpperCase();
        return wordArr.join("");
      }
      else {
        return "";
      }
    },
    lowerWord(word) {
      if(word !== "") {
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