<template>
  <div v-if="show" ref="formSepatu" class="border-b border-gray-900/10 pb-12 ml-2">
    <h2 class="text-base font-semibold leading-7 text-gray-900">
      Personal Information
    </h2>
    <p class="mt-1 text-sm leading-6 text-gray-600">
      Use a permanent address where you can receive mail.
    </p>

    <div class="my-10 flex flex-col justify-center w-1/2">
      <div class="sm:col-span-3">
        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Jenis Kelamin</label>
        <div class="mt-2">
          <select id="country" name="country" autocomplete="country-name"
            class="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>Tuan</option>
            <option>Nyonya</option>
            <option>Nona</option>
          </select>
        </div>
      </div>

      <div class="sm:col-span-3 mt-2">
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nama</label>
        <div class="mt-2">
          <input type="text" name="first-name" id="first-name" autocomplete="given-name"
            class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="sm:col-span-3 mt-2">
        <label for="nomor" class="block text-sm font-medium leading-6 text-gray-900">Nomor HP</label>
        <div class="mt-2">
          <input type="text" name="nomor" id="nomor-hp" autocomplete="given-phone-number"
            class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <!-- <div class="sm:col-span-3">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div> -->

      <div class="grid grid-cols-2 gap-2 my-2">
        <div class="col-span-1">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Waktu Mulai</label>
          <div class="mt-2">
            <input type="date" name="street-address" id="street-address" autocomplete="street-address"
              class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="col-span-1">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Waktu Berakhir</label>
          <div class="mt-2">
            <input type="date" name="street-address" id="street-address" autocomplete="street-address"
              class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      

      <!-- <div class="sm:col-span-2 sm:col-start-1">
        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
        <div class="mt-2">
          <input type="text" name="city" id="city" autocomplete="address-level2"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
        <div class="mt-2">
          <input type="text" name="region" id="region" autocomplete="address-level1"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div> -->
      <div class="col-span-1">
        <label class="block text-sm font-medium leading-6 text-gray-900">Pilih Kategori Barang yang ingin
          ditambahkan!</label>
      </div>
      <div class="w-full mt-2 item-right flex justify-start ml-auto">
        <my-button @click="addTenda" warnanya="bg-blue-500" warnatext="text-white" warnahover="hover:bg-blue-700"
          label="Tenda" />
        <!-- <my-button @click="addTas" warnanya="bg-blue-500" warnatext="text-white" warnahover="hover:bg-blue-700"
          label="Tas" />
        <my-button @click="addMasak" warnanya="bg-blue-500" warnatext="text-white" warnahover="hover:bg-blue-700"
          label="Alat Masak" />
        <my-button @click="addSepatu" warnanya="bg-blue-500" warnatext="text-white" warnahover="hover:bg-blue-700"
          label="Sepatu" />
        <my-button @click="addLainnya" warnanya="bg-blue-500" warnatext="text-white" warnahover="hover:bg-blue-700"
          label="Alat Lainnya" /> -->
      </div>

      <table class="min-w-full text-left text-sm font-light mt-12">
        <thead class="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" class="px-6 py-4">No</th>
            <th scope="col" class="px-6 py-4">Barang</th>
            <th scope="col" class="px-6 py-4">Harga</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(item, index) in formData.details" :key="item.id" class="border-b dark:border-neutral-500"> -->
          <tr v-for="(item, index) in formData.details" :key="item.id" class="border-b dark:border-neutral-500">
            <td class="whitespace-nowrap px-6 py-4 font-medium">
              {{ index + 1 }}
            </td>
            <!-- <td class="whitespace-nowrap px-6 py-4">
              <form-select :options="listKategori" placeholder="Pilih Kategori"
                :error="errors" />
            </td> -->
            <td class="whitespace-nowrap px-6 py-4">
              <form-select v-model="item.name" :options="dataTenda" placeholder="Pilih Tenda"
                :error="errors['details.' + index + '.name']" />
            </td>
            
            <!-- <td class="whitespace-nowrap px-6 py-4">
              <form-input v-model="item.qty" type="number" placeholder="Masukan Qty" />
            </td> -->
            <td class="whitespace-nowrap px-6 py-4">
              <form-input v-model="item.harga" type="number" :isReadOnly="true" placeholder="Masukan Harga" />
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <my-button @doClick="deleteRow(index)" warnanya="bg-red-100" warnatext="text-red-600"
                warnahover="hover:bg-red-200" label="Hapus" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- <div class="inline-flex py-2">
          <my-button @doClick="clearForm" warnanya="bg-yellow-500" warnatext="text-white" warnahover="hover:bg-yellow-600"
            label="Kembali" />
          <my-button @doClick="onSave" warnanya="bg-green-500" warnatext="text-white" warnahover="hover:bg-green-600"
            label="Simpan" />
        </div> -->
