<template>
  <div id="root">
    <CharacterSelectionBar />
    <CharacterPlannerBody />
  </div>
</template>


<script>
import CharacterSelectionBar from '@/components/CharacterSelectionBar'
import CharacterPlannerBody from '@/components/CharacterPlannerBody'
export default {
  name: "CharacterPlanner",
  components: {
    CharacterSelectionBar,
    CharacterPlannerBody
    },
  data() {
    return {}
  },
};
</script>

<style scoped>
#root {
  background-color: none;
}
</style> 