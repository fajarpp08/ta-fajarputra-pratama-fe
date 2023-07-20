<template>
  <div class="flex flex-col mt-1">
    <label :class="[showlabel]" class="text-xl">{{ label }}</label>
    <input
      v-model="value"
      :class="[warnanya, border]"
      :readonly="isReadOnly"
      :placeholder="placeholder"
      :type="type"
      class="w-100 mt-2 py-3 px-3 rounded-lg border text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
    />
  </div>
  <p v-if="error" class="text-sm text-red-600 px-2">
    {{ error[0] }}
  </p>

  <!--  <div class="relative mb-4">-->
  <!--    <label class="leading-7 text-sm text-gray-600">{{label}}</label>-->
  <!--    <input v-model="value"  :class="[warnanya]" class="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">-->
  <!--  </div>-->
</template>

<script>
export default {
  name: "FormInput",
  props: {
    modelValue: {},
    isReadOnly: {
      type: Boolean,
      default: false,
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
    border: {
      type: String,
      default: "border-gray-400 dark:border-gray-700",
    },
    placeholder: {
      type: String,
      default: "place holder",
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