</template>

<script>
import { defineComponent } from "vue";
import api from "../../../api.js";
import FormInput from "../../../components/FormInput.vue";
export default defineComponent({
  components: { FormInput },
  emits: ["finish"],
  created() {
    this.getOptionPesanan();
    // this.mode = "form";
  },
  data() {
    return {
      errors: [],
      listPesanan: [],
      show: false,
      formData: {
        id: null,
        jk: "",
        name: "",
        phone: "",
        time_from: "",
        time_to: "",
        details: [],
      },
      // listKategori: [
      //   { text: "Tenda", value: "Tenda" },
      //   { text: "Tas", value: "Tas" },
      //   { text: "Alat Masak", value: "Alat Masak" },
      //   { text: "Sepatu", value: "Sepatu" },
      //   { text: "Alat Lainnya", value: "Alat Lainnya" },
      // ],

      dataTenda: [],
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
    getOptionPesanan() {
      api.get("pemesanan", {}).then((respon) => {
        this.listPesanan = respon.data.records;
      });
    },
    getOptionTenda() {
      api.get("tenda", {}).then((respon) => {
        this.dataTenda = respon.data.records;
      });
    },
    clearData() {
      this.formData.id = null;
      this.formData.jk = "";
      this.formData.name = "";
      this.formData.phone = "";
      this.formData.time_from = "";
      this.formData.time_to = "";
      this.formData.details = [];
    },
    clearForm() {
      this.show = false;
      this.$emit("finish");

      this.formData.id = null;
      this.formData.jk = "";
      this.formData.name = "";
      this.formData.phone = "";
      this.formData.time_from = "";
      this.formData.time_to = "";
      this.formData.details = [];
    },
    newData() {
      this.show = true;
      this.clearData();
    },
    addTenda() {
      this.formData.details.push({
        name: "",
        harga: "",
      })
    },
    addRow() {
      this.formData.details.push({
        division_id: "",
        qty: 1,
        harga: 0,
      });
    },
    deleteRow(index) {
      this.formData.details.splice(index, 1);
    },
    selectData(data) {
      this.show = true;
      this.formData.id = data.id;
      this.formData.jk = data.jk;
      this.formData.name = data.name;
      this.formData.phone = data.phone;
      this.formData.time_from = data.time_from;
      this.formData.time_to = data.time_to;
      this.formData.details = [];

      this.formData.id = data.id;
      this.formData.name = data.name;
      this.formData.description = data.description;
      this.formData.harga = data.harga;
      this.formData.image = data.images.length > 0 ? data.images[0].path : null;
      // console.log(this.formData.image);
    },
    loadData() {
      api.get("tenda", this.queryData).then((respon) => {
        this.dataTenda = respon.data.records;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.paginationData);
      });
    },
    onSave() {
      if (this.formData.id != null) {
        //ini ada id, berarti edit data
        api
          .put("pemesanan/" + this.formData.id, this.formData)
          .then((respon) => {
            this;
            this.show = false;
            this.$emit("finish");
          })
          .catch((err) => {
            if (err.response.status === 422) {
              this.errors = err.response.data.errors;
            }
          });
      } else {
        //new data
        api
          .post("pemesanan", this.formData)
          .then((respon) => {
            this.show = false;
            this.$emit("finish");
          })
          .catch((err) => {
            if (err.response.status === 422) {
              this.errors = err.response.data.errors;
            }
          });
      }
    },
  },
});
</script>

<style scoped></style>
