<template>
  <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row">
    <div class="md:col-span-2 xl:col-span-3">
      <h3 class="text-lg font-semibold">Transaksi</h3>
    </div>
    <div class="w-full flex flex-col mt-12">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <div class="w-full inline-flex" v-if="mode == 'browse'">
              <!---tempat search input -->
              <div class="w-3/5 item-right flex justify-end ml-auto">
                <my-button
                  @click="addData"
                  warnanya="bg-blue-500"
                  warnatext="text-white"
                  warnahover="hover:bg-blue-700"
                  label="Tambah Data"
                />
              </div>
            </div>

            <table
              class="min-w-full text-left text-sm font-light"
              v-if="mode == 'browse'"
            >
              <thead
                class="border-b font-medium dark:border-neutral-500"
              ></thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <!--- Tempat Form Input -->
        <form-transaksi ref="formTransaksi" @finish="onFormClose" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import api from "../../../api.js";
import FormTransaksi from "./FormTransaksi.vue";
export default defineComponent({
  components: { FormTransaksi },
  data() {
    return {
      dataTransaksi: [],
      mode: "browse",
      paginationData: Object,
    };
  },
  methods: {
    onFormClose() {
      this.mode = "browse";
      //      this.loadData();
    },
    addData() {
      this.mode = "form";
      this.$refs["formTransaksi"].newData();
    },
  },
});
</script>

<style scoped>
</style>