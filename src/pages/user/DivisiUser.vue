<template>
  <div class="bg-white py-0">
    <!-- Form Search -->
    <div class="w-full inline-flex py-4 px-6">
      <input v-model="queryData.name" @keyup="onSearching()" placeholder="Masukan nama divisi"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      <!-- <my-button class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" label="Cari"/> -->
    </div>
    <!-- <form class="py-4 px-4">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input v-model="queryData.name" @change="onSearching()" type="search" id="default-search"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Cari Divisi" required>
        <button type="search"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cari
        </button>
      </div>
    </form> -->
    <!-- End Form Search -->

    <!-- Isi konten -->
    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" class="px-6 py-4">No</th>
          <th scope="col" class="px-6 py-4">Nama</th>
          <th scope="col" class="px-6 py-4">Deskripsi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, index) in dataDivisi" :key="a.id" class="border-b dark:border-neutral-500">
          <td class="whitespace-nowrap px-6 py-4 font-medium">
            {{ index + 1 }}
          </td>
          <td class="whitespace-nowrap px-6 py-4">{{ a.name }}</td>
          <td class="whitespace-nowrap px-6 py-4">
            {{ a.description }}
          </td>
          <td>
            <my-button @onSelect="areaChange" v-model="listArea"  warnanya="bg-gray-100"
              warnatext="text-blue-600" warnahover="hover:bg-gray-200" label="Pilih" />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End isi konten -->
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import api from "../../../src/api.js";
export default defineComponent({
  // components: { FormData },
  created() {
    // this.mode = "browse";
    this.loadData();
  },
  data() {
    return {
      dataDivisi: [],
      // mode: "browse",
      listArea: [],
      queryData: {
        page: 1,
        name: "",
        limit: 10,
        order_col: "",
        order_type: "",
      },
      paginationData: Object,
    };
  },
  methods: {
    getOptionArea() {
      api.get("area/getOption", {}).then((respon) => {
        this.listArea = respon.data.records;
      });
    },
    areaChange(event) {
      // this.queryData.area_id = "";
      this.listArea = [];
      // this.getOptionArea(event.target.value);
    },
    onSearching(event) {
      this.loadData()
    },
    loadData() {
      api.get("division/user", this.queryData).then((respon) => {
        this.dataDivisi = respon.data.records;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.paginationData);
      });
    },
    onSelect(data) {
      this.$router.push("/areauser");
    },
  },
});
</script>

<style scoped></style>