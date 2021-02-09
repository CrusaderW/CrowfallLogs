<template>
  <div id="root">
    <div>
      <img
        src="@/assets/pic/Major_Disciplines/Icons/Icon_Disc_Major_Blank.png"
      />
    </div>
    <div>
      <select v-model="selectedDiscipline">
        <option disabled value="">Choose Major</option>
        <option
          v-for="discipline in data.majors_list"
          :key="discipline.majorname"
        >
          {{ discipline.majorname }}
        </option>
      </select>
    </div>
    <div>{{ findClasses() }}</div>
  </div>
</template>

<script>
import data from "../../data/CPD_MinorsMajors.json";
import { mapGetters } from "vuex"; // instead of using a computed function that only does: "return this.$store.getters.finalClass;"
//we can use Mapper Helpers (in this case mapGetters) to receive getters from the store

export default {
  name: "CharacterPlannerMajors",
  data() {
    return {
      data,
      selectedDiscipline: "",
      filteredDisciplines: [],
    };
  },
  watch: {
    finalClass(newClass, oldClass) {
      if (newClass !== oldClass) {
        this.filteredDisciplines = [];
      }
    }
  },
  computed: {
    /* testData() {
          if(this.finalClass !== "") {
              return this.filteredDisciplines;
          }
          return "Yiha";
      }, */
    ...mapGetters("charPlanner", ["finalClass", "finalRace", "finalDomain"]),
    // Note 1: can input the getters in an array list if need more than one
    // Note 2: when you have 'namespaced' a module in the store, you need to first refer to this module ('charPlanner') and only then can you get the data
  },
  methods: {
    findClasses() {
      if (this.finalClass !== "") {
        var discipline;
        for (discipline in this.data.majors_list) {
          if (this.data.majors_list[discipline]["classes_possible"].indexOf(this.finalClass) >= 0) {
            this.filteredDisciplines.push(this.data.majors_list[discipline]["majorname"]);
          }
        }
      }
      return this.filteredDisciplines;
    },
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