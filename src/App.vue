<template>
  <CampaignOverview />
</template>

<script>
import CampaignOverview from './components/CampaignOverview.vue'
import Leaderboard from './components/Leaderboard.vue'

export default {
  name: 'App',
  components: {
    CampaignOverview
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
