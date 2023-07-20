<template>
  <div v-if="show" ref="formArea">
    <form class="flex flex-col justify-center w-1/2">
      <form-select
        @onSelect="divisiChange"
        v-model="formData.division_id"
        :options="listDivisi"
        placeholder="Pilih Divisi"
        :error="errors.division_id"
        label="Divisi"
        showlabel=""
      />
      <form-input
        v-model="formData.name"
        :error="errors.name"
        :border="errors.name ? 'border-red-400' : 'border-gray-400'"
        placeholder="Masukan Nama"
        showlabel=""
        label="Nama"
      />
      <form-input
        v-model="formData.description"
        :error="errors.description"
        :border="errors.name ? 'border-red-400' : 'border-gray-400'"
        placeholder="Masukan deskripsi"
        showlabel=""
        label="Deskripsi"
      />
      <div class="inline-flex py-2">
        <my-button
          @doClick="clearForm"
          warnanya="bg-yellow-500"
          warnatext="text-white"
          warnahover="hover:bg-yellow-600"
          label="Kembali"
        />
        <my-button
          @doClick="onSave"
          warnanya="bg-green-500"
          warnatext="text-white"
          warnahover="hover:bg-green-600"
          label="Simpan"
        />
        <!-- ini pakai komponen button standart -->
        <!-- <button @click="onSave" type="button" class="text-white bg-indigo-500 border-0 mr-4 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Simpan</button>-->
        <!--  <button @click="clearForm" type="button" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Kembali</button>-->
        <!--- ini pakai komponen button custom style -->
        <!-- <button @click="onSave" type="button" class="my-button-green">Simpan</button> -->
        <!-- <button @click="onSave" type="button" class="my-button-yellow">Kembali</button> -->
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import api from "../../../api.js";
import FormInput from "../../../components/FormInput.vue";
import FormSelect from "../../../components/FormSelect.vue";
export default {
  components: { FormInput, FormSelect },
  emits: ["finish"],
  created() {
    this.getOptionDivisi();
  },

  data() {
    return {
      errors: [],
      listDivisi: [],
      show: false,
      formData: {
        id: null,
        division_id: "",
        name: "",
        description: "",
      },
    };
  },
  methods: {
    getOptionDivisi() {
      api.get("division/getOption", {}).then((respon) => {
        this.listDivisi = respon.data.records;
      });
    },
    divisiChange(event) {
      this.formData.area_id = "";
      // this.listArea = [];
      // this.getOptionArea(event.target.value);
    },

    newData() {
      (this.errors = []), (this.show = true);
      this.formData.id = null;
      this.formData.division_id = "";
      this.formData.name = "";
      this.formData.description = "";
    },

    selectData(data) {
      this.show = true;
      this.formData.division_id = data.division_id;
      this.formData.id = data.id;
      this.formData.name = data.name;
      this.formData.description = data.description;
    },
    onSave() {
      if (this.formData.id != null) {
        //ini ada id, berarti edit data
        api
          .put("area/" + this.formData.id, this.formData)
          .then((respon) => {
            this.clearForm();
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
          .post("area", this.formData)
          .then((respon) => {
            this.clearForm();
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
    clearForm() {
      this.show = false;
      this.$emit("finish");
      this.formData.id = null;
      this.formData.id = [];
      this.formData.name = "";
      this.formData.description = "";
    },
  },
};
</script>

<style>
</style>