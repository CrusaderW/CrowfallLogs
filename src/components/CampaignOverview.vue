<template>
  <section class="favor-ranking">
    <table class="favor-ranking-table tableFixHead">
      <thead class="sticky">
        <tr>
          <th class="favor-ranking-rank">Rank</th>
          <th>Faction</th>
          <th class="favor-ranking-seasons">Spring</th>
          <th class="favor-ranking-seasons">Summer</th>
          <th class="favor-ranking-seasons">Fall</th>
          <th class="favor-ranking-seasons">Winter</th>
          <th class="favor-ranking-favor">Favor</th>
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
        <tr v-for="(elem, index) in data" v-bind:key="elem.faction">
          <td>{{index + 1}}</td>
          <td class="favor-ranking-faction-elem"><span class="favor-ranking-faction-red"></span>{{elem.faction}}</td>
          <td>
            <table class="inner-table">
              <tr>
                <td v-for="num in elem.spring" v-bind:key="elem.faction+num">{{num}}</td>
              </tr>
            </table>
          </td>
          <td>
            <table class="inner-table">
              <tr>
                <td v-for="num in elem.summer" v-bind:key="elem.faction+num">{{num}}</td>
              </tr>
            </table>
          </td>
          <td>
            <table class="inner-table">
              <tr>
                <td v-for="num in elem.fall" v-bind:key="elem.faction+num">{{num}}</td>
              </tr>
            </table>
          </td>
          <td>
            <table class="inner-table">
              <tr>
                <td v-for="num in elem.winter" v-bind:key="elem.faction+num">{{num}}</td>
              </tr>
            </table>
          </td>
          <td>{{ [...elem.spring, ...elem.summer, ...elem.fall, ...elem.winter].reduce((a, b) => a + b, 0) }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import data from '../dummy-json/dashboard-1.json'

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
  height: 300px;
  display:block;
}

.favor-ranking-table th{
  width: 10rem;
  /* border: 1px solid black; */
}

.tableFixHead thead th{
  background-color: #2a292e;
  position: sticky; 
  top: 0;
}

.tableFixHead thead td{ 
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

.tableFixHead thead .favor-ranking-spring {
  background-color: #2d4232;
}

.tableFixHead thead .favor-ranking-summer {
  background-color: #423329;
}

.tableFixHead thead .favor-ranking-fall {
  background-color: #452827;
}

.tableFixHead thead .favor-ranking-winter {
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
