<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div 
      class="selected" 
      :class="{ open: open }" 
      @click="showOptions"
      >
      {{ options?.length > 0 ? value : placeholder }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        class="item"
        v-for="(option, i) of options"
        :key="i"
        @click="
          value = option;
          open = false;
          $emit('input', option);
        "
        @mouseenter="$emit('hover-option-update', option)"
        @mouseleave="$emit('hover-option-update', null)"
      >
        {{ option }}
      </div>
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
      required: false,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    placeholder: {
      type: String,
      required: false,
      default: "No options"
    },
  },

  watch: {
    modelValue() {
      this.value = this.modelValue;
    },
    value() {
      this.$emit("update:modelValue", this.value);
    },
  },

  methods: {
    showOptions() {
      if (this.options?.length > 0) {
        this.open = !this.open;
      } else {
        this.open = false;
      }
    },
  },

  data() {
    return {
      value: this.modelValue
        ? this.modelValue
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
};
</script>

<style scoped>
.custom-select {
  width: 100%;
  text-align: left;
  outline: none;
  font: 400 13.3333px Arial;
}

.selected {
  position: relative;
  border-radius: 6px;
  border: 1px solid #858586;
  padding-left: 8px;
  padding-right: 2px;
  cursor: pointer;
  user-select: none;
  width: 100%;
}

.selected.open {
  border: 1px solid #ce9b2c;
  border-radius: 6px 6px 0px 0px;
  border-bottom: 0px;
}

.selected:after {
  position: absolute;
  content: "";
  top: 50%;
  right: 0px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-color: rgb(0, 0, 0) transparent transparent transparent;
}

.items {
  display: block;
  position: absolute;
  z-index: 1;
  border-radius: 0px 6px 6px 6px;
  border: 1px solid #ce9b2c;
  background-color: #ffffff;
}

.item {
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;
  user-select: none;
}

.item:hover {
  background-color: #b68a28;
}

.selectHide {
  display: none;
}
</style>