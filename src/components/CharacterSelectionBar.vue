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
    </nav>
  </div>
</template>

<script>
import data from "../../data/CPSB_ClassesRacesPromotions.json";
import { mapActions, mapGetters } from "vuex";

/* TO DO's:
  - test that everything works
  - clean Vuex store of it
  - simplify lowerWord code and filter code?
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
      this.selectedClass = this.upperWord(this.$route.hash.split("_")[1]);
    },
    selectedClass() {
      this.$router.push(this.newURL());
    },
    selectedRace() {
      this.$router.replace({
        ...this.$route,
        query: { ...this.$route.query, race: this.selectedRace || undefined },
      });
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
    ...mapGetters("charPlanner", ["finalClass"]),
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
      if (word) {
        // need if here because .split("") will fail if ""
        var wordArray = []; // LOCAL VARs ARE CALLED WITHOUT ".THIS"
        var firstLetter = "";
        wordArray = word.split(""); // LOCAL VARIABLE, DON'T PUT "THIS." here!
        firstLetter = wordArray[0].toLowerCase();
        wordArray.splice(0, 1, firstLetter);
        return wordArray.join("");
      } else {
        ("");
      }
    },
    ...mapActions("charPlanner", ["changeClass"]),
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
select {
  padding: 0.5em;
}
</style> 