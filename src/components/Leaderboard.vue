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
        <tr v-for="item in data.Scores" :key="item.playerName">
            <td class="name">{{ item.playerName }}</td> 
            <td class="score">{{ item.Score }}</td> 
            <td class="kills">{{ item.Kills }}</td>
            <td class="deaths">{{ item.Deaths }}</td>
            <td class="assists">{{ item.Assists }}</td>
            <td class="captures">{{ item.Captures }}</td>
            <td class="crafting">{{ item.Crafting }}</td>
        </tr>
    </table>

  </div>
</template>

<script>
import data from '../../data/LB_PlayerScores.json'

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