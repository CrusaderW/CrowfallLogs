<template>
  <div class="selection">
    <button @click="pressSlide()">{{ buttonLook }}</button>
    <transition name="slide">
      <div v-if="isOpen">
        <div class="title">DISCIPLINES</div>

        <CharacterPlannerMajors
          v-model="majorChoice1"
          :options="majorOptions"
        />
        <CharacterPlannerMajors
          v-model="majorChoice2"
          :options="majorOptions"
        />

        <CharacterPlannerMinors
          v-model="minorChoice1"
          :options="minorOptions"
        />
        <CharacterPlannerMinors
          v-model="minorChoice2"
          :options="minorOptions"
        />
        <CharacterPlannerMinors
          v-model="minorChoice3"
          :options="minorOptions"
        />
        <CharacterPlannerMinors
          v-model="minorChoice4"
          :options="minorOptions"
          v-if="finalRace === 'Human' || finalRace === 'Half-Elf'"
        />
      </div>
    </transition>
  </div>
  <div class="tooltips">
    SHOW LIST HERE
    <div class="image">
      <img :src="imgmajor1" />
      <img
        src="@/assets/pic/Major_Disciplines/Adjudicator_CLERIC_TEMPLAR.jpg"
      />
    </div>
  </div>
</template>

<script>
import data from "../../data/CPD_MinorsMajors.json";
import CharacterPlannerMajors from "./CharacterPlannerMajors.vue";
import CharacterPlannerMinors from "./CharacterPlannerMinors.vue";

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

      // Sketching out refactored component
      majorChoice1: this.$route.query.major1 || "",
      majorChoice2: this.$route.query.major2 || "",

      // Adding minor component in same style
      minorChoice1: this.$route.query.minor1 || "",
      minorChoice2: this.$route.query.minor2 || "",
      minorChoice3: this.$route.query.minor3 || "",
      minorChoice4: this.$route.query.minor4 || "",

      // src for tooltip images
      imgmajor1: "",
    };
  },
  computed: {
    finalClass() {
      return this.$route.hash
        ? this.upperWord(this.$route.hash.split("_")[1])
        : "";
    },
    finalDomain() {
      return this.$route.query.domain;
    },
    finalRace() {
      return this.$route.query.race;
    },

    majorOptions() {
      const options = Object.values(this.data.majors_list)
        .filter(
          (m) =>
            (this.finalClass && m.classes_possible.includes(this.finalClass)) ||
            (this.finalDomain &&
              m.domains_possible.includes(this.finalDomain)) ||
            (this.finalRace && m.races_possible.includes(this.finalRace))
        )
        .map((m) => m.majorname);
      return options;
    },

    minorOptions() {
      const options = Object.values(this.data.minors_list)
        .filter(
          (m) =>
            (this.finalClass && m.classes_possible.includes(this.finalClass)) ||
            (this.finalDomain &&
              m.domains_possible.includes(this.finalDomain)) ||
            (this.finalRace && m.races_possible.includes(this.finalRace))
        )
        .map((m) => m.minorname);
      return options;
    },
  },

  watch: {
    majorChoice1(choice) {
      this.setQuery("major1", choice);
      this.setImg();
    },
    majorChoice2(choice) {
      this.setQuery("major2", choice);
    },
    minorChoice1(choice) {
      this.setQuery("minor1", choice);
    },
    minorChoice2(choice) {
      this.setQuery("minor2", choice);
    },
    minorChoice3(choice) {
      this.setQuery("minor3", choice);
    },
    minorChoice4(choice) {
      this.setQuery("minor4", choice);
    },
  },

  methods: {
    upperWord(word) {
      if (word !== "") {
        const wordArr = word.split("");
        wordArr[0] = word[0].toUpperCase();
        return wordArr.join("");
      } else {
        return "";
      }
    },
    pressSlide() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.buttonLook = ">>";
      } else {
        this.buttonLook = "<<";
      }
    },

    setQuery(key, value) {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          [key]: value || undefined,
        },
      });
    },

    setImg() {
      this.imgmajor1 = "Adjudicator" + "_CLERIC_TEMPLAR.jpg";
      return require("@/assets/pic/Major_Disciplines/" + this.imgmajor1);
    },
  },
};
</script>

<style scoped>
.selection {
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
.selection img {
  max-width: 2em;
}
.tooltips {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tooltips.image {
  min-width: 12em;
}
</style> 