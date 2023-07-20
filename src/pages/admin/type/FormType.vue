<template>
  <div v-if="show" ref="formType">
    <form class="w-full flex flex-col md:flex-row space-x-12">
      <div class="w-full md:w-1/2">
        <form-input
          v-model="formData.name"
          type="text"
          :error="errors.name"
          placeholder="Masukan Type"
          showlabel=""
          label="Nama Tipe"
        />
        <form-input
          v-model="formData.description"
          type="text"
          :error="errors.description"
          placeholder="Masukan Deskripsi"
          showlabel=""
          label="Deskripsi"
        />
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
          @onSelect="areaChange"
          :options="listArea"
          placeholder="Pilih Area"
          :error="errors.area_id"
          label="Area"
          showlabel=""
        />
        <form-select
          v-model="formData.group_equipment_id"
          @onSelect="groupEquipmentChange"
          :options="listGroupEquipment"
          placeholder="Pilih Grup Equipment"
          :error="errors.group_equipment_id"
          label="Group Equipment"
          showlabel=""
        />
      </div>
      <div class="w-full md:w-1/2">
        <form-select
          v-model="formData.equipment_id"
          :options="listEquipment"
          placeholder="Pilih Equipment"
          :error="errors.equipment_id"
          label="Equipment"
          showlabel=""
        />
        <form-select
          v-model="formData.status"
          :options="listStatus"
          placeholder="Pilih Status"
          :error="errors.status"
          label="Status"
          showlabel=""
        />
        <form-input
          v-model="formData.alasan"
          type="text"
          :error="errors.alasan"
          placeholder="Masukan Alasan ditolak"
          showlabel=""
          label="Alasan"
        />

        <div
    v-if="imagePreview !== null"
    class="rounded-lg w-128 h-64 overflow-hidden"
  >
    <img
      alt="content"
      class="object-cover object-center h-full w-full my-12"
      :src="imagePreview"
    />
  </div>

          <!-- Bagian yang berbeda pada setiap kondisi -->
  <div v-if="formData.id !== null && formData.image !== null && imagePreview === null" class="rounded-lg w-128 h-64 overflow-hidden">
    <img
      alt="content"
      class="object-cover object-center h-full w-full my-12"
      :src="'https://digitm.isoae.com/' + formData.image"
    />
  </div>

        <div class="flex flex-col mt-1">
    <label class="text-xl">Gambar</label>
    <input
      multiple
      type="file"
      ref="fileInput"
      @change="onFilePicked"
      accept="image/*"
      class="bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-700 w-100 mt-2 py-3 px-3 rounded-lg border text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
      placeholder="Masukkan Gambar"
    />
  </div>


        <div class="flex flex-col mt-1">
          <label class="text-xl">Video</label>
          <input
            type="file"
            ref="fileInput2"
            @change="onFileVideoPicked"
            accept="video/*"
            class="bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-700 w-100 mt-2 py-3 px-3 rounded-lg border text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
            placeholder="Masukan Video"
          />
        </div>
      </div>
    </form>
    <div class="w-full">
      <form-quill-editor
        @change="quillTextChanged"
        v-model="formData.content"
        label="Konten"
        required
        :error="errors.content"
        placeholder="masukan isi konten"
      />
    </div>

    <div
      class="w-full 'inline-flex' py-2 item-right 'flex' justify-end ml-auto mt-12"
    >
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
    /*this.getOptionArea();
    this.getOptionEquipment();
    this.getOptionGroupEq();
*/
  },
  data() {
    return {
      errors: [],
      listDivisi: [],
      listArea: [],
      listGroupEquipment: [],
      listEquipment: [],
      //ENUM('draft', 'publish', 'unpublish')
      listStatus: [
        { text: "Draft", value: "draft" },
        { text: "Publish", value: "publish" },
        { text: "Unpublish", value: "unpublish" },
      ],
      show: false,
      formData: {
        id: null,
        name: "",
        description: "",
        content: "",
        division_id: "",
        area_id: "",
        group_equipment_id: "",
        equipment_id: "",
        user_id: "",
        status: "",
        alasan: "",
      },
      image: null,
      imagePreview: null,
      video: null,
    };
  },
  methods: {
    quillTextChanged(html, delta) {
      this.formData.content = html;
    },
    getOptionDivisi() {
      api.get("division/getOption", {}).then((respon) => {
        this.listDivisi = respon.data.records;
      });
    },
    divisiChange(event) {
      this.formData.area_id = "";
      this.formData.group_equipment_id = "";
      this.formData.equipment_id = "";
      this.listArea = [];
      this.listGroupEquipment = [];
      this.listEquipment = [];
      this.getOptionArea(event.target.value);
    },
    areaChange(event) {
      this.formData.group_equipment_id = "";
      this.formData.equipment_id = "";
      this.listGroupEquipment = [];
      this.listEquipment = [];
      this.getOptionGroupEq(this.formData.division_id, event.target.value);
    },
    groupEquipmentChange(event) {
      this.formData.equipment_id = "";
      this.listEquipment = [];
      this.getOptionEquipment(
        this.formData.division_id,
        this.formData.area_id,
        this.formData.group_equipment_id,
        event.target.value
      );
    },
    equipmentChange(event) {
      this.getOptionEquipment(this.formData.division_id, event.target.value);
    },

    getOptionArea(par) {
      let query = {
        division_id: par,
      };
      api.get("area/getOption", query).then((respon) => {
        this.listArea = respon.data.records;
      });
    },
    getOptionGroupEq(division, area) {
      let query = {
        division_id: division,
        area_id: area,
      };

      api.get("groupequipment/getOption", query).then((respon) => {
        this.listGroupEquipment = respon.data.records;
      });
    },
    getOptionEquipment(division, area, groupequipment) {
      let query = {
        division_id: division,
        area_id: area,
        group_equipment_id: groupequipment,
      };
      api.get("equipment/getOption", query).then((respon) => {
        this.listEquipment = respon.data.records;
      });
    },
    clearData() {
      this.image = null;
      this.video = null;
      this.imagePreview = null;

      this.formData.id = null;
      this.formData.name = "";
      this.formData.description = "";
      this.formData.content = "";

      this.formData.division_id = "";
      this.formData.area_id = "";
      this.formData.group_equipment_id = "";
      this.formData.equipment_id = "";
      this.formData.user_id = "";
      this.formData.status = "";
      this.formData.alasan = "";
    },
    clearForm() {
      this.show = false;
      this.$emit("finish");
      this.image = null;
      this.video = null;
      this.imagePreview = null;

      this.formData.id = null;
      this.formData.name = "";
      this.formData.description = "";
      this.formData.content = "";
      this.formData.division_id = "";
      this.formData.area_id = "";
      this.formData.group_equipment_id = "";
      this.formData.equipment_id = "";
      this.formData.user_id = "";
      this.formData.status = "";
      this.formData.alasan = "";
    },
    newData() {
      this.show = true;
      this.clearData();
    },
    onFileVideoPicked(event) {
      const filesV = event.target.files;
      this.video = filesV[0];
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imagePreview = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
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
      this.listEquipment = [];

      this.getOptionArea(data.division_id);
      this.formData.area_id = data.area_id;
      this.formData.group_equipment_id = "";
      this.listGroupEquipment = [];
      this.listEquipment = [];

      this.getOptionGroupEq(data.division_id, data.area_id);
      this.formData.group_equipment_id = data.group_equipment_id;
      this.formData.equipment_id = "";
      this.listEquipment = [];

      this.getOptionEquipment(data.division_id, data.area_id, data.group_equipment_id);
      this.formData.equipment_id = data.equipment_id;

      this.formData.status = data.status;
      this.formData.alasan = data.alasan;
      this.formData.content = data.content; 
      this.formData.image = data.images.length > 0 ? data.images[0].path:null;
      console.log(this.formData.image);
      this.formData.video = data.video;

      
    },

    onSave() {
      const fd = new FormData();
      fd.append("id", this.formData.id);
      fd.append("name", this.formData.name);
      fd.append("description", this.formData.description);
      fd.append("content", this.formData.content);
      fd.append("division_id", this.formData.division_id);
      fd.append("area_id", this.formData.area_id);
      fd.append("group_equipment_id", this.formData.group_equipment_id);
      fd.append("equipment_id", this.formData.equipment_id);
      fd.append("status", this.formData.status);
      fd.append("alasan", this.formData.alasan);

      if (this.image != null) {
        fd.append("image", this.image);
      }
      if (this.video != null) {
        fd.append("video", this.video);
      }

      if (this.formData.id != null) {
        //ini ada id, berarti edit data
        fd.append("_method", "put");
        fd.append("id", "this.formData.id,");
        api
          .post("type/" + this.formData.id, fd, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((respon) => {
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
          .post("type", fd, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
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