<template>
    <body>
        <div class="container bg-gray-100 pt-10">
            <div class="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-5">
                <table class="min-w-full pt-10  px-4 text-sm bg-white font-light" v-if="mode == 'browse'">
                    <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th scope="col" class="px-2 text-center py-4">Name</th>
                            <th scope="col" class="px-2 py-4 text-center">Deskripsi</th>
                            <th scope="col" class="px-2 py-4 text-center">Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="dataTenda !== null" class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap px-2 py-4 text-center">{{ dataTenda.name }}</td>
                            <td class="whitespace-nowrap px-2 py-4 text-center">{{ dataTenda.description }}</td>
                            <td class="whitespace-nowrap px-2 py-4 text-center">{{ dataTenda.harga }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div class="max-w-5xl mx-auto my-10 bg-white rounded-lg shadow-md p-5">
                <div class="font-medium text-center ">MEDIA</div><br><br>
                <div v-if="dataTenda !== null" class="lg:max-w-lg mx-auto lg:w-full ">
                    <img class="object-cover w-full shadow-2xl rounded-2xl "
                        :src="'https://digitm.isoae.com/' + dataTenda.images[0].path" alt="blog">
                </div>

                <div class="mt-5">
                    <button @click="goBack"
                        class="inline-flex text-white py-2 px-6 bg-blue-700 transition ease-in-out delay-100 bg-blue-700 hover:-translate-xy-1 hover:scale-105 hover:bg-blue-700 duration-200 rounded-xl text-lg">
                        Kembali<span class="ml-2">←</span>
                    </button>
                </div>
            </div>
        </div>
    </body>
</template>
      
<script>
import { defineComponent, computed } from "vue";
import api from "../../../api.js";

export default defineComponent({
    name: "DetailTenda",
    created() {
        this.showData();
    },
    data() {
        return {
            dataTenda: null,
            paginationData: Object,
            mode: "browse",
        };
    },

    methods: {
        goBack() {
            // Kembali ke halaman sebelumnya
            window.history.back();
        },

        showData() {
            api
                .get("tenda/" + this.$route.params.id, this.queryData).then((respon) => {
                    this.dataTenda = respon.data;
                    console.log(this.dataTenda);
                });
        },

        //     loadData() {
        //   api.get("tenda", this.queryData).then((respon) => {
        //     this.dataTenda = respon.data.records;
        //     if (typeof respon.data.paging === "object") {
        //       this.paginationData = respon.data.paging;
        //     }
        //     console.log(this.paginationData);
        //   });
        // },
    },
});
</script>
      
<style scoped></style>