<template>
  <CampaignOverview />
  <LeaderBoard />
</template>

<script>
import CampaignOverview from './components/CampaignOverview.vue'
import LeaderBoard from './components/LeaderBoard.vue'

export default {
  name: 'App',
  components: {
    CampaignOverview,
    LeaderBoard
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
