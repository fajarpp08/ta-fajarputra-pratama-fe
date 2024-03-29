<template>
  <div class="fixed w-full flex items-center justify-between h-14 text-white z-10">
    <div
      class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
      <img class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
        src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
       <span class="hidden md:block">{{ dataUser ? dataUser.name : "-" }}</span>
    </div>
    <div class="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
      <div
      class="flex justify-between items-center shadow-xl mr-4 h-14 bg-blue-800 dark:bg-gray-800 header-right">
      <div class="bg-blue-800">
        <p class="w-full pl-3 text-xl text-white font-bold">Jelajah Alam Sumbar</p>
      </div>
      </div>
      <ul class="flex items-center">

        <li>
          <span @click="logout" class="flex items-center mr-4 hover:text-blue-100 cursor-pointer">
            <span class="inline-flex mr-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
            </span>
            Logout
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios'
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const dataUser = computed(() => store.state.auth.dataUser);

    return {
      store,
      dataUser,
    };
  },
  created() { },
  data() {
    return {};
  },
  methods: {
    logout() {
      axios.get('http://127.0.0.1:8000/api/login', {}).then((response) => {
        Cookies.remove('token')
        Cookies.remove('role')
        window.location = '/'
      })
    },
  },
});
</script>

<style scoped></style>
