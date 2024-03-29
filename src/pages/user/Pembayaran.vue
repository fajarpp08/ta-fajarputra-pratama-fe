<template>
    <div class="bg-white pt-10 my-4 pb-20">
        <h1 class="mb-10 text-center text-2xl font-bold">Daftar Pesanan</h1>
        <div class="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <table class="min-w-full text-left text-sm font-dark pb-20 pt-16">
                <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" class="px-6 py-4">No</th>
                        <th scope="col" class="px-6 py-4">Nomor Pesanan </th>
                        <th scope="col" class="px-6 py-4">Nama</th>
                        <th scope="col" class="px-6 py-4">Alamat</th>
                        <th scope="col" class="px-6 py-4">Tanggal</th>
                        <th scope="col" class="px-6 py-4">Jumlah</th>
                        <th scope="col" class="px-6 py-4">Status</th>
                        <th scope="col" class="px-6 py-4">Aksi</th>
                    </tr>
                </thead>
                <tbody v-if="isLoading">
                    <tr class="border-b dark:border-neutral-500">
                        <td colspan="12" class="whitespace-nowrap px-6 py-4">
                            <div class="flex justify-center items-center h-screen">
                                <div class="animate-spin rounded-full h-6 w-6 border-t-4 border-blue-500"></div>
                              </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else-if="!riwayat.length">
                    <tr>
                        <td colspan="12">
                            data tidak ada
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(a, index) in riwayat" :key="a.id" class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                            {{ index + 1 }}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">{{ a.invoice }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ a.user.nama }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ a.user.alamat }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ a.tanggal }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ a.jumlah_harga }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ a.status }}</td>
                        <td class="whitespace-nowrap px-6 py-4">
                            <p>
                                <span @click="lunaskan(a.id)" class="cursor-pointer font-bold">
                                    Lunaskan
                                </span>
                                |
                                <span @click="detail(a.id)" class="cursor-pointer font-bold">
                                    Detail
                                </span>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- <div class="w-full mx-auto rounded-lg bg-gray-200 shadow-lg p-5 text-gray-700" style="max-width: 600px"> -->
    <!-- <div class="w-full pt-1 pb-5">
                <div
                    class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                    <i class="mdi mdi-credit-card-outline text-3xl"></i>
                </div>
            </div>
            <div class="mb-10">
                <h1 class="text-center font-bold text-xl uppercase">Secure payment info</h1>
            </div>
            <div class="mb-3 flex -mx-2">
                <div class="px-2">
                    <label for="type1" class="flex items-center cursor-pointer">
                        <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked>
                        <img src="https://i.pinimg.com/736x/1f/12/24/1f12246010077836ca0d49927df89996.jpg" class="h-8 ml-3">
                    </label>
                </div>
                <div class="px-2">
                    <label for="type1" class="flex items-center cursor-pointer">
                        <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked>
                        <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3">
                    </label>
                </div>
            </div>
            <div class="mb-3">
                <label class="font-bold text-sm mb-2 ml-1">Nama</label>
                <div>
                    <form
                        :isReadOnly="true"
                        class="w-full px-3 py-2 mb-1 bg-white border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="John Smith" type="text" />
                </div>
            </div>
            <div class="mb-3">
                <label class="font-bold text-sm mb-2 ml-1">Nomor telepon</label>
                <div>
                    <form
                        class="w-full px-3 py-2 mb-1 bg-white border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        :isReadOnly="true" placeholder="John Smith" warnanya="bg-g" type="text" />
                </div>
            </div>
            <div class="mb-3">
                <label class="font-bold text-sm mb-2 ml-1">Email</label>
                <div>
                    <form
                        class="w-full px-3 py-2 mb-1 bg-white border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="John Smith" type="text" />
                </div>
            </div>
            <div class="mb-3">
                <label class="font-bold text-sm mb-2 ml-1">Nomor Pesanan</label>
                <div>
                    <form
                        class="w-full px-3 py-2 mb-1 bg-white border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="John Smith" type="text" />
                </div>
            </div>
            <div class="mb-3">
                <label class="font-bold text-sm mb-2 ml-1">Total</label>
                <div>
                    <form
                        class="w-full px-3 py-2 mb-1 bg-white border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="John Smith" type="text" />
                </div>
            </div>
            <div>
                <button
                    class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i
                        class="mdi mdi-lock-outline mr-1"></i>Bayar sekarang</button>
            </div> -->
    <!-- </div> -->
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios';
import { defineComponent, computed } from "vue";
import api from "../../api.js";
export default defineComponent({
    data() {
        return {
            riwayat: [],
            isLoading: false,
            token: Cookies.get('token')
        }
    },
    created() {
        this.getRiwayat()
    },
    methods: {
        lunaskan(id){
            this.$router.push({name: 'Checkout Pembayaran', params: {id: id}})
        },
        detail(id){
            this.$router.push({name: 'Detail Pembayaran', params: {id: id}})
        },
        getRiwayat() {
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }
            this.isLoading = true
            axios.get('http://127.0.0.1:8000/api/checkout', config).then((response) => {
                this.isLoading = false
                this.riwayat = response.data.data
                console.log(response);
            }).catch((err) => {
                console.log(err);
            })
        },
    },
});
</script>

<style></style>