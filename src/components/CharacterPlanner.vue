<template>
  <div id="root">
    Hello There!
    <CharacterSelectionBar />
  </div>
</template>


<script>
import CharacterSelectionBar from '@/components/CharacterSelectionBar'
export default {
  name: "CharacterPlanner",
  components: {
    CharacterSelectionBar
    },
  data() {
  },
};
</script>

<style scoped>
#root {
  background-color: bisque;
}
</style> 