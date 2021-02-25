<template>
  <div id="root1">
    <transition name="slide">
      <div v-if="isOpen">
        <div class="title">Attributes</div>
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
    <div>strength: {{ strAttribute }}</div>
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
#root1 {
  display: flex;
  background-color: saddlebrown;
  color: white;
  flex-basis: 12em;
  overflow: hidden;
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
  background-color: chocolate;
  padding: 0.5em;
}
input {
  background-color: crimson;
  max-width: 4em;
}
:-ms-input-placeholder {
  color: black;
}
table {
  padding: 0.5em;
}
button {
  background-color: orange;
  flex-basis: 3em;
}
</style> 