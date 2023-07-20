<template>
  <div v-if="show" ref="FormTransaksi">
    <form class="flex flex-col justify-center w-1/3">
      <form-input v-model="formData.nomor" is-read-only placeholder="Masukan Nomor" showlabel="" warnanya="bg-gray-800"
        label="Nomor Transaksi" />
      <form-input v-model="formData.tgl" type="date" :error="errors.tgl" placeholder="Masukan tanggal" showlabel=""
        label="Tanggal" />
    </form>
    <div class="w-full item-right flex justify-end ml-auto">
      <my-button @click="addRow" warnanya="bg-purple-500" warnatext="text-white" warnahover="hover:bg-purple-700"
        label="Add" />
    </div>
    <table class="min-w-full text-left text-sm font-light mt-12">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" class="px-6 py-4">#</th>
          <th scope="col" class="px-6 py-4">Divisi</th>
          <th scope="col" class="px-6 py-4">Qty</th>
          <th scope="col" class="px-6 py-4">Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in formData.details" :key="item.id" class="border-b dark:border-neutral-500">
          <td class="whitespace-nowrap px-6 py-4 font-medium">
            {{ index + 1 }}
          </td>
          <td class="whitespace-nowrap px-6 py-4">
            <form-select v-model="item.division_id" :options="listDivisi" placeholder="Pilih Divisi"
              :error="errors['details.' + index + '.division_id']" />
          </td>
          <td class="whitespace-nowrap px-6 py-4">
            <form-input v-model="item.qty" type="number" placeholder="Masukan Qty" />
          </td>
          <td class="whitespace-nowrap px-6 py-4">
            <form-input v-model="item.harga" type="number" placeholder="Masukan Harga" />
          </td>
          <td class="whitespace-nowrap px-6 py-4">
            <my-button @doClick="deleteRow(index)" warnanya="bg-red-100" warnatext="text-red-600"
              warnahover="hover:bg-red-200" label="Hapus" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="w-full inline-flex py-2 item-right flex justify-end ml-auto mt-12">
      <my-button @doClick="clearForm" warnanya="bg-yellow-500" warnatext="text-white" warnahover="hover:bg-yellow-600"
        label="Kembali" />
      <my-button @doClick="onSave" warnanya="bg-green-500" warnatext="text-white" warnahover="hover:bg-green-600"
        label="Simpan" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import api from "../../../api.js";
import FormInput from "../../../components/FormInput.vue";
import FormSelect from "../../../components/FormSelect.vue";
export default defineComponent({
  components: { FormSelect, FormInput },
  emits: ["finish"],
  created() {
    this.getOptionDivisi();
  },
  data() {
    return {
      errors: [],
      show: false,
      listDivisi: [],
      formData: {
        nomor: "",
        tgl: "",
        details: [],
      },
    };
  },
  methods: {
    async generateNomor() {
      await api.get("transaksi/auto-number", {}).then((respon) => {
        this.formData.nomor = respon.data.nomor;
      });
    },
    onSave() {
      if (this.formData.id != null) {
        //ini ada id, berarti edit data
        api
          .put("transaksi/" + this.formData.id, this.formData)
          .then((respon) => {
            this
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
          .post("transaksi", this.formData)
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
    getOptionDivisi() {
      api.get("division/getOption", {}).then((respon) => {
        this.listDivisi = respon.data.records;
      });
    },
    newData() {
      this.show = true;
      this.generateNomor();
      this.formData.tgl = "";
      this.formData.details = [];
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
    clearForm() {
      this.show = false;
      this.$emit("finish");
      this.formData.tgl = '';
      this.formData.details = [];
    },
  },
});
</script>

<style scoped></style>