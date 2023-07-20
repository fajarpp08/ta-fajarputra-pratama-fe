<template>
  <div v-if="show" ref="formGroup">
    <form class="w-full flex flex-col md:flex-row space-x-12">
      <div class="w-full md:w-1/2">
        <form-select
          @onSelect="divisiChange"
          v-model="formData.division_id"
          :options="listDivisi"
          placeholder="Pilih Divisi"
          :error="errors.division_id"
          label="Divisi"
          showlabel=""
        />
        <form-select
          v-model="formData.area_id"
          :options="listArea"
          placeholder="Pilih Area"
          :error="errors.area_id"
          label="Area"
          showlabel=""
        />
        <form-input
          v-model="formData.name"
          type="text"
          :error="errors.name"
          placeholder="Masukkan Grup"
          showlabel=""
          label="Nama Grup"
        />
        <form-input
          v-model="formData.description"
          type="text"
          :error="errors.description"
          placeholder="Masukkan Deskripsi"
          showlabel=""
          label="Deskripsi"
        />
      </div>
    </form>
    <div class="inline-flex py-2">
      <my-button
        @doClick="clearData"
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
      listDivisi: [],
      listArea: [],
      show: false,
      formData: {
        id: null,
        name: "",
        description: "",
        division_id: "",
        area_id: "",
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
      this.listArea = [];
      this.getOptionArea(event.target.value);
    },
    getOptionArea(par) {
      let query = {
        division_id: par,
      };
      api.get("area/getOption", query).then((respon) => {
        this.listArea = respon.data.records;
      });
    },

    clearData() {
      this.show = false;
      this.$emit("finish");
      this.formData.id = null;
      this.formData.id = [];
      this.formData.name = "";
      this.formData.description = "";
      this.formData.division_id = "";
      this.formData.area_id = "";
    },

    newData() {
      (this.errors = []), (this.show = true);
      this.formData.id = null;
      this.formData.name = "";
      this.formData.description = "";
      this.formData.division_id = "";
      this.formData.area_id = "";
    },

    selectData(data) {
      this.show = true;
      this.formData.id = data.id;
      this.formData.name = data.name;
      this.formData.description = data.description;
      this.formData.division_id = data.division_id;
      this.formData.area_id = "";
      this.listArea = [];
      this.getOptionArea(data.division_id);
      this.formData.area_id = data.area_id;
    },

    onSave() {
      if (this.formData.id != null) {
        //ini ada id, berarti edit data
        api
          .put("groupequipment/" + this.formData.id, this.formData)
          .then((respon) => {
            this.clearData();
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
          .post("groupequipment", this.formData)
          .then((respon) => {
            this.clearData();
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
