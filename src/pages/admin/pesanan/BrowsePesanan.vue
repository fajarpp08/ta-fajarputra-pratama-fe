<template>
    <!-- component -->
    <div class="flex flex-col overflow-x-auto">
        <div class="md:col-span-2 xl:col-span-3">
            <h3 class="text-2xl md:ml-1 tracking-tight font-bold">Data Pesanan</h3>
        </div>
        <div class="sm:-mx-6 lg:-mx-8">
            <div class="w-full inline-flex ml-10 mt-8" v-if="mode == 'browse'">
                <input v-model="queryData.name" @change="onSearching()" placeholder="Masukan nama untuk pencarian"
                    class="w-2/5 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <div class="w-2/5 item-right flex justify-end ml-32">
                    <my-button @doClick="addData" warnanya="bg-blue-500" warnatext="text-white"
                        warnahover="hover:bg-blue-700" label="Tambah Data" />
                </div>
            </div>
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8" v-if="mode == 'browse'">
                <div class="overflow-x-auto">
                    <table class="min-w-full text-left text-sm font-light">
                        <thead class="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" class="px-6 py-4">No</th>
                                <th scope="col" class="px-6 py-4">Nomor Pesanan</th>
                                <th scope="col" class="px-6 py-4">Jenis Kelamin</th>
                                <th scope="col" class="px-6 py-4">Nama</th>
                                <th scope="col" class="px-6 py-4">Nomor HP</th>
                                <th scope="col" class="px-6 py-4">Waktu Pesanan</th>
                                <th scope="col" class="px-6 py-4">Barang</th>
                                <th scope="col" class="px-6 py-4">Harga</th>
                                <th scope="col" class="px-6 py-4">Total Harga</th>
                                <th scope="col" class="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(a, index) in dataPesanan" :key="a.id" class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium"> {{ index + 1 }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ a.nomor }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ a.jk }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ a.name }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ a.phone }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ a.time_from }} <a class="font-bold"> - </a>
                                    {{ a.time_to }} </td>
                                <td class="whitespace-nowrap px-6 py-4">{{ a.pesanable.name }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ a.harga }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ a.total }}</td>
                                <td class="whitespace-nowrap px-6 py-4"> Selesai </td>
                                <td class="whitespace-nowrap px-6 py-4">
                                    <my-button @doClick="onSelect(a)" warnanya="bg-gray-100" warnatext="text-blue-600"
                                        warnahover="hover:bg-gray-200" label="Edit" />
                                    <!-- <router-link :to="'/detailpesanan/' + a.id">
                                        <my-button warnanya="bg-gray-100" warnatext="text-blue-600"
                                            warnahover="hover:bg-gray-200" label="View" />
                                    </router-link> -->
                                    <my-button @Click="onDelete(a)" warnanya="bg-red-100" warnatext="text-red-600"
                                        warnahover="hover:bg-red-200" label="Hapus" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- Pagination -->
                    <div v-if="mode == 'browse'">
                        <table-pagination
                            v-if="paginationData !== null && paginationData.total_record > paginationData.per_page"
                            v-bind:pagination="paginationData" v-on:paginate="onChangePage(paginationData.current_page)" />
                    </div>
                    <!-- End Pagination -->
                </div>
                <div>
                    <form-pesanan ref="formPesanan" @finish="onFormClose" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import api from "../../../api.js";
import FormPesanan from "./FormPesanan.vue";
export default defineComponent({
    components: { FormPesanan },
    created() {
        this.mode = "browse";
        this.loadData();
    },
    data() {
        return {
            dataPesanan: [],
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
        goBack() {
            // Kembali ke halaman sebelumnya
            window.history.back();
        },
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
            this.$refs["formPesanan"].newData();
        },
        onDelete(data) {
            api.delete("pemesanan/" + data.id).then((respon) => {
                this.loadData();
            });
        },
        onSelect(data) {
            this.mode = "form";
            this.$refs["formPesanan"].selectData(data);
        },
        onSearching(event) {
            this.loadData();
        },
        loadData() {
            api.get("pemesanan", this.queryData).then((respon) => {
                this.dataPesanan = respon.data.records;
                if (typeof respon.data.paging === "object") {
                    this.paginationData = respon.data.paging;
                }
                console.log(this.paginationData);
            });
        },
    },
});
</script>
    
<style scoped></style>