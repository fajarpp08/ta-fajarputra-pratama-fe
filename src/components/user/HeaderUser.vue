<template>
  <!-- component -->
  <header class="bg-gradient-to-r from-blue-400 to-blue-700 md:h-24 rounded-b-2xl">
    <div class="container mx-auto px-0 py-0 flex items-center">
      <!-- logo -->
      <div class="mr-auto flex items-center justify-between">
        <img class="h-24 w-24" src=".././../assets/icon.png" alt="icon" />
        <div>
          <p class="text-lg leading-5 tracking-tight font-bold">Jelajah Alam Sumbar</p>
        </div>
      </div>
      <!-- end logo -->

      <!-- Menu Header -->
      <div class="flex items-center p-2 h-16 w-2/4">
        <div class="">
          <ul class="lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <router-link to="/"><a class="text-sm text-gray-900 hover:text-white font-bold">Home</a></router-link>
            <!-- <li class="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li> -->
            <Dropdown />

            <router-link to="/pembayaran">
              <a class="text-sm text-gray-900 hover:text-white font-bold">Riwayat Pesanan</a>
            </router-link>
            <!-- <router-link to="/"><a class="text-sm text-gray-900 hover:text-white font-bold">Services</a></router-link>
            <router-link to="/"><a class="text-sm text-gray-900 hover:text-white font-bold">About
                Us!</a></router-link> -->
          </ul>
        </div>
      </div>
      <!-- End Menu Header -->

      <!-- buttons -->
      <nav class="contents">
        <ul class="ml-2 xl:w-32 flex items-center justify-end">
          <li class="ml-2 lg:ml-4 relative inline-block">
            <template v-if="token">
              <template v-if="isKeranjangEmpty">
                kosong
              </template>
              <template v-else>
                <router-link :to="'keranjang/' + keranjang.id">
                  <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                    1
                  </div>
                  <svg class="h-9 lg:h-10 p-2 text-gray-900" aria-hidden="true" focusable="false" data-prefix="far"
                    data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor"
                      d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z">
                    </path>
                  </svg>
                </router-link>
              </template>
            </template>
          </li>
          <li class="ml-2 lg:ml-4 relative inline-block">
            <a class="" href="">
              <svg class="h-9 lg:h-10 p-2 text-gray-900" aria-hidden="true" focusable="false" data-prefix="far"
                data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z">
                </path>
              </svg>
            </a>
          </li>
          <div class="flex items-center justify-end">
            <img class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
              src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
            <span class="text-sm text-gray-900 font-bold tracking-tight">Welcome, {{ dataUser ? dataUser.name : "-"
            }}</span>
          </div>
        </ul>
        <template v-if="!token">
          <div class="hidden md:flex items-center space-x-1 ml-2">
            <div @click="login"
              class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 cursor-pointer">
              Login</div>
          </div>
        </template>
        <template v-else>
          <div class="hidden md:flex items-center space-x-1 ml-2">
            <div @click="logout"
              class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 cursor-pointer">
              Logout</div>
          </div>
        </template>
      </nav>
    </div>
    <hr />
  </header>
</template>
<script>
import Cookies from 'js-cookie'
import { defineComponent, computed } from "vue";
import Dropdown from "../Dropdown.vue";
import { useStore } from "vuex";
import axios from 'axios'
// import Dropdown from '../Dropdown.vue'
export default defineComponent({
  data() {
    return {
      token: Cookies.get('token'),
      keranjang: {}
    }
  },
  components: { Dropdown },
  setup() {
    const store = useStore();
    const dataUser = computed(() => store.state.auth.dataUser);
    return {
      store,
      dataUser,
    };
  },
  computed: {
    isKeranjangEmpty() {
      return this.keranjang.length === 0;
    },
  },
  mounted() {
    this.getKeranjang()
  },
  methods: {
    // logout: function () {
    //   this.$store.dispatch("auth/logout").then(() => {
    //     this.$router.push("Login");
    //   });
    // },
    login: function () {
      // this.$store.dispatch("auth/login").then(() => {
      this.$router.push({ name: "Login" })
      // });
    },
    logout() {
      axios.get('http://127.0.0.1:8000/api/login', {}).then((response) => {
        Cookies.remove('token')
        Cookies.remove('role')
        window.location = '/'
      })
    },
    getKeranjang() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
      axios.get('http://127.0.0.1:8000/api/keranjang', config).then((response) => {
        this.keranjang = response.data.data
      })
    }
  }
});

</script>
  
<style></style>
