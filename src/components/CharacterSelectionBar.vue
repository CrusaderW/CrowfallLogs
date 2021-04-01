<template>
  <div id="root">
    <nav>
      <div class="output">Class: {{ selectedClass }}</div>
      <div class="output">
        Race:  
        <custom-select
          class="custom-select"
          v-model="selectedRace"
          :options="getFilteredRaces()"
          @hover-option-update="showTooltip"
        />

        <div class="tooltip" v-if="previewTooltip?.length > 0">
          <img
            :src="
              require('@/assets/pic/Races_tooltips/' + previewTooltip + '.jpg')
            "
          />
        </div>
      </div>
      <div class="output">Promotion: {{ selectedPromotion }}</div>
      <div class="output">Domain: {{ selectedDomain }}</div>
      <button type="reset" @click="reSet()">Reset</button>
    </nav>
  </div>
</template>

<script>
import data from "../../data/CPSB_ClassesRacesPromotions.json";
import CustomSelect from "./utility/CustomSelect.vue";

export default {
  name: "CharacterSelectionBar",
  components: {
    CustomSelect,
  },
  data() {
    return {
      data,
      selectedClass: this.upperWord(this.$route.hash.split("_")[1]) || "",
      selectedRace: this.$route.query.race || "Choose Race",
      selectedPromotion: "",
      selectedDomain: "",
      previewTooltip: null,
    };
  },
  mounted() {
    this.selectedPromotion = this.findPromotion(this.$route.hash);
    this.selectedDomain = this.findDomain(this.$route.hash);
  },
  watch: {
    "$route.hash": function () {
      if (this.$route.hash.split("_")[1]) {
        this.selectedClass = this.upperWord(this.$route.hash.split("_")[1]);
      }
      this.selectedPromotion = this.findPromotion(this.$route.hash);
      this.selectedDomain = this.findDomain(this.$route.hash);
      /* this.getFilteredRaces(); */
      this.selectedRace = this.getFilteredRaces().includes(
        this.$route.query.race
      )
        ? this.$route.query.race
        : "Choose Race";
    },
    selectedRace: "setQuerySelections",
  },
  /* computed: { // QUESTION: wasn't working anymore, had to watch the hash and trigger the method getFilteredRaces when hash changes
    getFilteredRaces() {
      if (this.selectedClass !== "") {
        return this.data.classes_fulldata[this.selectedClass].classraces;
      } else {
        return this.data.races_list;
      }
    },
  }, */
  methods: {
    showTooltip(race) {
      this.previewTooltip = race;
    },
    getFilteredRaces() {
      if (this.selectedClass !== "") {
        return this.data.classes_fulldata[this.selectedClass].classraces;
      } else {
        return this.data.races_list;
      }
    },
    findPromotion(myhash) {
      // this.selectedClass was undefined on reload => so I used mounted()
      if (myhash.split("g0-")[1] && this.selectedClass) {
        return (this.selectedPromotion = this.data.classes_fulldata[
          this.selectedClass
        ].promotions[myhash.split("g0-")[1].substring(0, 2)]);
      } else {
        return "";
      }
    },
    findDomain(myhash) {
      let conditionSatisfied = 0;
      for (var i = 0; i < 9; i++) {
        conditionSatisfied += myhash.indexOf("j" + i);
      }
      if (conditionSatisfied && this.selectedClass) {
        return this.data.classes_fulldata[this.selectedClass].domains[
          myhash.substring(myhash.length - 2, myhash.length)
        ];
      } else {
        return "";
      }
    },
    reSet() {
      this.selectedClass = "";
      /* this.selectedDomain = "";
      this.selectedPromotion = "";
      this.selectedRace = ""; */
      // are those (above) still necessary?

      window.location.href = "/character_planner#2.0__"; // my problem was: a typo! I forgot the second underscore "_"

      // used this instead of  this.$router.push() because want to force reload (resetting the component of Aedius)
      // Question: why does the component of Aedius reset WITHOUT reload and not ours
    },
    setQuerySelections() {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          race: this.selectedRace && this.selectedRace !== "Choose Race" ? this.selectedRace : undefined,
        },
      });
    },
    upperWord(word) {
      if (word) {
        const wordArr = word.split("");
        wordArr[0] = word[0].toUpperCase();
        return wordArr.join("");
      } else {
        return "";
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
  background-color: none;
  padding: 0.5em;
  margin: 0.5em;
}
a {
  color: black;
}
.custom-select {
  padding-left: 1em;
  padding-right: 1em;
  width: 7em;
}
select {
  padding: 0.5em;
}
.output {
  display: flex;
  align-items: center;
  border-color: black;
  border-style: double;
  padding: 0.5em;
  /* min-width: 12em; */
}
.tooltip {
  display: inline-block;
  position: absolute;
  z-index: 1;
  left: 0em;
  top: 0em;
}
</style> 