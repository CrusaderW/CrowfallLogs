<template>
  <div id="root">
    I'm the Charatcher Planner Body (in pink)
    <div class="instruct">PLEASE SELECT YOUR CLASS, RACE AND PROMOTION.</div>
  </div>
  <CharacterPlannerAttributes />
  <CharacterPlannerDisciplines />
</template>


<script>
import CharacterPlannerAttributes from '@/components/CharacterPlannerAttributes'
import CharacterPlannerDisciplines from '@/components/CharacterPlannerDisciplines'
export default {
  name: "CharacterPlannerBody",
  components: {
    CharacterPlannerAttributes,
    CharacterPlannerDisciplines
  },
  data() {},
};
</script>

<style scoped>
#root {
  background-color: pink;
  padding: 0.5em;
  margin: 0.5em;
}
.instruct {
  background-color: cadetblue;
  padding: 0.5em;
  margin: 0.5em;
}
</style> 