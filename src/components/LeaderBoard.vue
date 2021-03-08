<template>
    <div id="root">
    <table>
        <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>Assists</th>
            <th>Captures</th>
            <th>Crafting</th>
        </tr>
        <tr v-for="scores in data.Scores" :key="scores.playerName">
            <td class="name">{{ scores.playerName }}</td> 
            <td class="score">{{ scores.Score }}</td> 
            <td class="kills">{{ scores.Kills }}</td>
            <td class="deaths">{{ scores.Deaths }}</td>
            <td class="assists">{{ scores.Assists }}</td>
            <td class="captures">{{ scores.Captures }}</td>
            <td class="crafting">{{ scores.Crafting }}</td>
        </tr>
    </table>
    <p> this is a test </p>

  </div>
</template>

<script>
import data from '../../data/LB_PlayerScores.json';

export default {
  name: "LeaderBoard",
  data() {
    return {
      data
    }
  }
}
</script>

<style scoped>

</style>