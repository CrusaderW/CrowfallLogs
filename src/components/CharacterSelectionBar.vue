<template>
  <div id="root">
    <nav>
      <select v-model="selectedClass" @click="classSelection()">
        <option disabled value="">Choose Class</option>
        <option v-for="item in data.classes_fulldata" :key="item">
          {{ item.classname }}
        </option>
      </select>
      <select v-model="selectedRace" @change="raceSelection()">
        <option disabled value="">Choose Race</option>
        <option v-for="race in races_filtered" :key="race">{{ race }}</option>
      </select>
      <select v-model="selectedPromotion">
        <option disabled value="">Choose Promotion</option>
        <option v-for="promotion in promotions_filtered" :key="promotion">
          {{ promotion }}
        </option>
      </select>
      <select
        v-model="selectedDomain"
        @change="changeDomain({ domainname: this.selectedDomain })"
      >
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

/* TODO: 
  - make a button to RESTART
  - refactoring session with help? YAY, SOON!
  - quick design improvement
  - better design with Tailwind CSS
 */

export default {
  name: "CharacterSelectionBar",
  data() {
    return {
      data,
      selectedClass: "",
      selectedRace: this.$route.query.race || "",
      selectedPromotion: this.$route.query.promotion || "",
      selectedDomain: this.$route.query.domain || "",
      urlClass: "",
      preFinalClass: "",
    };
  },
  mounted() {
    this.setRaceToQuery();
  },
  watch: {
    classFromURL(newClass, oldClass) {
      if (newClass != oldClass) {
        this.classURL();
        this.selectedClass = this.urlClass;
        this.changeClass({ classname: this.preFinalClass });
      }
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
    ...mapGetters("charPlanner", ["finalClass", "finalRace"]),
    myLetter() {
      if (this.classFromURL == false) {
        return "";
      } else {
        return this.classFromURL[0].toUpperCase();
      }
    },
    classFromURL() {
      if (this.$route.hash != "") {
        return this.$route.hash.split("_")[1].split("");
      } else {
        return "";
      }
    },
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
    setRaceToQuery() {
      this.changeRace({ racename: this.$route.query.race });
    },
    raceSelection() {
      this.changeRace({ racename: this.selectedRace });
    },
    classSelection() {
      if (this.selectedClass != this.urlClass) {
        this.preFinalClass = this.selectedClass;
        this.changeClass({ classname: this.preFinalClass });
        this.$router.push(this.newURL()); // TEST
      }
    },
    classURL() {
      if (this.classFromURL != "") {
        // need if here because .splice() will fail if array is empty
        this.classFromURL.splice(0, 1, this.myLetter);
        this.urlClass = this.classFromURL.join("");
        if (this.urlClass != this.selectedClass) {
          this.preFinalClass = this.urlClass;
        }
      } else {
        this.urlClass = "";
      }
    },
    lowerWord(word) {
      if (word) {
        // need if here because .spli("") will fail if array is empty
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
    ...mapActions("charPlanner", ["changeClass", "changeRace", "changeDomain"]),
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  padding: 0.5em;
  margin: 0.5em;
}
select {
  padding: 0.5em;
}
</style> 