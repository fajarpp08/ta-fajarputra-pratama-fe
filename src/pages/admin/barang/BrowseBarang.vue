<template>
  <div class="relative min-h-screen">
    <div class="min-h-screen mx-auto flex flex-wrap p-5 flex-col md:flex-row">
      <div class="md:col-span-2 xl:col-span-3">
        <h3 class="text-2xl tracking-tight font-bold">Barang</h3>
      </div>
      <div class="w-full flex flex-col mt-0">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <div class="w-full inline-flex" v-if="mode == 'browse'">
                <!-- <input v-model="dataBarang.name" @change="onSearching()" placeholder="Masukan nama untuk pencarian"
                  class="w-3/5 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> -->
                <div class="w-full item-right flex justify-start ml-auto">
                  <my-button @doClick="addData" warnanya="bg-blue-500" warnatext="text-white"
                    warnahover="hover:bg-blue-700" label="Tambah Data" />
                </div>
              </div>

              <table class="min-w-full text-left text-sm font-light" v-if="mode == 'browse'">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">No</th>
                    <th scope="col" class="px-6 py-4">Name</th>
                    <th scope="col" class="px-6 py-4">Description</th>
                    <th scope="col" class="px-6 py-4">Gambar</th>
                    <th scope="col" class="px-6 py-4">Harga</th>
                    <th scope="col" class="px-6 py-4">Stok</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(a, index) in dataBarang" :key="a.id" class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                      {{ index + 1 }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">{{ a.nama }}</td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {{ a.deskripsi }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      <a :href="a.foto" target="_blank">
                        <button
                          class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
                          type="button">Lihat</button>
                      </a>
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {{ a.harga }}
                    </td>
                    <td>
                      <div class="d-flex justify-content-center cursor-pointer">
                        <p>
                          <span @click="kurangQty(a.id)">
                            -
                          </span>
                          {{ a.stok }}
                          <span @click="tambahQty(a.id)">
                            +
                          </span>
                        </p>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      <my-button @doClick="editBarang(a.id)" warnanya="bg-gray-100" warnatext="text-blue-600"
                        warnahover="hover:bg-gray-200" label="Edit" />
                      <!-- <router-link :to="'/detailtenda/' + a.id">
                        <my-button warnanya="bg-gray-100" warnatext="text-blue-600" warnahover="hover:bg-gray-200"
                          label="View" />
                      </router-link> -->
                      <my-button @Click="onDelete(a.id)" warnanya="bg-red-100" warnatext="text-red-600"
                        warnahover="hover:bg-red-200" label="Hapus" />
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
          <form-barang ref="formBarang" @finish="onFormClose" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";
import Cookies from 'js-cookie'
import { defineComponent, computed } from "vue";
import api from "../../../api.js";
import FormBarang from "./FormBarang.vue";
export default defineComponent({
  components: { FormBarang },
  created() {
    this.mode = "browse";
    this.loadData();
  },
  data() {
    return {
      dataBarang: [],
      mode: "browse",
      queryData: {
        page: 1,
        name: "",
        limit: 10,
        order_col: "",
        order_type: "",
      },
      token: Cookies.get('token'),
      paginationData: Object,
    };
  },
  methods: {
    tambahQty(id) {
      this.$router.push({ name: 'Tambah Qty Barang', params: { id: id } })
    },
    kurangQty(id) {
      this.$router.push({ name: 'Kurang Qty Barang', params: { id: id } })
    },
    editBarang(id) {
      this.$router.push({ name: 'Edit Barang', params: { id: id } })
    },
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
      this.$refs["formBarang"].newData();
    },
    onDelete(id) {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
      axios.delete(`http://127.0.0.1:8000/api/barang/${id}`, config).then((response) => {
        this.$swal({
          icon: 'success',
          title: 'Berhasil Hapus Data'
        })
        this.loadData()
      }).catch((err) => {
        console.log(err);
      })
    },
    onSelect(data) {
      this.mode = "form";
      this.$refs["formBarang"].selectData(data);
    },
    onSearching(event) {
      this.loadData();
    },
    loadData() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
      axios.get('http://127.0.0.1:8000/api/barang', config).then((response) => {
        console.log(response);
        this.dataBarang = response.data.data
      }).catch((err) => {
        console.log(err);
      })
    },
  },
  created() {
    this.loadData()
  },
});
</script>
  
<style scoped></style>