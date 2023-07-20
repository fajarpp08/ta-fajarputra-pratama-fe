<template>
  <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row">
    <div class="md:col-span-2 xl:col-span-3">
      <h3 class="text-lg font-semibold">Type</h3>
    </div>
    <div class="w-full flex flex-col mt-12">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <div class="w-full inline-flex" v-if="mode == 'browse'">
              <input v-model="queryData.name" @change="onSearching()" placeholder="Masukan nama untuk pencarian"
                class="w-2/5 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              <div class="w-3/5 item-right flex justify-end ml-auto">
                <my-button @doClick="addData" warnanya="bg-blue-500" warnatext="text-white" warnahover="hover:bg-blue-700"
                  label="Tambah Data" />
              </div>
            </div>

            <table class="min-w-full text-left text-sm font-light" v-if="mode == 'browse'">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">No</th>
                  <th scope="col" class="px-6 py-4">Division</th>
                  <th scope="col" class="px-6 py-4">Area</th>
                  <th scope="col" class="px-6 py-4">Group Equipment</th>
                  <th scope="col" class="px-6 py-4">Equipment</th>
                  <th scope="col" class="px-6 py-4">Name</th>
                  <!-- <th scope="col" class="px-6 py-4">Description</th>
                <th scope="col" class="px-6 py-4">Alasan</th>
                <th scope="col" class="px-6 py-4">Status</th> -->
                  <!--                <th scope="col" class="px-6 py-4">Content</th>-->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(a, index) in dataType" :key="a.id" class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    {{ index + 1 }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ a.division.name }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">{{ a.area.name }}</td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ a.group_equipment.name }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ a.equipment.name }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">{{ a.name }}</td>
                  <!-- <td class="whitespace-nowrap px-6 py-4">{{a.description}}</td>
                <td class="whitespace-nowrap px-6 py-4">{{a.alasan}}</td>
                <td class="whitespace-nowrap px-6 py-4">{{a.status}}</td> -->
                  <!-- <td class="whitespace-nowrap px-6 py-4">
                
                <article class="prose" v-html="a.content">
                 </article>
                </td> -->
                  <!-- <td class="whitespace-nowrap px-6 py-4"> 
                    <div v-for="(item) in a.images" :key="item.id">
                      <img  class="object-cover object-center w-10 h-10 shadow-2xl rounded-2xl" alt="hero" :src="'https://digitm.isoae.com/'+item.path">
                      <p>{{ item.path }}</p>
                    </div>
                  
                  </td> -->
                  <td class="whitespace-nowrap px-6 py-4">
                    <my-button @doClick="onSelect(a)" warnanya="bg-gray-100" warnatext="text-blue-600"
                      warnahover="hover:bg-gray-200" label="Pilih" />
                    <router-link :to="'/typedetail/' + a.id">
                      <my-button warnanya="bg-gray-100" warnatext="text-blue-600" warnahover="hover:bg-gray-200"
                        label="View" />
                    </router-link>
                    <my-button @doClick="onDelete(a)" warnanya="bg-red-100" warnatext="text-red-600"
                      warnahover="hover:bg-red-200" label="Hapus" />
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Pagination -->
            <div v-if="mode == 'browse'">
              <table-pagination v-if="paginationData !== null && paginationData.total_record > paginationData.per_page"
                v-bind:pagination="paginationData" v-on:paginate="onChangePage(paginationData.current_page)" />
            </div>
            <!-- End Pagination -->
          </div>
        </div>
      </div>
      <div>
        <form-type ref="formType" @finish="onFormClose" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import api from "../../../api.js";
import FormType from "./FormType.vue";
export default defineComponent({
  components: { FormType },
  created() {
    this.mode = "browse";
    this.loadData();
  },
  data() {
    return {
      dataType: [],
      mode: "browse",
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
    onChangePage(page) {
      this.queryData.page = page
      this.loadData()
    },
    onFormClose() {
      this.mode = "browse";
      this.loadData();
    },
    addData() {
      this.mode = "form";
      this.$refs["formType"].newData();
    },
    onDelete(data) {
      api.delete("type/" + data.id).then((respon) => {
        this.loadData();
      });
    },
    onSelect(data) {
      this.mode = "form";
      this.$refs["formType"].selectData(data);
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
  },
});
</script>

<style scoped></style>