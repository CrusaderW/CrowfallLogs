<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/campaign_overview">Campaign Overview</router-link> |
    <router-link to="/leader_board">LeaderBoard</router-link> |
    <router-link to="/personal_logs">Personal Logs</router-link> |
    <router-link to="/fights">Fights</router-link> |
    <router-link to="/character_planner">Character Planner</router-link>
    <NavigationBar />
  </div>
  <router-view/>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Asul");
#app {
  font-family: "Asul", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
