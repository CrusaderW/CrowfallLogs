<template>
  <div id="root">
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
  </div>
</template>


<script>
export default {
  name: "CharacterSelectionBar",
  data() {
    return {
      classes_fulldata: {
        Knight: {
          classname: "Knight",
          classraces: [
            "Human",
            "Fae",
            "High-Elf",
            "Stoneborn",
            "Elken",
            "Centaur",
            "Guinecean",
          ],
          promotions: ["Swordsman", "Secutor", "Sentinel"],
        },
        Confessor: {
          classname: "Confessor",
          classraces: [
            "Nethari",
            "High-Elf",
            "Elken"
          ],
          promotions: ["Fanatic", "Sanctifier", "Inquisitor"],
        },
        Templar: {
          classname: "Templar",
          classraces: [
            "Human",
            "Nethari",
            "Elken"
          ],
          promotions: ["Vindicator", "Paladin", "Fury"],
        },
        Ranger: {
          classname: "Ranger",
          classraces: [
            "Human",
            "Half-Elf",
            "Wood-Elf",
            "Elken",
            "Minotaur"
          ],
          promotions: ["Archer", "Warden", "Brigand"],
        },
        Assassin: {
          classname: "Assassin",
          classraces: [
            "Half-Elf",
            "Nethari",
            "Fae",
            "High-Elf"
          ],
          promotions: ["Swordsman", "Secutor", "Sentinel"],
        },
        Druid: {
          classname: "Druid",
          classraces: [
            "Half-Elf",
            "Fae",
            "Wood-Elf"
          ],
          promotions: ["Stormcaller", "Archdruid", "Earthkeeper"],
        },
        Frostweaver: {
          classname: "Frostweaver",
          classraces: [
            "Fae",
            "Wood-Elf",
            "High-Elf"
          ],
          promotions: ["Frostguard", "Icecaller", "Archmage"],
        },
        Champion: {
          classname: "Champion",
          classraces: [
            "Stoneborn",
            "Half-Giant",
            "Minotaur",
            "Centaur"
          ],
          promotions: ["Frostguard", "Icecaller", "Archmage"],
        },
        Myrmidon: {
          classname: "Myrmidon",
          classraces: [
            "Stoneborn",
            "Half-Giant",
            "Minotaur"
          ],
          promotions: ["Titan", "Battle Rager", "Conqueror"],
        },
        Cleric: {
          classname: "Cleric",
          classraces: [
            "Human",
            "Stoneborn",
            "Half-Giant",
            "Elken",
            "Centaur",
            "Guinecean"
          ],
          promotions: ["Radical", "Crusader", "Arbiter"],
        },
        Duelist: {
          classname: "Duelist",
          classraces: [
            "Guinecean"
          ],
          promotions: ["Slayer", "Vanguard Scout", "Dirge"],
        },
      },

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
  list-style: none;
  background-color: white;
  padding: 0.2em;
  margin: 0.2em;
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
</style> 