<template>
  <button
    @click="$emit('doClick', $event)"
    type="button"
    :class="[warnanya, warnahover, warnatext]"
    class="border-0 mr-4 py-1 px-6 focus:outline-none rounded text-lg"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "MyButton",
  emits: ["doClick"],
  props: {
    label: {
      type: String,
      default: "Label",
    },
    warnanya: {
      type: String,
      default: "bg-indigo-500",
    },
    warnahover: {
      type: String,
      default: "hover:bg-indigo-600",
    },
    warnatext: {
      type: String,
      default: "text-white",
    },
  },
};
</script>

<style scoped>
</style>