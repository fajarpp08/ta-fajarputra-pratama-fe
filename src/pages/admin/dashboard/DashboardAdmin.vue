<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 p-4 gap-4">
    
    <router-link to="/kategori" 
      class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div
        class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      </div>
      <div class="text-right">
        <p class="text-2xl">Data</p>
        <p class="text-xl">Kategori</p>
      </div>
    </router-link>

    <router-link to="/barangadmin" 
      class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div
        class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      </div>
      <div class="text-right">
        <p class="text-2xl">Data</p>
        <p class="text-xl">Barang</p>
      </div>
    </router-link>

    <!-- <router-link to="/tas" 
      class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div
        class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      </div>
      <div class="text-right">
        <p class="text-2xl">Data</p>
        <p>Tas</p>
      </div>
    </router-link> -->

    <!-- <router-link to="/alatmasak"
      class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div
        class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      </div>
      <div class="text-right">
        <p class="text-2xl">Data</p>
        <p>Alat Masak</p>
      </div>
    </router-link> -->

    <!-- <router-link to="/sepatu"
      class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div
        class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      </div>
      <div class="text-right">
        <p class="text-2xl">Data</p>
        <p>Sepatu</p>
      </div>
    </router-link> -->

    <!-- <router-link to="/alatlainnya"
      class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div
        class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      </div>
      <div class="text-right">
        <p class="text-2xl">Data</p>
        <p>Alat Lainnya</p>
      </div>
    </router-link> -->

  </div>
</template>
  
<script>
import { defineComponent, computed } from "vue";
import api from "../../../api.js";
export default defineComponent({
  created() {
    // this.mode = "browse";
    this.loadDataTenda();
    // this.loadDataMasak();
    // this.loadDataTas();
    // this.loadDataSepatu();
    // this.loadDataLainnya();

  },
  data() {
    return {
      dataTenda: [],
      // dataMasak: [],
      // dataTas: [],
      // dataSepatu: [],
      // dataLainnya: [],
      // dataTendaGambar: [],
      // mode: "browse",
      formData: {
        id: null,
        name: "",
        description: "",
        harga: "",
      },
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
      this.loadDataTenda();
      // this.loadDataMasak();
      // this.loadDataTas();
      // this.loadDataSepatu();
      // this.loadDataLainnya();
    },
    onFormClose() {
      // this.mode = "browse";
      this.loadDataTenda();
      // this.loadDataMasak();
      // this.loadDataTas();
      // this.loadDataSepatu();
      // this.loadDataLainnya();
    },
    loadDataTenda() {
      api.get("tenda", this.queryData).then((respon) => {
        this.dataTenda = respon.data.records;
        // this.dataTendaGambar = respon.data.records.images;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.paginationData);
      });
    },
    // loadDataMasak() {
    //   api.get("masak", this.queryData).then((respon) => {
    //     this.dataMasak = respon.data.records;
    //     if (typeof respon.data.paging === "object") {
    //       this.paginationData = respon.data.paging;
    //     }
    //     console.log(this.paginationData);
    //   });
    // },
    // loadDataTas() {
    //   api.get("tas", this.queryData).then((respon) => {
    //     this.dataTas = respon.data.records;
    //     if (typeof respon.data.paging === "object") {
    //       this.paginationData = respon.data.paging;
    //     }
    //     console.log(this.paginationData);
    //   });
    // },
    // loadDataSepatu() {
    //   api.get("sepatu", this.queryData).then((respon) => {
    //     this.dataSepatu = respon.data.records;
    //     if (typeof respon.data.paging === "object") {
    //       this.paginationData = respon.data.paging;
    //     }
    //     console.log(this.paginationData);
    //   });
    // },
    // loadDataLainnya() {
    //   api.get("lainnya", this.queryData).then((respon) => {
    //     this.dataLainnya = respon.data.records;
    //     if (typeof respon.data.paging === "object") {
    //       this.paginationData = respon.data.paging;
    //     }
    //     console.log(this.paginationData);
    //   });
    // },
    addData() {
      // this.mode = "form";
      this.$router.push("/formtenda");
    },

    //   CADANGANNN
    //   onSelect(data) {
    //   // this.mode = "form";
    //   // this.$router.push("/formtenda").selectData(data);
    //   this.$router.push("formtenda/" + data.id).then((respon)) => {
    //     this.loadDataTenda();
    //   });
    //   // ${data.id}`);
    // },   CADANGANNN

    selectData(data) {
      // this.show = true;
      this.formData.id = data.id;
      this.formData.name = data.name;
      this.formData.description = data.description;
      this.formData.harga = data.harga;
      this.formData.image = data.images.length > 0 ? data.images[0].path : null;
    },
    onSelect(data) {
      // this.mode = "form";
      this.$router.push("/formtenda");
      this.selectData(data);
    },
    // onSelect2(data) {
    //   api.put("tenda/" + data.id).then((respon) => {
    //     this.loadDataTenda();
    //     this.$router.push("/formtenda");
    // });
    // },
    onDelete(data) {
      api.delete("tenda/" + data.id).then((respon) => {
        this.loadDataTenda();
      });
    },
    edit: function () {
      // this.$store.dispatch("auth/logout").then(() => {
      this.$router.push("/formtenda");
      // });
    },
    //   onSelect(data) {
    //     this.$router.push("details");
    //   },
  },
});
</script>
  
<style scoped></style>