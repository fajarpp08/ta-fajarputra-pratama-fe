<template>
  <!-- component -->
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <!-- <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div> -->
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-6" v-if="mode == 'browse'">
        <div class="max-w-md mx-auto">
          <div class="">
            <h1 class="text-xl font-extrabold flex justify-center">Jelajah Alam Sumbar</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="relative">
                <div v-if="errorMessage != null" class="mb-4 rounded-lg bg-red-100 px-6 py-5 text-base text-red-700"
                  role="alert">
                  {{ errorMessage }}
                </div>
                <h2 class="text-gray-900 text-xl font-bold title-font mb-5 flex justify-center">
                  Sign In
                </h2>
                <div class="relative mb-4">
                  <label class="leading-7 text-sm text-gray-600">Email</label>
                  <input v-model="formData.email" type="text" id="full-name" name="full-name"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>

              </div>
              <div class="relative">
                <label class="leading-7 text-sm text-gray-600">Password</label>
                <input v-model="formData.password" type="password"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

              </div>
              <div class="relative">
                <button @click="submitLogin"
                  class="text-white bg-indigo-500 border-0 w-full py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Login
                </button>
              </div>
              <div class="relative">
                <button @click="addData"
                  class="text-white bg-yellow-400 border-0 w-full py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <register ref="formRegister" @finish="onFormClose" />
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios'
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import api from "../../api.js";
import Register from "./Register.vue";
export default defineComponent({
  components: { Register },

  setup() {
    const store = useStore();
    const isLogin = computed(() => store.state.auth.isLoggedIn);
    return {
      store,
      isLogin,
    };
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      mode: "browse",
      errors: [],
      errorMessage: null,
    };
  },
  created() {
    console.log("isLogin 2" + this.isLogin);
  },
  methods: {
    // doLogin() {
    //   this.store.dispatch("auth/login", this.formData).then(
    //     (response) => {
    //       const user = response.data.data.record;

    //       if (user.role.name === 'user') {
    //         console.log('login_user')
    //         this.$router.push({ name: "Dashboard" })
    //       }
    //       else if (user.role.name === 'admin') {
    //         console.log('login_admin')
    //         this.$router.push({ name: "HomeAdmin" })
    //       }
    //       else if (user.role.name === 'super_admin') {
    //         console.log('login_super')
    //         this.$router.push({ name: "HomeAdmin" })
    //       }
    //     },
    //     (err) => {
    //       if (err.response.status === 422) {
    //         this.errors = err.response.data.errors;
    //       } else {
    //         this.errorMessage = err.response.data.respon_status.message;
    //       }
    //     }
    //   );
    // },
    submitLogin() {
      const pesanLogin = 'Berhasil Login'
      const pesanGalat = 'Maaf, Terjadi Kesalahan Dalam Permintaan Request'
      axios.post('http://integrasiautama.my.id/api/login', {
        email: this.formData.email,
        password: this.formData.password
      }).then((response) => {
        if (response.data.status == pesanGalat) {
            this.handleGalat(response.data.pesan)
        } else if(response.data.success == false) {
            this.handleGalat(response.data.message)
        } else if(response.data.pesan == pesanLogin) {
          Cookies.set('token', response.data.data.token)
          this.handleSuccess(response.data.pesan)
          window.location = '/'
        }
      }).catch((err) => {
        console.log(err);
      })
    },
    handleSuccess(message) {
      this.$swal({
        icon: 'success',
        text: message
      })
    },
    handleGalat(message) {
      this.$swal({
        icon: 'error',
        title: 'galat',
        text: message
      })
    },
    onFormClose() {
      this.mode = "browse";
      this.loadData();
    },
    addData() {
      this.mode = "form";
      this.$refs["formRegister"].newData();
    },
  },
});
</script>

<style scoped></style>