<template>
  <div class="fixed w-full md:top-1 left-2 w-14 shadow-3xl flex items-center justify-between h-20 text-white z-10">
    <div
      class="flex items-center justify-start md:justify-center shadow-xl pl-6 w-14 md:w-64 h-16 bg-blue-800 dark:bg-gray-800 rounded-l-3xl border-none">
      <img class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
        src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
      <span class="hidden md:block">{{ dataUser ? dataUser.name : "-" }}</span>
    </div>

    <div
      class="flex justify-between items-center shadow-xl mr-4 h-16 bg-blue-800 dark:bg-gray-800 rounded-r-3xl header-right">
      <div class="bg-blue-800">
        <p class="w-full pl-3 text-xl text-white font-bold">Digital Maintenance Journal</p>
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
    logout: function () {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
});
</script>

<style scoped></style>
