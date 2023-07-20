<template>
  <div class="bg-white py-0">
    <!-- Form Search -->
    <div class="w-full inline-flex py-4 px-6">
      <input v-model="queryData.name" @keyup="onSearching()" placeholder="Masukan nama equipment"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      <!-- <my-button class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" label="Cari"/> -->
    </div>
    <!--End Form Search -->

    <!-- Isi konten -->
    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" class="px-6 py-4">No</th>
          <th scope="col" class="px-6 py-4">Divisi</th>
          <th scope="col" class="px-6 py-4">Area</th>
          <th scope="col" class="px-6 py-4">Group Equipment</th>
          <th scope="col" class="px-6 py-4">Nama</th>
          <th scope="col" class="px-6 py-4">Deskripsi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, index) in dataEquipment" :key="a.id" class="border-b dark:border-neutral-500">
          <td class="whitespace-nowrap px-6 py-4 font-medium">{{ index + 1 }}</td>
          <td class="whitespace-nowrap px-6 py-4">{{ a.division.name }}</td>
          <td class="whitespace-nowrap px-6 py-4">{{ a.area.name }}</td>
          <td class="whitespace-nowrap px-6 py-4">{{ a.group_equipment.name }}</td>
          <td class="whitespace-nowrap px-6 py-4">{{ a.name }}</td>
          <td class="whitespace-nowrap px-6 py-4">{{ a.description }}</td>
          <td>
            <my-button @doClick="onSelect(a)" warnanya="bg-gray-100" warnatext="text-blue-600"
                      warnahover="hover:bg-gray-200" label="Pilih" />
          </td>
       </tr>
      </tbody>
    </table>
    <!-- End Isi konten -->
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
      dataEquipment: [],
      // mode: "browse",
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
    onSearching(event) {
      this.loadData();
    },
    loadData() {
      api.get("equipment/user", this.queryData).then((respon) => {
        this.dataEquipment = respon.data.records;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.paginationData);
      });
    },
    onSelect(data) {
      this.$router.push("/typeuser");
    },
  },
});
</script>

<style scoped></style>