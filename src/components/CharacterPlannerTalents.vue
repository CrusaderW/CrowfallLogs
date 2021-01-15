<template>
  <div id="root">
    I'm the TALENTS part!
    <div class="talent-container">
      <cac-talent-container></cac-talent-container>
      <!-- contact Aedius (CAC) - can I communicate with this subcomponent to choose a class -->
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
  background-color: rgb(61, 43, 30);
  color: white;
}
.talent-container {
  background-color: burlywood;
}
</style> 