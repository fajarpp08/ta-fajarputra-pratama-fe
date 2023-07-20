<template>
  <div class="bg-white">
    <!-- Hero -->
    <div class="container bg-gray-200 mx-auto my-6 flex px-8 py-8 md:flex-row flex-col rounded-2xl items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center w-full shadow-2xl rounded-2xl" alt="hero"
          src="https://zonaebt.com/wp-content/uploads/biomass-2-1.webp" />
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium tracking-tight text-gray-900">
          Selamat datang di
          <br class="hidden lg:inline-block tracking-tight" />Digital
          Maintenance Journal
        </h1>
        <p class="mb-4 leading-relaxed tracking-tight">
          Silahkan pilih alat yang ingin dipelajari.
        </p>
        <div class="flex justify-center">

        </div>
      </div>
    </div>
    <!-- End Hero -->

    <!-- filter -->
    <div class="container py-6 mx-auto mb-8 bg-gray-200 shadow-lg rounded-2xl px-4 md:px-6 md:mt-3 space-x-10">
      <div class=" py-6 mx-auto bg-gray-300 shadow-lg rounded-2xl px-4 md:mt-3 space-x-10">
        <table class="w-full">
          <td class="w-1/3">
            <form-select v-model="queryData.area_id" @onSelect="areaChange" :options="listArea" placeholder="Semua Area"
              label="" showlabel="" />
          </td>
          <td class="w-1/3">
            <form-select v-model="queryData.group_equipment_id" @onSelect="groupEquipmentChange"
              :options="listGroupEquipment" placeholder="Semua Group Equipment" label="" showlabel="" />
          </td>
          <td class="w-1/3">
            <form-select v-model="queryData.equipment_id" @onSelect="EquipmentChange" :options="listEquipment"
              placeholder="Semua Equipment" label="" showlabel="" />
          </td>
        </table>
        <input v-model="queryData.name" @change="onSearching()" placeholder="Masukan kata kunci pencarian" class="w-11/12 my-2 bg-white rounded border-2 border-gray-200 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>

      <!-- <div class="container relative px-5 py-24 mx-auto"> -->
      <div class="py-4 md:mx-6 flex flex-wrap overflow-hidden">
        <div v-for="a in dataType" :key="a.id" class="p-2 md:w-1/3 ">
          <div v-for="(item) in a.images" :key="item.id"
            class="w-full overflow-hidden shadow-xl border-4 border-gray-400 border-opacity-60 rounded-3xl">
            <img class="lg:h-48 md:h-36 w-full object-cover object-fix" :src="'https://digitm.isoae.com/' + item.path"
              alt="blog">
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ a.name }}</h1>
              <p class="leading-relaxed mb-3">{{ a.description }}</p>
              <div class="flex items-center flex-wrap ">
                <router-link :to="'/content/' + a.id"
                  class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Lihat Detail
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../api.js";
// import CardType from '../../components/CardType.vue';
import FormSelect from "../../components/FormSelect.vue";

export default {
  components: { FormSelect },
  data() {
    return {
      dataType: [],
      queryData: {
        page: 1,
        name: "",
        limit: 10,
        order_col: "",
        order_type: "",
        division_id: "",
        area_id: "",
        group_equipment_id: "",
        equipment_id: "",
      },
      listArea: [],
      listGroupEquipment: [],
      listEquipment: [],
      paginationData: Object,
    };
  },
  created() {
    this.loadData();
    this.getOptionArea();
  },
  methods: {
    getOptionArea(par) {
      api.get("area/getOption", {}).then((respon) => {
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
    getOptionEquipment(division, area, groupEquipment) {
      let query = {
        division_id: division,
        area_id: area,
        group_equipment_id: groupEquipment,
      };
      api.get("equipment/getOption", query).then((respon) => {
        this.listEquipment = respon.data.records;
      });

    },
    areaChange(event) {
      this.queryData.group_equipment_id = "";
      this.queryData.equipment_id = "";
      this.listGroupEquipment = [];
      this.listEquipment = [];
      this.getOptionGroupEquipment(
        this.queryData.division_id,
        event.target.value
      );
      this.loadData();
    },
    groupEquipmentChange(event) {
      this.queryData.equipment_id = "";
      this.listEquipment = [];
      this.getOptionEquipment(
        this.queryData.division_id,
        this.queryData.area_id,
        event.target.value
      );
      this.loadData();
    },
    EquipmentChange(event) {
      this.queryData.division_id,
        this.queryData.area_id,
        this.queryData.group_equipment_id,
        event.target.value
      this.loadData();
    },

    onSearching(event) {
      this.loadData();
    },
    loadData() {
      api.get("type", this.queryData).then((respon) => {
        this.dataType = respon.data.records;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.dataType);
      });
    },
    mulai: function () {
      // this.$store.dispatch("auth/logout").then(() => {
      this.$router.push("/");
      // });
    },
  },
};
</script>

<style></style>

