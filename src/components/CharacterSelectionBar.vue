<template>
  <div id="root">
    <nav>
      <select v-model="selectedClass">
        <option disabled value="">Choose Class</option>
        <option v-for="item in data.classes_fulldata" :key="item">
          {{ item.classname }}
        </option>
      </select>
      <select
        v-model="selectedRace"
        @change="changeRace({ racename: this.selectedRace })"
      >
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
    <div>selectedClass: {{ selectedClass }}</div>
    <div>classFromURL: {{ urlClass }}</div>
    <div>preFinalClass: {{ preFinalClass }}</div>
    <div>finalClass: {{ finalClass }}</div>
  </div>
</template>


<script>
import data from "../../data/CPSB_ClassesRacesPromotions.json";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CharacterSelectionBar",
  data() {
    return {
      data,
      selectedClass: "",
      selectedRace: "",
      selectedPromotion: "",
      selectedDomain: "",
      urlClass: "",
      preFinalClass: "",
    };
  },
  watch: {
    selectedClass(newClass, oldClass) {
      if (newClass != oldClass) {
        this.classSelection();
        this.changeClass({ classname: this.preFinalClass });
      }
    },
    classFromURL(newClass, oldClass) {
      if (newClass != oldClass) {
        this.classURL();
        this.changeClass({ classname: this.preFinalClass });
      }
    },
  },
  computed: {
    ...mapGetters("charPlanner", ["finalClass"]),
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
    classSelection() {
      this.preFinalClass = this.selectedClass;
    },
    classURL() {
      if (this.classFromURL != "") {
        this.classFromURL.splice(0, 1, this.myLetter);
        this.urlClass = this.classFromURL.join("");
        this.preFinalClass = this.urlClass;
      } else {
        this.urlClass = "";
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