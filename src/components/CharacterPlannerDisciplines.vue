<template>
  <div class="selection">
    <button @click="pressSlide()">{{ buttonLook }}</button>
    <transition name="slide">
      <div id="discipline-container" v-if="isOpen">
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
    Selected Major and Minor Disciplines
    <div class="image">
      <img
        v-if="majorChoice1"
        :src="
          require('@/assets/pic/Major_Disciplines/' + majorChoice1 + '.jpg')
        "
      />
    </div>
    <div class="image">
      <img
        v-if="majorChoice2"
        :src="
          require('@/assets/pic/Major_Disciplines/' + majorChoice2 + '.jpg')
        "
      />
    </div>
    <div class="image">
      <img
        v-if="minorChoice1"
        :src="
          require('@/assets/pic/Minor_Disciplines/' + minorChoice1 + '.jpg')
        "
      />
    </div>
    <div class="image">
      <img
        v-if="minorChoice2"
        :src="
          require('@/assets/pic/Minor_Disciplines/' + minorChoice2 + '.jpg')
        "
      />
    </div>
    <div class="image">
      <img
        v-if="minorChoice3"
        :src="
          require('@/assets/pic/Minor_Disciplines/' + minorChoice3 + '.jpg')
        "
      />
    </div>
    <div class="image">
      <img
        v-if="minorChoice4"
        :src="
          require('@/assets/pic/Minor_Disciplines/' + minorChoice4 + '.jpg')
        "
      />
    </div>
  </div>
</template>

<script>
import data from "../../data/CPD_MinorsMajors.json";
import dataDomains from "../../data/CPSB_ClassesRacesPromotions.json";
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
      dataDomains,
      isOpen: true,
      buttonLook: ">>",

      majorChoice1: this.$route.query.major1 || "",
      majorChoice2: this.$route.query.major2 || "",

      // Adding minor component in same style
      minorChoice1: this.$route.query.minor1 || "",
      minorChoice2: this.$route.query.minor2 || "",
      minorChoice3: this.$route.query.minor3 || "",
      minorChoice4: this.$route.query.minor4 || "",

      // src for tooltip images
    };
  },
  /* mounted() {
    console.log(this.finalClass);
    this.finalDomain();
  }, */
  computed: {
    finalClass() {
      return this.$route.hash
        ? this.upperWord(this.$route.hash.split("_")[1])
        : "";
    },

    finalDomain() {
      // getting the domain info from the hash
      return this.$route.hash.slice(-2)[0] == "j"
        ? this.dataDomains.classes_fulldata[this.finalClass].domains[
            this.$route.hash.slice(-2)
          ]
        : "";
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

    majorChoice1: "setQuery",
    majorChoice2: "setQuery",
    minorChoice1: "setQuery",
    minorChoice2: "setQuery",
    minorChoice3: "setQuery",
    minorChoice4: "setQuery",

    majorOptions(options) {
      if (!options.includes(this.majorChoice1)) this.majorChoice1 = "Choose Major";
      if (!options.includes(this.majorChoice2)) this.majorChoice2 = "Choose Major";
    },
    minorOptions(options) {
      if (!options.includes(this.minorChoice1)) this.minorChoice1 = "Choose Minor";
      if (!options.includes(this.minorChoice2)) this.minorChoice2 = "Choose Minor";
      if (!options.includes(this.minorChoice3)) this.minorChoice3 = "Choose Minor";
      if (!options.includes(this.minorChoice4)) this.minorChoice4 = "Choose Minor";
    },
  },
  methods: {
    upperWord(word) {
      if (word) {
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

    setQuery() {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          major1: this.majorChoice1 !== "Choose Major" && this.majorChoice1 !== "" ? this.majorChoice1 : undefined,
          major2: this.majorChoice2 !== "Choose Major" && this.majorChoice2 !== "" ? this.majorChoice2 : undefined,
          minor1: this.minorChoice1 !== "Choose Minor" && this.minorChoice1 !== "" ? this.minorChoice1 : undefined,
          minor2: this.minorChoice2 !== "Choose Minor" && this.minorChoice2 !== "" ? this.minorChoice2 : undefined,
          minor3: this.minorChoice3 !== "Choose Minor" && this.minorChoice3 !== "" ? this.minorChoice3 : undefined,
          minor4: this.minorChoice4 !== "Choose Minor" && this.minorChoice4 !== "" ? this.minorChoice4 : undefined,
        },
      });
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
  /* border: black solid 1px; */
}
.image img {
  display: flex;
  max-width: 20em;
  margin: 1em;
}

#discipline-container {
  overflow: auto;
  width: 100%;
}
</style> 