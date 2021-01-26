<template>
  <div id="root">
    <nav>
      <select v-model="selectedClass">
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
      selectedClass: "",
      selectedRace: "",
      selectedPromotion: "",
    };
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