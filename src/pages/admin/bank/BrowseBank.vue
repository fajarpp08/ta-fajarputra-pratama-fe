<template>
    <div class="relative min-h-screen">
      <div class="min-h-screen mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div class="mb-2 pb-2">
          <h3 class="text-2xl tracking-tight font-bold">Data Bank</h3>
        </div>
        <div class="w-full flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <div class="w-full inline-flex" v-if="mode == 'browse'">
                  <input v-model="queryData.name" @change="onSearching()" placeholder="Masukan nama untuk pencarian"
                    class="w-3/5 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  <div class="w-2/5 item-right flex justify-end ml-auto">
                    <my-button @doClick="addData" warnanya="bg-blue-500" warnatext="text-white"
                      warnahover="hover:bg-blue-700" label="Tambah Data" />
                  </div>
                </div>
  
                <table class="min-w-full text-left text-sm font-light" v-if="mode == 'browse'">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">No</th>
                      <th scope="col" class="px-6 py-4">Bank</th>
                      <th scope="col" class="px-6 py-4">Nama</th>
                      <th scope="col" class="px-6 py-4">Nomor Rekening</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(a, index) in dataBank" :key="a.id" class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {{ index + 1 }}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{{ a.bank }}</td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {{ a.name }}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {{ a.norek }}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <my-button @doClick="onSelect(a)" warnanya="bg-gray-100" warnatext="text-blue-600"
                          warnahover="hover:bg-gray-200" label="Edit" />
                        <my-button @Click="onDelete(a)" warnanya="bg-red-100" warnatext="text-red-600"
                          warnahover="hover:bg-red-200" label="Hapus" />
                        <!-- <button class="my-button-blue">
                          Test Komponen from style
                        </button> -->
                        <!-- <button @click="onSelect(a)" class="inline-flex text-blue-600 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Pilih</button>-->
                        <!-- <button  @click="onDelete(a)" class="inline-flex text-blue-600 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Hapus</button>-->
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- Pagination -->
                <div v-if="mode == 'browse'">
                  <table-pagination v-if="paginationData !== null && paginationData.total_record > paginationData.per_page"
                    v-bind:pagination="paginationData" v-on:paginate="onChangePage(paginationData.current_page)" />
                </div>
                <!-- End Pagination -->
              </div>
            </div>
          </div>
          <div>
            <form-bank ref="formBank" @finish="onFormClose" />
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  import { defineComponent, computed } from "vue";
  import api from "../../../api.js";
  import FormBank from "./FormBank.vue";
  export default defineComponent({
    components: { FormBank },
    created() {
      this.mode = "browse";
      this.loadData();
    },
    data() {
      return {
        dataBank: [],
        mode: "browse",
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
      goBack() {
        // Kembali ke halaman sebelumnya
        window.history.back();
      },
      onChangePage(page) {
        this.queryData.page = page
        this.loadData()
      },
      onFormClose() {
        this.mode = "browse";
        this.loadData();
      },
      addData() {
        this.mode = "form";
        this.$refs["formBank"].newData();
      },
      onDelete(data) {
        api.delete("bank/" + data.id).then((respon) => {
          this.loadData();
        });
      },
      onSelect(data) {
        this.mode = "form";
        this.$refs["formBank"].selectData(data);
      },
      onSearching(event) {
        this.loadData();
      },
      loadData() {
        api.get("bank", this.queryData).then((respon) => {
          this.dataBank = respon.data.records;
          if (typeof respon.data.paging === "object") {
            this.paginationData = respon.data.paging;
          }
          console.log(this.paginationData);
        });
      },
    },
  });
  </script>
    
  <style scoped></style>