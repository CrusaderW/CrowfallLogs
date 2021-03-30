<template>
  <div class="root">
    <div class="sliding">
      <transition name="slide">
        <div class="attributes" v-if="isOpen">
          <div class="title">ATTRIBUTES</div>
          <table>
            <tr>
              <td>STR</td>
              <td>
                <input type="text" v-model="strAttribute" />
              </td>
            </tr>
            <tr>
              <td>DEX</td>
              <td><input type="text" v-model="dexAttribute" /></td>
            </tr>
            <tr>
              <td>INT</td>
              <td><input type="text" v-model="intAttribute" /></td>
            </tr>
            <tr>
              <td>SPR</td>
              <td><input type="text" v-model="sprAttribute" /></td>
            </tr>
            <tr>
              <td>CON</td>
              <td><input type="text" v-model="conAttribute" /></td>
            </tr>
          </table>
        </div>
      </transition>
      <button @click="pressSlide()">{{ buttonLook }}</button>
    </div>
    <div class="image">
      <img
        v-if="$route.query.race"
        :src="
          require('@/assets/pic/Races_tooltips/' + $route.query.race + '.jpg')
        "
      />
    </div>
  </div>
</template>


<script>
export default {
  name: "CharacterPlannerAttributes",
  data() {
    return {
      isOpen: true,
      buttonLook: "<<",
      strAttribute: this.$route.query.str || "",
      dexAttribute: this.$route.query.dex || "",
      intAttribute: this.$route.query.int || "",
      sprAttribute: this.$route.query.spr || "",
      conAttribute: this.$route.query.con || "",
    };
  },
  watch: {
    strAttribute() {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          str: this.strAttribute || undefined,
        },
      });
    },
    dexAttribute() {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          dex: this.dexAttribute || undefined,
        },
      });
    },
    intAttribute() {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          int: this.intAttribute || undefined,
        },
      });
    },
    sprAttribute() {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          spr: this.sprAttribute || undefined,
        },
      });
    },
    conAttribute() {
      this.$router.replace({
        ...this.$route,
        query: {
          ...this.$route.query,
          con: this.conAttribute || undefined,
        },
      });
    },
  },
  methods: {
    pressSlide() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.buttonLook = "<<";
      } else {
        this.buttonLook = ">>";
      }
    },
  },
};
</script>

<style scoped>
.attributes {
  width: 20em;
}
.image {
  margin: 1em;
}
.root {
  display: flex;
  flex-direction: column;
  background-color: none;
  /* color: white; */
  flex-basis: 12em;
  overflow: hidden;
}
.sliding {
  display: flex;
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-leave-to,
.slide-enter-from {
  transform: translate(-100%, 0);
}
.title {
  background-color: none;
  padding: 0.5em;
}
input {
  background-color: lightgrey;
  max-width: 15em;
}
:-ms-input-placeholder {
  color: black;
}
table {
  padding: 0 0 0 1em;
}
button {
  background-color: lightgrey;
  flex-basis: 3em;
}
td {
  padding: 0.5em;
}
</style> 