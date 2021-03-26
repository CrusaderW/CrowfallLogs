<template>
  <div class="root">
    <div class="symbol">
      <img
        src="@/assets/pic/Minor_Disciplines/Icons/Icon_Disc_Minor_Blank.png"
      />
    </div>
    <div>
      <custom-select
        v-model="internalSelection"
        :options="options"
        @hover-option-update="showTooltip"
      />
      <div class="tooltip" v-if="previewTooltip?.length > 0">
      <img
        :src="
          require('@/assets/pic/Minor_Disciplines/' +
            previewTooltip +
            '.jpg')
        "
      />
    </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "./utility/CustomSelect.vue";

export default {
  name: "CharacterPlannerMinors",
  components: {
    CustomSelect
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },

  methods: {
    showTooltip(discipline) {      
      this.previewTooltip = discipline;
    }
  },

  data() {
    return {
      previewTooltip: null,
      internalSelection: this.modelValue ? this.modelValue : 'Choose Minor'
    };
  },

  watch: {
    modelValue() {
      this.internalSelection = this.modelValue
    },
    internalSelection() {
      this.$emit('update:modelValue', this.internalSelection)
    },
  },
};
</script>

<style scoped>
.root {
  display: flex;
  align-items: center;
  background-color: none;
  flex-basis: 12em;
}
.tooltip {
  display: inline-block;
  position: absolute;
  z-index: 1;
  right: 19em;
}
.tooltip img {
  max-width: 12em;
}
.symbol img {
  max-width: 2em;
  padding: 0.5em;
}
</style> 