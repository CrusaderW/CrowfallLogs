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
        <option v-for="discipline in getDisciplines" :key="discipline">
          {{ discipline }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import data from "../../data/CPD_MinorsMajors.json";
import { mapGetters } from "vuex"; // instead of using a computed function that only does: "return this.$store.getters.finalClass;"
//we can use Mapper Helpers (in this case mapGetters) to receive getters from the store

export default {
  name: "CharacterPlannerMajors",
  props: ["queryname"],
  data() {
    return {
      data,
      selectedDiscipline: this.$route.query[this.queryname] || "", // ? forces selectedDiscipline to take the value of the query when there?
      arrayPerClass: [],
      arrayPerRace: [],
      arrayPerDomain: [],
    };
  },
  watch: {
    selectedDiscipline() {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          [this.queryname]: this.selectedDiscipline || undefined,
        },
      });
    },
    finalClass(newClass, oldClass) {
      if (newClass !== oldClass) {
        this.arrayPerClass = [];
        this.filterPerClass();
      }
    },
    finalRace(newRace, oldRace) {
      if (newRace !== oldRace) {
        this.arrayPerRace = [];
        this.filterPerRace();
      }
    },
    finalDomain(newDomain, oldDomain) {
      if (newDomain !== oldDomain) {
        this.arrayPerDomain = [];
        this.filterPerDomain();
      }
    },
  },
  computed: {
    getDisciplines() {
      return this.arrayPerClass.concat(this.arrayPerRace, this.arrayPerDomain);
    },
    ...mapGetters("charPlanner", ["finalClass", "finalRace", "finalDomain"]),
    // Note 1: can input the getters in an array list if need more than one
    // Note 2: when you have 'namespaced' a module in the store, you need to first refer to this module ('charPlanner') and only then can you get the data
  },
  methods: {
    filterPerClass() {
      if (this.finalClass !== "") {
        var discipline;
        for (discipline in this.data.majors_list) {
          if (
            this.data.majors_list[discipline]["classes_possible"].indexOf(
              this.finalClass
            ) >= 0
          ) {
            this.arrayPerClass.push(
              this.data.majors_list[discipline]["majorname"]
            );
          }
        }
      }
      return this.arrayPerClass;
    },
    filterPerRace() {
      if (this.finalRace !== "") {
        var discipline;
        for (discipline in this.data.majors_list) {
          if (
            this.data.majors_list[discipline]["races_possible"].indexOf(
              this.finalRace
            ) >= 0
          ) {
            this.arrayPerRace.push(
              this.data.majors_list[discipline]["majorname"]
            );
          }
        }
      }
      return this.arrayPerRace;
    },
    filterPerDomain() {
      if (this.finalDomain !== "") {
        var discipline;
        for (discipline in this.data.majors_list) {
          if (
            this.data.majors_list[discipline]["domains_possible"].indexOf(
              this.finalDomain
            ) >= 0
          ) {
            this.arrayPerDomain.push(
              this.data.majors_list[discipline]["majorname"]
            );
          }
        }
      }
      return this.arrayPerDomain;
    },
  },
};
</script>

<style scoped>
#root {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: none;
  color: white;
  flex-basis: 12em;
  overflow: hidden;
}
img {
  max-width: 2em;
  padding:0.5em;
}
</style> 