<template>
  <div id="root">
    <nav>
      <select
        v-model="selectedClass"
        @change="changeClass({ classname: this.selectedClass })"
      >
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
    <div>ultimateClass: {{ ultimateClass }}</div>
  </div>
</template>


<script>
import data from "../../data/CPSB_ClassesRacesPromotions.json";
import { mapActions } from "vuex";

export default {
  name: "CharacterSelectionBar",
  data() {
    return {
      data,
      selectedClass: "",
      selectedRace: "",
      selectedPromotion: "",
      selectedDomain: "",
      ultimateClass: "",
    };
  },
  watch: {
    selectedClass(newClass, oldClass) {
      if (newClass != oldClass) {
        this.ultimateClassSelection();
      }
    },
    classFromURL(newClass, oldClass) {
      if (newClass != oldClass) {
        this.ultimateClassURL();
      }
    }
  },
  computed: {
    myLetter() {
      if (this.classFromURL == false) {
        console.log("no class");
        return "";
      }
      console.log("there is a class");
      //this.formattedClass();
      return this.classFromURL[0].toUpperCase();
    },
    classFromURL() {
      if (this.$route.hash != "") {
        return this.$route.hash.split("_")[1].split("");
      }
      {
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
    ultimateClassSelection() {
      this.ultimateClass = this.selectedClass;
    },
    ultimateClassURL() {
      if (this.classFromURL != "") {
        this.classFromURL.splice(0, 1, this.myLetter);
        this.ultimateClass = this.classFromURL.join("");
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