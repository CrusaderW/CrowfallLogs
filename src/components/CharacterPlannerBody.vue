<template>
  <div id="root">
    I'm the Charatcher Planner Body (in pink)
    <div class="instruct">PLEASE SELECT YOUR CLASS, RACE AND PROMOTION.</div>
    <div class="overall">
      <div class="attributes">
      <CharacterPlannerAttributes />
      </div>
      <div class="passives">
      <CharacterPlannerPassives />
      </div>
      <div class="disciplines">
      <CharacterPlannerDisciplines />
      </div>
    </div>
  </div>
</template>


<script>
import CharacterPlannerAttributes from "@/components/CharacterPlannerAttributes";
import CharacterPlannerDisciplines from "@/components/CharacterPlannerDisciplines";
import CharacterPlannerPassives from "@/components/CharacterPlannerPassives";
export default {
  name: "CharacterPlannerBody",
  components: {
    CharacterPlannerAttributes,
    CharacterPlannerDisciplines,
    CharacterPlannerPassives
  },
  data() {},
};
</script>

<style scoped>
#root {
  display: flex;
  flex-direction: column;
  background-color: pink;
  padding: 0.5em;
  margin: 0.5em;
}
.instruct {
  background-color: cadetblue;
  padding: 0.5em;
  margin: 0.5em;
}
.overall {
  display: flex;
  justify-content: space-between;
}
.attributes {
  background-color: saddlebrown;
}
.disciplines {
  background-color: rgb(58, 36, 20);
}
</style> 