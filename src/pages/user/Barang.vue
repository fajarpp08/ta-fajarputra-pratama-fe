<template>
  <div class="bg-white py-0">
    <!-- Form Search -->
    <!-- <div class="w-full inline-flex py-4 px-6">
      v-model="queryData.name" @keyup="onSearching()"
      <input placeholder="Masukan nama alat yang ingin kamu cari!"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      <my-button class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" label="Cari"/>
    </div> -->
    <!--End Form Search -->

    <!-- Barang -->
    <section class="text-gray-600 body-font">
      <section class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <h2 class="text-2xl tracking-tight font-bold text-gray-900">
              Our Products!
            </h2>
          </div>
          <!-- Card Kategori -->
          <section class="py-2 bg-white-100">
            <div class="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <template v-if="!barang.length">
                kosong ngab
              </template>
              <template v-else v-for="data in barang">
                <article
                  class="rounded-2xl w-full overflow-hidden bg-gray-200 p-3 my-3 shadow-xl hover:shadow-xl hover:transform hover:scale-105 duration-300">
                  <a>
                    <div class="lg:h-48 md:h-36 w-full object-cover object-fit overflow-hidden rounded-xl mt-2">
                      <img :src="data.foto" />
                    </div>
                    <div class="mt-4 p-2">
                      <h2 class="text-slate-900 text-xl flex justify-start font-bold">
                        {{ data.nama }}
                      </h2>
                      <p class="text-slate-500 text-xs flex justify-start">
                        {{ data.deskripsi }}
                      </p>
                      <p class="text-slate-500 text-md flex justify-start">
                        Stok : {{ data.stok }}
                      </p>
                      <div class="mt-3 flex items-end justify-between">
                        <p class="text-lg font-bold text-gray-900 w-4/6 font-mono">{{ data.harga }}</p>

                        <template v-if="token">
                          <div
                            class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" class="h-8 w-8">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>

                            <button @click="addKeranjang(data.id)" class="text-sm">Add to cart</button>
                          </div>
                        </template>

                        <template v-else>
                          <router-link to="/login"
                            class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" class="h-8 w-8">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>

                            <button class="text-sm">Add to cart</button>
                          </router-link>
                        </template>
                      </div>

                    </div>
                  </a>
                </article>
              </template>
            </div>
          </section>
        </div>
      </section>
    </section>
    <!-- End Barang -->
    <!-- End Isi konten -->
  </div>
</template>
  
<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  created() {
    this.getBarang();
  },
  data() {
    return {
      token: Cookies.get('token'),
      barang: [],
    };
  },
  methods: {
    onSearching(event) {
      this.barang();
    },
    addKeranjang(id) {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };

      const bodyParams = {
        barang_id: id
      };

      axios.post('http://127.0.0.1:8000/api/keranjang', bodyParams, config)
        .then((response) => {
          this.$swal({
            icon: 'success',
            title: response.data.pesan
          })
          window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getBarang() {
      axios.get('http://127.0.0.1:8000/api/barang')
        .then((response) => {
          this.barang = response.data.data
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onSelect(data) {
      this.$router.push("details");
    },
  },
};
</script>
  
<style scoped></style>