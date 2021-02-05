<template>
  <div id="root2">
    <button @click="pressSlide()">{{ buttonLook }}</button>
    <transition name="slide">
      <div v-if="isOpen">
        <div class="title">Disciplines</div>
        <CharacterPlannerDisciplinesSelection disciplineType="major" />
        <CharacterPlannerDisciplinesSelection disciplineType="major" />
        <CharacterPlannerDisciplinesSelection disciplineType="minor" />
        <CharacterPlannerDisciplinesSelection disciplineType="minor" />
        <CharacterPlannerDisciplinesSelection disciplineType="minor" />
      </div>
    </transition>
  </div>
</template>

<script>
import data from "../../data/CPD_MinorsMajors.json";
import CharacterPlannerDisciplinesSelection from "./CharacterPlannerDisciplinesSelection.vue";

export default {
  name: "CharacterPlannerDisciplines",
  components: {
    CharacterPlannerDisciplinesSelection,
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
  background-color: saddlebrown;
  color: white;
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
  background-color: chocolate;
  padding: 0.5em;
}
input {
  background-color: crimson;
  max-width: 4em;
}
table {
  padding: 0.5em;
}
button {
  background-color: orange;
  flex-basis: 3em;
}
.discipline {
  text-align: left;
}
img {
  max-width: 2em;
}
</style> 