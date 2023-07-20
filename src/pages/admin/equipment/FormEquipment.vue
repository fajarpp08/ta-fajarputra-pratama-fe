<template>
  <div v-if="show" ref="formEquipment">
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
        @onSelect="areaChange"
          v-model="formData.area_id"
          :options="listArea"
          placeholder="Pilih Area"
          :error="errors.area_id"
          label="Area"
          showlabel=""
        />
        <form-select
        @onSelect="groupEqChange"
          v-model="formData.group_equipment_id"
          :options="listGroupEquipment"
          placeholder="Pilih Group Equipment"
          :error="errors.group_equipment_id"
          label="Group Equipment"
          showlabel=""
        />
        <form-input
          v-model="formData.name"
          type="text"
          :error="errors.name"
          placeholder="Masukkan Equipment"
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
      listGroupEquipment: [],
      show: false,
      formData: {
        id: null,
        name: "",
        description: "",
        division_id: "",
        area_id: "",
        group_equipment_id: "",
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
      this.listGroupEquipment = [];
      this.getOptionArea(event.target.value);
    },
    areaChange(event) {
      this.formData.group_equipment_id = "";
      this.listGroupEquipment = [];
      this.getOptionGroupEquipment(this.formData.group_equipment_id, event.target.value);
    },
    groupEqChange(event) {
      this.formData.equipment_id = "";
      this.listEquipment = [];
      this.getOptionEquipment(this.formData.equipment_id, event.target.value);
    },

    getOptionArea(par) {
      let query = {
        division_id: par,
      };
      api.get("area/getOption", query).then((respon) => {
        this.listArea = respon.data.records;
      });
    },
    getOptionGroupEquipment(division, area) {
      let query = {
        division_id: division,
        area_id: area,
      };
      api.get("groupequipment/getOption", query).then((respon) => {
        this.listGroupEquipment = respon.data.records;
      });
    },

    clearData() {
      this.show = false;
      this.$emit("finish");
      this.formData.id = null;
      this.formData.name = "";
      this.formData.description = "";
      this.formData.division_id = "";
      this.formData.area_id = "";
      this.formData.group_equipment_id = "";
    },

    newData() {
      (this.errors = []), (this.show = true);
      this.formData.id = null;
      this.formData.name = "";
      this.formData.description = "";
      this.formData.division_id = "";
      this.formData.area_id = "";
      this.formData.group_equipment_id = "";

    },

    selectData(data) {
      this.show = true;
      this.formData.id = data.id;
      this.formData.name = data.name;
      this.formData.description = data.description;

      this.formData.division_id = data.division_id;
      this.formData.area_id = "";
      this.listArea = [];
      this.listGroupEquipment = [];

      this.getOptionArea(data.division_id);
      this.formData.area_id = data.area_id;
      this.formData.group_equipment_id = "";
      this.listGroupEquipment = [];

      this.getOptionGroupEquipment(data.division_id, data.area_id);
      this.formData.group_equipment_id = data.group_equipment_id;
      this.formData.equipment_id = "";
      this.listEquipment = [];

    },

    onSave() {
      if (this.formData.id != null) {
        //ini ada id, berarti edit data
        api
          .put("equipment/" + this.formData.id, this.formData)
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
          .post("equipment", this.formData)
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
