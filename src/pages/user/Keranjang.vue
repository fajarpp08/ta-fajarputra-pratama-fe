<template>
    <div class="bg-white pt-4 my-4">
        <h1 class="mb-10 text-center text-2xl font-bold">Keranjang</h1>
        <div class="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-3/5">
                <template v-for="data in keranjang">
                    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="product-image" class="w-full rounded-lg sm:w-40" />
                        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div class="mt-5 sm:mt-0">
                                <h2 class="text-lg font-bold text-gray-900">
                                    {{ data.barang.nama }}
                                </h2>
                                <p class="mt-1 text-xs text-gray-700">
                                    {{ data.barang.deskripsi }}
                                </p>
                                <p class="mt-1 text-xs text-gray-700">
                                    harga satuan {{ data.barang.harga }}
                                </p>
                            </div>
                            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div class="flex items-center border-gray-100">
                                    <span
                                        class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                        @click="addBarang(data.id_keranjang_detail)">
                                        + </span>
                                    <span class="h-8 w-8 border bg-white text-center text-xs outline-none">
                                        {{ data.total_beli }}
                                    </span>
                                    <span @click="minBarang(data.id_keranjang_detail)"
                                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                        - </span>
                                </div>
                                <div class="flex items-center space-x-4 py-10">
                                    <p class="text-lg font-bold">Total: {{ data.total_harga }}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <p @click="hapusBarang(data.id_keranjang_detail)">hapus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <!-- Sub total -->
            <div class="mt-6 h-full w-2/5 rounded-lg border bg-white p-6 shadow-md md:mt-0 ">

                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Nama</p>
                    <input type="text" name="first-name" :value="totalKeranjang.user.nama" id="first-name"
                        autocomplete="given-name"
                        class="block w-1/2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Email</p>
                    <input type="text" name="first-name" :value="totalKeranjang.user.email" id="first-name"
                        autocomplete="given-name"
                        class="block w-1/2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Jenis Kelamin</p>
                    <select
                        class="block w-1/2 px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>Tuan</option>
                        <option>Nyonya</option>
                        <option>Nona</option>
                    </select>
                    <!-- <p class="text-gray-700">$129.99</p> -->
                </div>
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Alamat</p>
                    <input type="text" v-model="form.alamat" name="nomor" id="nomor-hp" autocomplete="given-phone-number"
                        class="block w-1/2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Waktu Mulai</p>
                    <input type="date"
                        class="block w-1/2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Waktu Berakhir</p>
                    <input type="date"
                        class="block w-1/2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Sub Total</p>
                    <p class="text-gray-700">$4.99</p>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between">
                    <p class="text-lg font-bold">Total</p>
                    <div class="">
                        <p class="mb-1 text-lg font-bold">
                            {{ totalKeranjang.jumlah_harga }}
                        </p>
                    </div>
                </div>
                <!-- <router-link to="/pembayaran">
                    <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                        Check Out</button>
                </router-link> -->
                <button @click="checkout" class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                    Check Out</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import { defineComponent, computed } from "vue";
import api from "../../api.js";
export default defineComponent({
    data() {
        return {
            token: Cookies.get('token'),
            keranjang: [],
            totalKeranjang: {},
            form: {
                alamat: 'bandung'
            }
        }
    },
    created() {
        this.getDetailKeranjang(),
            this.getKeranjang()
    },
    methods: {
        getDetailKeranjang() {
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }
            axios.get(`http://integrasiautama.my.id/api/keranjang/${this.$route.params.idKeranjang}`, config).then((response) => {
                this.keranjang = response.data.data
            })
        },
        getKeranjang() {
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }
            axios.get(`http://integrasiautama.my.id/api/keranjang`, config, {}).then((response) => {
                this.totalKeranjang = response.data.data
            })
        },
        addBarang(id) {
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            };
            const bodyParams = {
                barang_id: id
            };

            axios.post(`http://integrasiautama.my.id/api/cart/tambah/${id}`, bodyParams, config)
                .then((response) => {
                    this.$swal({
                        icon: 'success',
                        title: response.data.pesan
                    })
                    this.getDetailKeranjang()
                    this.getKeranjang()
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        minBarang(id) {
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            };
            const bodyParams = {
                barang_id: id
            };

            axios.post(`http://integrasiautama.my.id/api/cart/kurang/${id}`, bodyParams, config)
                .then((response) => {
                    this.$swal({
                        icon: 'success',
                        title: response.data.pesan
                    })
                    this.getDetailKeranjang()
                    this.getKeranjang()
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        hapusBarang(id) {
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            };
            axios.delete(`http://integrasiautama.my.id/api/cart/hapus/${id}`, config).then((response) => {
                this.$swal({
                    icon: 'success',
                    title: response.data.pesan
                })
                this.getDetailKeranjang()
            }).catch((err) => {
                console.log(err);
            })
        },
        checkout() {
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            };
            const bodyParams = {
                alamat: this.form.alamat
            };

            axios.post(`http://integrasiautama.my.id/api/checkout`, bodyParams, config)
                .then((response) => {
                    this.$swal({
                        icon: 'success',
                        title: response.data.pesan
                    })
                    this.getDetailKeranjang()
                    this.getKeranjang()
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
});
</script>

<style></style>