<template>
  <div v-if="show" ref="formBank">
    <form class="flex flex-col justify-center w-1/2">
      <form-input v-model="formData.bank" :error="errors.bank"
        :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan Bank" showlabel=""
        label="Nama Bank" />
      <form-input v-model="formData.name" :error="errors.name"
        :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan Nama Rekening" showlabel=""
        label="Nama Rekening" />
      <form-input v-model="formData.norek" :error="errors.norek"
        :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan Nomor Rekening" showlabel=""
        label="Nomor Rekening" />
      <div class="inline-flex py-2">
        <my-button @doClick="clearForm" warnanya="bg-yellow-500" warnatext="text-white" warnahover="hover:bg-yellow-600"
          label="Kembali" />
        <my-button @Click="onSave" warnanya="bg-green-500" warnatext="text-white" warnahover="hover:bg-green-600"
          label="Simpan" />
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
import axios from "axios";
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
      formData: {
        id: null,
        bank: "",
        name: "",
        norek: "",
      },
    };
  },
  methods: {
    goBack() {
      // Kembali ke halaman sebelumnya
      window.history.back();
    },
    newData() {
      (this.errors = []), (this.show = true);
      this.formData.id = null;
      this.formData.bank = "";
      this.formData.name = "";
      this.formData.norek = "";
    },
    selectData(data) {
      this.show = true;
      this.formData.id = data.id;
      this.formData.bank = data.bank;
      this.formData.name = data.name;
      this.formData.norek = data.norek;
    },
    onSave() {
        if (this.formData.id != null) {
          //ini ada id, berarti edit data
          api
            .put("bank/" + this.formData.id, this.formData)
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
            .post("bank", this.formData)
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
    onSaave() {
      if (this.formData.id != null) {
      //ini ada id, berarti edit data
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      const bodyParams = {
        name: this.formData.name
      };

      axios.put(`http://127.0.0.1:8000/api/bank/${this.formData.id}`, bodyParams, config)
        .then((response) => {
          this.$swal({
            icon: 'success',
            title: 'berhasil tambah data'
          }).then(() => {
            this.clearForm()
          })
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //new data
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      const bodyParams = {
        name: this.formData.name
      };

      axios.post('http://127.0.0.1:8000/api/bank', bodyParams, config)
        .then((response) => {
          this.$swal({
            icon: 'success',
            title: 'berhasil tambah data'
          }).then(() => {
            this.clearForm()
          })
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
    // goBack() {
    //     // Kembali ke halaman sebelumnya
    //     window.history.back();
    //   },
    clearForm() {
      this.show = false;
      this.$emit("finish");
      this.formData.id = null;
      this.formData.name = "";
      this.formData.description = "";
    },
  },

 
  postKategori() {
    const config = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    };
    const bodyParams = {
      name: this.form.name
    };

    axios.post('http://integrasiautama.my.id/api/bank', bodyParams, config)
      .then((response) => {
        this.$swal({
          icon: 'success',
          title: 'berhasil tambah data'
        }).then(() => {
          this.clearForm()
        })
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
</script>
  
<style scoped></style>