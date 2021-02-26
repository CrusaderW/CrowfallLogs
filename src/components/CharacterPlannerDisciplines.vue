<template>
  <div id="root2">
    <button @click="pressSlide()">{{ buttonLook }}</button>
    <transition name="slide">
      <div v-if="isOpen">
        <div class="title">DISCIPLINES</div>
        <CharacterPlannerMajors queryname="major1" />
        <CharacterPlannerMajors queryname="major2" />
        <CharacterPlannerMinors queryname="minor1" />
        <CharacterPlannerMinors queryname="minor2" />
        <CharacterPlannerMinors queryname="minor3" />
        <CharacterPlannerMinors
          queryname="minor4"
          v-if="finalRace === 'Human' || finalRace === 'Half-Elf'"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import data from "../../data/CPD_MinorsMajors.json";
import CharacterPlannerMajors from "./CharacterPlannerMajors.vue";
import CharacterPlannerMinors from "./CharacterPlannerMinors.vue";
import { mapGetters } from "vuex";

export default {
  name: "CharacterPlannerDisciplines",
  components: {
    CharacterPlannerMajors,
    CharacterPlannerMinors,
  },
  data() {
    return {
      data,
      isOpen: true,
      buttonLook: ">>",
      selectedMajor: "",
      selectedMinor: "",
    };
  },
  computed: {
    ...mapGetters("charPlanner", ["finalRace"]),
  },
  methods: {
    pressSlide() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.buttonLook = ">>";
      } else {
        this.buttonLook = "<<";
      }
    },
  },
};
</script>

<style scoped>
#root2 {
  display: flex;
  background-color: none;
  color: black;
  flex-basis: 12em;
  overflow: hidden;
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-leave-to,
.slide-enter-from {
  transform: translate(100%, 0);
}
.title {
  background-color: none;
  padding: 0.5em;
}
input {
  max-width: 4em;
}
table {
  padding: 0.5em;
}
button {
  background-color: lightgrey;
  flex-basis: 3em;
}
.discipline {
  text-align: left;
}
img {
  max-width: 2em;
}
</style> 