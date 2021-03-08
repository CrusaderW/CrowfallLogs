<template>
  <div id="root">
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
  background-color: none;
  padding: 0.5em;
  margin: 0.5em;
}
.overall {
  display: flex;
  justify-content: space-between;
}
.attributes {
  background-color: none;
}
.disciplines {
  background-color: none;
}
</style> 