<template>
  <div class="root">
    <div class="symbol">
      <img
        src="@/assets/pic/Major_Disciplines/Icons/Icon_Disc_Major_Blank.png"
      />
    </div>
    <div>
      <custom-select class="custom-select"
        v-model="internalSelection"
        :options="options"
        @hover-option-update="showTooltip"
      />

      <div class="tooltip" v-if="previewTooltip?.length > 0">
        <img
          :src="
            require('@/assets/pic/Major_Disciplines/' + previewTooltip + '.jpg')
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "./utility/CustomSelect.vue";

export default {
  name: "CharacterPlannerMajors",
  components: {
    CustomSelect,
  },
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

  methods: {
    showTooltip(discipline) {
      this.previewTooltip = discipline;
    },
  },

  data() {
    return {
      previewTooltip: null,
      internalSelection: this.modelValue ? this.modelValue : "Choose Major",
    };
  },

  watch: {
    modelValue() {
      this.internalSelection = this.modelValue;
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
  align-items: center;
  background-color: none;
  padding: 0 0 0 2em;
}
.tooltip {
  display: inline-block;
  position: absolute;
  z-index: 1;
  right: 21em;
  top: 0em;
}
.symbol img {
  max-width: 2em;
  padding: 0.5em;
}
.custom-select {
  width: 10em;
}
</style> 