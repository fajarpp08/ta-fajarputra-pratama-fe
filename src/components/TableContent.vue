<template>
  <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row">
    <form>
      <form-input v-model="formData.name" label="nama" warnanya="bg-red-100" />
      <form-input v-model="formData.description" label="deskripsi" />
      <!--      <div class="relative mb-4">-->
      <!--        <label class="leading-7 text-sm text-gray-600">Name</label>-->
      <!--        <input v-model="formData.name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">-->
      <!--      </div>-->
      <!--      <div class="relative mb-4">-->
      <!--        <label  class="leading-7 text-sm text-gray-600">Description</label>-->
      <!--        <input  v-model="formData.description"  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">-->
      <!--      </div>-->
      <button
        @click="onSave"
        type="button"
        class="text-white bg-indigo-500 border-0 mr-4 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Save
      </button>
      <button
        @click="clearForm"
        type="button"
        class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Reset
      </button>
    </form>

    <div class="w-full flex flex-col mt-12">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <input
              v-model="queryData.name"
              @change="onSearching()"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">Name</th>
                  <th scope="col" class="px-6 py-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(a, index) in dataDivisi"
                  :key="a.id"
                  class="border-b dark:border-neutral-500"
                >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    {{ index + 1 }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">{{ a.name }}</td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ a.description }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <button
                      @click="onSelect(a)"
                      class="inline-flex text-blue-600 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                    >
                      Pilih
                    </button>
                    <button
                      @click="onDelete(a)"
                      class="inline-flex text-blue-600 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import api from "../api";
import FormInput from "./FormInput.vue";
export default defineComponent({
  components: { FormInput },

  created() {
    this.loadData();
  },
  data() {
    return {
      dataDivisi: [],
      formData: {
        id: null,
        name: "",
        description: "",
      },
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
    onDelete(data) {
      api.delete("division/" + data.id).then((respon) => {
        this.loadData();
      });
    },
    onSelect(data) {
      this.formData.id = data.id;
      this.formData.name = data.name;
      this.formData.description = data.description;
    },
    onSave() {
      if (this.formData.id != null) {
        //ini ada id, berarti edit data
        api
          .put("division/" + this.formData.id, this.formData)
          .then((respon) => {
            this.loadData();
            this.clearForm();
          });
      } else {
        //new data
        api.post("division", this.formData).then((respon) => {
          this.loadData();
          this.clearForm();
        });
      }
    },
    onSearching(event) {
      this.loadData();
    },
    clearForm() {
      this.formData.id = null;
      this.formData.name = "";
      this.formData.description = "";
    },
    loadData() {
      api.get("division", this.queryData).then((respon) => {
        this.dataDivisi = respon.data.records;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.paginationData);
      });
    },
  },
});
</script>

<style scoped>
</style>