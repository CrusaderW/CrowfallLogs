<template>
  <div id="root">
    <div>
      <img
        src="@/assets/pic/Major_Disciplines/Icons/Icon_Disc_Major_Blank.png"
      />
    </div>
    <div>
      <select v-model="internalSelection">
        <option disabled value="">Choose Major</option>
        <option v-for="option in options" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      internalSelection: this.modelValue,
    }
  },

  watch: {
    internalSelection() {
      this.$emit('update:modelValue', this.internalSelection)
    },
  },
}
</script>

<style scoped>
#root {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: none;
  color: white;
  flex-basis: 12em;
  overflow: hidden;
}
img {
  max-width: 2em;
  padding:0.5em;
}
</style> 