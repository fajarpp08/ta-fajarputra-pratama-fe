<template>
<!-- component -->
<body class="bg-transparent md:py-0">
  <div class="max-w-5xl mx-auto my-10 bg-gray-200 rounded-xl shadow-xl p-5">
    <div v-if="type !== null" >
      <article class="prose-lg w-full" v-html="type.content"></article>
    </div>
    <div class="mt-5">
      <button @click="goBack"
        class="inline-flex text-white py-2 px-6 bg-blue-700 transition ease-in-out delay-100 bg-blue-700 hover:-translate-xy-1 hover:scale-105 hover:bg-blue-700 duration-200 rounded-xl text-lg">
        Kembali<span class="ml-2">←</span>
      </button>
    </div>
  </div>
</body>

</template>

<script>
import { defineComponent, computed } from "vue";
import api from "../../../src/api.js";

export default defineComponent({
  name: "DashboardUserShowType",
  data() {
    return {
      type: null,
      paginationData: Object,
    };
  },
  created() {
    this.showData();
  },
  methods: {
    goBack() {
        // Kembali ke halaman sebelumnya
        window.history.back();
      },

    showData() {
      api
        .get("type/" + this.$route.params.id, this.queryData)
        .then((respon) => {
          this.type = respon.data;
          console.log(this.type);
        });
    },
  },
});
</script>

<style scoped>
</style>