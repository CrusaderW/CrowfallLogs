<template>
  <CampaignOverview />
  <LeaderBoard />
  <CharacterPlanner />
  <NavigationBar />
</template>

<script>
import CampaignOverview from "./components/CampaignOverview.vue";
import LeaderBoard from "./components/LeaderBoard.vue";
import CharacterPlanner from "./components/CharacterPlanner.vue";
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    CampaignOverview,
    LeaderBoard,
    CharacterPlanner,
    NavigationBar,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
