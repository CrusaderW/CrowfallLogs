<template>
  <div id="root">
    <div class="talent-container">
      <cac-talent-container></cac-talent-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterPlannerTalents",
  data() {},
  mounted() {
    let talents = document.createElement("script");
    talents.setAttribute("src", "https://talents.arbre-clair.fr/js/talent.js");
    document.head.appendChild(talents);
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