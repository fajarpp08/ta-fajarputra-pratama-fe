<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

const defaultLayout = "user";

export default defineComponent({
  setup() {
    const { currentRoute } = useRouter();

    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    );

    return {
      layout,
    };
  },
});
</script>
