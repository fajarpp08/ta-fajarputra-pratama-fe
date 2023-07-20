<template>
  <!-- <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row">
    <div class="md:col-span-2 xl:col-span-3">
      <h3 class="text-lg font-semibold">Type</h3>
    </div>
    <div class="w-full flex flex-col mt-12">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">

            <table
              class="min-w-full text-left text-sm font-light"
              v-if="mode == 'browse'"
            >
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">Name</th>
                  <th scope="col" class="px-6 py-4">Deskripsi</th>
                  <th scope="col" class="px-6 py-4">Status</th>
                  <th scope="col" class="px-6 py-4">Alasan</th>
                </tr>
              </thead>
              <tbody>
                <tr
                v-if="type !== null" class="border-b dark:border-neutral-500"
                >
                <td class="whitespace-nowrap px-6 py-4" v-html="type.name"></td>
                <td class="whitespace-nowrap px-6 py-4" v-html="type.description"></td>
                <td class="whitespace-nowrap px-6 py-4" v-html="type.status"></td>
                <td class="whitespace-nowrap px-6 py-4" v-html="type.alasan"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- component -->



  <body>
    <div class="container bg-gray-100 pt-10">
      <div class="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-5">
        <table class="min-w-full pt-10  px-4 text-sm bg-white font-light" v-if="mode == 'browse'">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-2 text-center py-4">Name</th>
              <th scope="col" class="px-2 py-4 text-center">Deskripsi</th>
              <th scope="col" class="px-2 py-4 text-center">Status</th>
              <th scope="col" class="px-2 py-4 text-center">Alasan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="type !== null" class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-2 py-4 text-center">{{ type.name }}</td>
              <td class="whitespace-nowrap px-2 py-4 text-center">{{ type.description }}</td>
              <td class="whitespace-nowrap px-2 py-4 text-center">{{ type.status }}</td>
              <td class="whitespace-nowrap px-2 py-4 text-center">{{ type.alasan }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="max-w-5xl mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <div class="font-medium text-center ">CONTENT</div><br><br>
        <div v-if="type !== null" class="bg-white w-full">
          <article class="prose-lg w-full" v-html="type.content"></article>
        </div>

      </div>
      <div class="max-w-5xl mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <div class="font-medium text-center ">MEDIA</div><br><br>
        <div v-if="type !== null" class="lg:max-w-lg mx-auto lg:w-full ">
        <img class="object-cover w-full shadow-2xl rounded-2xl "
            :src="'https://digitm.isoae.com/' + type.images[0].path" alt="blog">
        </div>

        <div class="mt-5">
          <button @click="goBack"
            class="inline-flex text-white py-2 px-6 bg-blue-700 transition ease-in-out delay-100 bg-blue-700 hover:-translate-xy-1 hover:scale-105 hover:bg-blue-700 duration-200 rounded-xl text-lg">
            Kembali<span class="ml-2">←</span>
          </button>
        </div>
      </div>
    </div>
  </body>
</template>
    
<script>
import { defineComponent, computed } from "vue";
import api from "../../../api.js";

export default defineComponent({
  name: "DetailType",
  created() {
    this.showData();
  },
  data() {
    return {
      type: null,
      paginationData: Object,
      mode: "browse",
    };
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
    
<style scoped></style>