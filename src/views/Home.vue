<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Tools</h1>
    <h2> <router-link to="/character_planner">Character Planner</router-link></h2>
    <h2> <router-link to="/resource_calculator">Resource Calculator</router-link></h2>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>
