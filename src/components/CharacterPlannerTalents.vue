<template>
  <div id="root">
    <div class="talent-container">
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterPlannerTalents",
  data() {
    return {}
  },
  mounted() {
    const talents = document.createElement("script");
    talents.setAttribute("src", "https://talents.arbre-clair.fr/js/talent.js");
    document.head.appendChild(talents);

    const cacTalentContainer = document.createElement("cac-talent-container");
    this.$el.querySelector('.talent-container').appendChild(cacTalentContainer);
  },
};
</script>

<style scoped>
#root {
  background-color: grey;
  color: white;
}
.talent-container {
  background-color: none;
}
</style> 