<template>
  <CampaignOverview />
  <LeaderBoard />
  <CharacterPlanner />
</template>

<script>
import CampaignOverview from "./components/CampaignOverview.vue";
import LeaderBoard from "./components/LeaderBoard.vue";
import CharacterPlanner from "./components/CharacterPlanner.vue";

export default {
  name: "App",
  components: {
    CampaignOverview,
    LeaderBoard,
    CharacterPlanner,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
