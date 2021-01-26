<template>
  <div id="root2">
    <button @click="pressSlide()">{{ buttonLook }}</button>
    <transition name="slide">
      <div v-if="isOpen">
        <div class="title">Disciplines</div>
        <div>{{ tree }}</div>
        <table>
          <tr>
            <td><img src="@\assets\dummy-crest.png" /></td>
            <td>
              <select v-model="selectedMajor">
                <option v-for="major in data.majors_list" :key="major.majorname">
                  {{ major.majorname }}
                </option>
              </select>
            </td>
            <td class="discipline">Major</td>
          </tr>
          <tr>
            <td><img src="@\assets\dummy-crest.png" /></td>
            <td class="discipline">Major</td>
          </tr>
          <tr>
            <td><img src="@\assets\dummy-crest.png" /></td>
            <td class="discipline">Minor</td>
          </tr>
          <tr>
            <td><img src="@\assets\dummy-crest.png" /></td>
            <td class="discipline">Minor</td>
          </tr>
          <tr>
            <td><img src="@\assets\dummy-crest.png" /></td>
            <td class="discipline">Minor</td>
          </tr>
        </table>
      </div>
    </transition>
  </div>
</template>

<script>
import data from '../../data/CPD_MinorsMajors.json';

export default {
  name: "CharacterPlannerDisciplines",
  data() {
    return {
      data,
      isOpen: true,
      buttonLook: ">>",
      selectedMajor: "",
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