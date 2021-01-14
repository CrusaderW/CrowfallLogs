<template>
  <div id="root">
    <nav>
      <div class="logo"><img src="..\assets\dummy-crest.png" /></div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Tools</a></li>
        <li><a href="https://crusaderw.com">Guides</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Privacy</a></li>
        <li><button>Sign Up</button></li>
      </ul>
    </nav>
    <nav>
      <ul>
        <select v-model="selectedClass">
          <option disabled value="">Choose Class</option>
          <option v-for="item in classes" :key="item">{{ item }}</option>
        </select>
        <select v-model="selectedRace">
          <option disabled value="">Choose Race</option>
          <option v-for="race in races_filtered" :key="race">{{ race }}</option>
        </select>
        <select v-model="selectedPromotion">
          <option disabled value="">Choose Promotion</option>
          <option v-for="promotion in promotions_filtered" :key="promotion">
            {{ promotion }}
          </option>
        </select>
      </ul>
    </nav>
    <div class="instruct">
      PLEASE SELECT YOUR CLASS FIRST. <br />
      THEN PICK A RACE AND A PROMOTION.
    </div>
  </div>
</template>


<script>
export default {
  name: "CharacterPlanner",
  data() {
    return {
      //START - TEST DATA STRUCTURE
      classes_fulldata: {
        Knight: {
          classname: "Knight",
          classraces: [
            "Human",
            "Fae",
            "High-Elf",
            "Stoneborn",
            "Elken",
            "Centuar",
            "Guinecean",
          ],
          promotions: ["Swordsman", "Secutor", "Sentinel"],
        },
      },

      //END - TEST DATA STRUCTURE

      classes: [
        "Knight",
        "Confessor",
        "Templar",
        "Ranger",
        "Assasin",
        "Druid",
        "Frostweaver",
        "Champion",
        "Myrmidon",
        "Cleric",
        "Duelist",
      ],
      races: [
        "Human",
        "Half-Elf",
        "Nethar",
        "Fae",
        "Wood-Elf",
        "High-Elf",
        "Stoneborn",
        "Half-Giant",
        "Elken",
        "Minotaur",
        "Centaur",
        "Guinecean",
      ],
      promotions: [
        "Conqueror",
        "Frostguard",
        "Archmage",
        "Stormcaller",
        "Crusader",
        "Paladin",
        "Fury",
        "Fanatic",
        "Inquisitor",
        "Archer",
        "Titan",
        "Swordsman",
        "Sentinel",
        "Secutor",
        "Radical",
        "Arbiter",
        "Pit Fighter",
        "Barbarian",
        "Vandal",
        "Cutthroat",
        "Vindicator",
        "Brigand",
        "Icecaller",
        "Vanguard Scout",
        "Slayer",
        "Dirge",
        "Archdruid",
        "Sanctifier",
        "Alpha Warrior",
        "Blackguard",
        "Battle Rager",
      ],
      selectedClass: "",
      selectedRace: "",
      selectedPromotion: "",
    };
  },
  computed: {
    races_filtered() {
      if (this.selectedClass !== "") {
        return this.classes_fulldata[this.selectedClass].classraces;
      } else {
        return this.races;
      }
    },
    promotions_filtered() {
      if (this.selectedClass !== "") {
        return this.classes_fulldata[this.selectedClass].promotions;
      } else {
        return this.promotions;
      }
    }
  },
};
</script>

<style scoped>
vue-dropdown {
  background-color: grey;
}
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
}
nav ul {
  display: flex;
  background-color: grey;
  list-style-type: none;
}
nav li {
  background-color: white;
}
nav a {
  display: inline-block;
  padding: 0.5em;
  margin: 0.2em;
  color: var(--clr-primary);
  text-decoration: none;
}
nav a:hover {
  color: grey;
}
nav img {
  width: 3em;
  height: 3em;
}
.logo {
  display: block;
  justify-content: flex-start;
  background-color: hotpink;
}
nav button {
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 10%;
}
input {
  color: grey;
  text-align: center;
}
.instruct {
  background-color: cadetblue;
  padding: 0.5em;
  margin: 0.5em;
}
li {
  list-style: none;
  background-color: pink;
  padding: 0.2em;
  margin: 0.2em;
}
ul {
  display: flex;
}
</style> 