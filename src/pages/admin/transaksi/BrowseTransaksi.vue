<template>
  <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row">
    <div class="md:col-span-2 xl:col-span-3">
      <h3 class="text-lg font-semibold">Transaksi</h3>
    </div>
    <div class="w-full flex flex-col mt-12">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <div class="w-full inline-flex" v-if="mode == 'browse'">
            </div>
            <table class="min-w-full text-left text-sm font-light" v-if="mode == 'browse'">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">No</th>
                  <th scope="col" class="px-6 py-4">Invoice Number  </th>
                  <th scope="col" class="px-6 py-4">Nama</th>
                  <th scope="col" class="px-6 py-4">Email</th>
                  <th scope="col" class="px-6 py-4">Alamat</th>
                  <th scope="col" class="px-6 py-4">Tanggal</th>
                  <th scope="col" class="px-6 py-4">Jumlah</th>
                  <th scope="col" class="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(a, index) in riwayat" :key="a.id" class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    {{ index + 1 }}
                  </td>

                  <td class="whitespace-nowrap px-6 py-4">{{ a.invoice }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ a.user.nama }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ a.user.email }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ a.user.alamat }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ a.tanggal }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ a.jumlah_harga }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ a.status }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <!--- Tempat Form Input -->
        <form-transaksi ref="formTransaksi" @finish="onFormClose" />
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios';
import { defineComponent, computed } from "vue";
import api from "../../../api.js";
import FormTransaksi from "./FormTransaksi.vue";
export default defineComponent({
  components: { FormTransaksi },
  data() {
    return {
      riwayat: [],
      mode: "browse",
      token: Cookies.get('token'),
      paginationData: Object,
    };
  },
  created() {
    this.getRiwayat()
  },
  methods: {
    onFormClose() {
      this.mode = "browse";
      //      this.loadData();
    },
    addData() {
      this.mode = "form";
      this.$refs["formTransaksi"].newData();
    },
    getRiwayat(){
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
      axios.get('http://127.0.0.1:8000/api/riwayat', config).then((response)=>{
        this.riwayat = response.data.data
        console.log(response);
      }).catch((err)=>{
        console.log(err);
      })
    },
  },
});
</script>

<style scoped></style>