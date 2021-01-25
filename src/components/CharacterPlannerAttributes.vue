<template>
  <div id="root1">
    <transition name="slide">
      <div v-if="isOpen">
        <div class="title">Attributes</div>
        <table>
          <tr>
            <td>STR</td>
            <td><input type="text" placeholder="Current"/></td>
            <td><input type="text" placeholder="Cap" /></td>
          </tr>
          <tr>
            <td>DEX</td>
            <td><input type="text" placeholder="Current" /></td>
            <td><input type="text" placeholder="Cap" /></td>
          </tr>
          <tr>
            <td>INT</td>
            <td><input type="text" placeholder="Current" /></td>
            <td><input type="text" placeholder="Cap" /></td>
          </tr>
          <tr>
            <td>SPR</td>
            <td><input type="text" placeholder="Current" /></td>
            <td><input type="text" placeholder="Cap" /></td>
          </tr>
          <tr>
            <td>CON</td>
            <td><input type="text" placeholder="Current" /></td>
            <td><input type="text" placeholder="Cap" /></td>
          </tr>
        </table>
      </div>
    </transition>
    <button @click="pressSlide()">{{ buttonLook }}</button>
  </div>
</template>


<script>
export default {
  name: "CharacterPlannerAttributes",
  data() {
    return {
      isOpen: true,
      buttonLook: "<<",
    };
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