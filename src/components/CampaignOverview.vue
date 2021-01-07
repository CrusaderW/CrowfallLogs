<template>
  <section class="favor-ranking">
    <table class="favor-ranking-table favor-ranking-fix-head">
      <caption>{{data.Campaign}}</caption>
      <thead class="sticky">
        <tr>
          <th scope="col" class="favor-ranking-rank">Rank</th>
          <th scope="col">Faction</th>
          <th scope="col" class="favor-ranking-seasons">Spring</th>
          <th scope="col" class="favor-ranking-seasons">Summer</th>
          <th scope="col" class="favor-ranking-seasons">Fall</th>
          <th scope="col" class="favor-ranking-seasons">Winter</th>
          <th scope="col" class="favor-ranking-favor">Favor</th>
        </tr>
        <tr>
          <td colspan="2" class="favor-ranking-DFR">Divine Favor Ranking</td>
          <td class="favor-ranking-spring"></td>
          <td class="favor-ranking-summer"></td>
          <td class="favor-ranking-fall"></td>
          <td class="favor-ranking-winter"></td>
          <td></td>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(elem, index) in data.Scores" v-bind:key="index">
          <td>{{index + 1}}</td>
          <td class="favor-ranking-faction-elem"><span class="favor-ranking-faction-red"></span>{{elem.guildName}}</td>
          <td>
            <table class="inner-table">
              <tr>
                <td v-for="num in elem.spring" v-bind:key="elem.guildName+num">{{num}}</td>
              </tr>
            </table>
          </td>
          <td>
            <table class="inner-table">
              <tr>
                <td v-for="num in elem.summer" v-bind:key="elem.guildName+num">{{num}}</td>
              </tr>
            </table>
          </td>
          <td>
            <table class="inner-table">
              <tr>
                <td v-for="num in elem.autumn" v-bind:key="elem.guildName+num">{{num}}</td>
              </tr>
            </table>
          </td>
          <td>
            <table class="inner-table">
              <tr>
                <td v-for="num in elem.winter" v-bind:key="elem.guildName+num">{{num}}</td>
              </tr>
            </table>
          </td>
          <td>{{elem.favor}}</td>
          <!-- <td>{{ [...elem.spring, ...elem.summer, ...elem.fall, ...elem.winter].reduce((a, b) => a + b, 0) }}</td> -->
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import data from '../../data/CO__DivineFavorRanking.json'

export default {
  name: "CampaignOverview",
  data() {
    return {
      data
    }
  }
}
</script>


<style scoped>
.favor-ranking {
  display: flex;
  justify-content: center;

}

.favor-ranking-table {
  color: white;
  text-align: center;
  background-color: #2a292e;
  border-collapse: collapse;
  overflow-y: scroll;
  height: 200px;
  display:block;
}

.favor-ranking-table th{
  width: 10rem;
  /* border: 1px solid black; */
}

.favor-ranking-fix-head thead th{
  background-color: #2a292e;
  position: sticky; 
  top: 0;
}

.favor-ranking-fix-head thead td{ 
  background-color: #2a292e;
  position: sticky; 
  top: calc(1rem + 2px);
}

.favor-ranking-table .favor-ranking-seasons {
  width: 4rem;
}

.favor-ranking-table .favor-ranking-favor {
  width: 4rem;
}

.favor-ranking-table .favor-ranking-rank {
  width: 1rem;
}

.favor-ranking-DFR {
  text-transform: uppercase;
  text-align: left;
}

.favor-ranking-fix-head thead .favor-ranking-spring {
  background-color: #2d4232;
}

.favor-ranking-fix-head thead .favor-ranking-summer {
  background-color: #423329;
}

.favor-ranking-fix-head thead .favor-ranking-fall {
  background-color: #452827;
}

.favor-ranking-fix-head thead .favor-ranking-winter {
  background-color: #2a3b4a;
}

.favor-ranking-faction-elem {
  text-align: left;
}

.favor-ranking-faction-red {
  display: inline-block;
  width: 3px;
  height: 0.5rem;
  background-color: red;
  margin-right: 0.3rem;
}

.inner-table {
  width: 100%;
  padding: 0.2rem;
  padding-top: 0.4rem;
  background-color: gray;
}

.inner-table td {
  padding: 0.2rem;
  background-color: #2a292e;
}

</style>
