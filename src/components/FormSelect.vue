<template>
  <div class="flex flex-col mt-1">
    <label :class="[showlabel]" class="text-xl">{{ label }}</label>
    <select
      v-model="value"
      :class="[warnanya]"
      @change="$emit('onSelect', $event)"
      class="w-100 mt-2 py-3 px-3 rounded-lg border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
    >
      <option value="">{{ placeholder }}</option>
      <option
        v-for="option in options"
        v-bind:key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
  <p v-if="error" class="text-sm text-red-600 px-2">
    {{ error[0] }}
  </p>
</template>

<script>
export default {
  name: "FormSelect",

  emits: ["onSelect", "update:modelValue"],
  props: {
    modelValue: {},
    options: {
      type: Object,
    },
    showlabel: {
      type: String,
      default: "hidden",
    },
    label: {
      type: String,
      default: "Input Label",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "Pilih data",
    },
    warnanya: {
      type: String,
      default: "bg-white dark:bg-gray-800 ",
    },
    error: {
      type: Object,
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style scoped>
</style>