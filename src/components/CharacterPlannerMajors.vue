<template>
  <div id="root">
    <div>
      <img
        src="@/assets/pic/Major_Disciplines/Icons/Icon_Disc_Major_Blank.png"
      />
    </div>
    <div>
      <select v-model="selectedDiscipline">
        <option disabled value="">Choose Major </option>
        <option v-for="discipline in data.majors_list" :key="discipline.majorname">
          {{ discipline.majorname }}
        </option>
      </select>
    </div>
    <div>{{ data.majors_list["Adjudicator"]["classes_possible"] }}</div>
    <h3>{{ finalClass }} - {{ finalRace }} - {{ finalDomain }}</h3> <!-- BEST PRACTICE: don't get data directly from state but from getters -->
  </div>
</template>

<script>
import data from "../../data/CPD_MinorsMajors.json";
import {mapGetters} from 'vuex'; // instead of using a computed function that only does: "return this.$store.getters.finalClass;"
//we can use Mapper Helpers (in this case mapGetters) to receive getters from the store

export default {
  name: "CharacterPlannerMajors",
  data() {
    return {
      data,
      selectedDiscipline: "",
    };
  },
  computed: {
    /* showClass() { // this function is there to get data from store via getter
      return this.$store.getters.finalClass; // finalClass is the getter defined in vuex store
    }, */
    ...mapGetters('charPlanner', ['finalClass', 'finalRace', 'finalDomain']) 
    // Note 1: can input the getters in an array list if need more than one
    // Note 2: when you have 'namespaced' a module in the store, you need to first refer to this module ('charPlanner') and only then can you get the data
  },
  methods: {
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