<template>
  <div id="root">
    <div>
      <img
        src="@/assets/pic/Major_Disciplines/Icons/Icon_Disc_Major_Blank.png"
      />
    </div>
    <div>
      <select v-model="selectedMajor">
        <option disabled value="">Choose {{disciplineType}}</option>
        <option v-for="major in data.majors_list" :key="major.majorname">
          {{ major.majorname }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import data from "../../data/CPD_MinorsMajors.json";

export default {
  props: {
    disciplineType: String
  },
  name: "CharacterPlannerDisciplinesSelection",
  data() {
    return {
      data,
      isOpen: true,
      buttonLook: ">>",
      selectedMajor: "",
      selectedMinor: "",
    };
  },
  methods: {
    pressSlide() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.buttonLook = ">>";
      } else {
        this.buttonLook = "<<";
      }
    }
  },
};
</script>

<style scoped>
#root {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: blue;
  color: white;
  flex-basis: 12em;
  overflow: hidden;
}
img {
  max-width: 2em;
}
</style> 