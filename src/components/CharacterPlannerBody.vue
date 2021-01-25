<template>
  <div id="root">
    <div class="instruct">PLEASE SELECT YOUR CLASS, RACE AND PROMOTION.</div>
    <div class="overall">
      <div class="attributes">
      <CharacterPlannerAttributes />
      </div>
      <div class="talents">
      <CharacterPlannerTalents />
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
import CharacterPlannerTalents from "@/components/CharacterPlannerTalents";
export default {
  name: "CharacterPlannerBody",
  components: {
    CharacterPlannerAttributes,
    CharacterPlannerDisciplines,
    CharacterPlannerTalents
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
  background-color: rgb(58, 36, 20);
}
.disciplines {
  background-color: rgb(58, 36, 20);
}
</style> 