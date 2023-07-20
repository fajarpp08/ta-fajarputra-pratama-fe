<template>
    <div v-if="show" ref="formAdmin">
      <form class="flex flex-col justify-center w-1/2">
        <form-input
          v-model="formData.name"
          :error="errors.name"
          :border="errors.name ? 'border-red-400' : 'border-gray-400'"
          placeholder="Masukkan Nama"
          showlabel=""
          label="Nama"
        />
        <form-input
          v-model="formData.email"
          :error="errors.email"
          :border="errors.name ? 'border-red-400' : 'border-gray-400'"
          placeholder="Masukkan Email"
          showlabel=""
          label="Email"
        />
        <form-input
          v-model="formData.password"
          :error="errors.password"
          :border="errors.password ? 'border-red-400' : 'border-gray-400'"
          placeholder="Masukkan Password"
          showlabel=""
          label="Password"
        />
        <form-input
          v-model="formData.role_id"
          :error="errors.role_id"
          :border="errors.role_id ? 'border-red-400' : 'border-gray-400'"
          placeholder="Masukkan Role"
          showlabel=""
          label="Role"
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
  import FormInput from "./../../../components/FormInput.vue";
  export default defineComponent({
    components: { FormInput },
    emits: ["finish"],
    created() {},
    data() {
      return {
        errors: [],
        show: false,
        formData: {
          id: null,
          name: "",
          email: "",
          password: "",
          role_id: "",
        },
      };
    },
    methods: {
      newData() {
        (this.errors = []), (this.show = true);
        this.formData.id = null;
        this.formData.name = "";
        this.formData.email = "";
        this.formData.role_id = "";
      },
      selectData(data) {
        this.show = true;
        this.formData.id = data.id;
        this.formData.name = data.name;
        this.formData.email = data.email;
        this.formData.role_id = data.role_id;
      },
      onSave() {
        if (this.formData.id != null) {
          //ini ada id, berarti edit data
          api
            .put("user/" + this.formData.id, this.formData)
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
            .post("user", this.formData)
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
      goBack() {
        // Kembali ke halaman sebelumnya
        window.history.back();
      },
      clearForm() {
        this.show = false;
        this.$emit("finish");
        this.formData.id = null;
        this.formData.name = "";
        this.formData.description = "";
      },
    },
  });
  </script>
  
  <style scoped>
  </style>