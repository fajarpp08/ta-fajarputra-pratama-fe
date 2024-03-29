<template>
  <div v-if="show" ref="formAdmin">
    <form class="flex flex-col justify-center w-1/2">
      <form-input v-model="form.name" placeholder="Masukkan Nama" showlabel="" label="Nama" />
      <form-input v-model="form.email" placeholder="Masukkan Email" showlabel="" label="Email" />
      <form-input v-model="form.password" placeholder="Masukkan Password" showlabel="" label="Password" />
      <div class="inline-flex py-2">
        <my-button @doClick="clearForm" warnanya="bg-yellow-500" warnatext="text-white" warnahover="hover:bg-yellow-600"
          label="Kembali" />
        <my-button @doClick="postAdmin" warnanya="bg-green-500" warnatext="text-white" warnahover="hover:bg-green-600"
          label="Simpan" />
      </div>
    </form>
  </div>
</template>
  
<script>
import Cookies from 'js-cookie'
import axios from 'axios';
import { defineComponent } from "vue";
import api from "../../../api.js";
import FormInput from "./../../../components/FormInput.vue";
export default defineComponent({
  components: { FormInput },
  emits: ["finish"],
  created() { },
  data() {
    return {
      errors: [],
      show: false,
      token: Cookies.get('token'),
      form: {
        name: '',
        email: '',
        password: '',
        role_id: '2',
      },
    };
  },
  methods: {
    newData() {
      (this.errors = []), (this.show = true);
      // this.formData.id = null;
      this.form.name = "";
      this.form.email = "";
      this.form.role_id = "";
    },
    selectData(data) {
      this.show = true;
      this.form.id = data.id;
      this.form.name = data.name;
      this.form.email = data.email;
      this.form.role_id = data.role_id;
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
    postAdmin() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };

      const data = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        role_id: '2'
      };

      axios.post('http://127.0.0.1:8000/api/user/admin', data, config)
        .then((response) => {
          this.$swal({
            icon: 'success',
            title: 'Berhasil Tambah Admin'
          })
          this.clearForm()
        })
        .catch((err) => {
          console.error(err);
        });
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
  
<style scoped></style>