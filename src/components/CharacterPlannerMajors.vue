<template>
  <div class="root">
    <div class="symbol">
      <img
        src="@/assets/pic/Major_Disciplines/Icons/Icon_Disc_Major_Blank.png"
      />
    </div>
    <div>
      <select
        v-model="internalSelection"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <option disabled value="">Choose Major</option>
        <option v-for="option in options" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="tooltip" v-if="hover == true">
      <img
        v-if="internalSelection"
        :src="
          require('@/assets/pic/Major_Disciplines/' +
            internalSelection +
            '.jpg')
        "
      />
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
      hover: false,
    };
  },

  watch: {
    modelValue() {
      this.internalSelection = this.modelValue
    },
    internalSelection() {
      this.$emit("update:modelValue", this.internalSelection);
    },
  },
};
</script>

<style scoped>
.root {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: none;
  flex-basis: 12em;
  overflow: hidden;
}
.tooltip {
  display: inline-block;
  position: absolute;
  z-index: 1;
  right: 20em;
}
.tooltip img {
  max-width: 12em;
}
.symbol img {
  max-width: 2em;
  padding: 0.5em;
}
</style> 