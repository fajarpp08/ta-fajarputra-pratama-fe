<template>
    <div class="relative flex items-center justify-center font-poppins ml-0">
        <!-- Tombol untuk membuka dropdown -->
        <!-- @click="toggleDropdown" -->
        <button @click="mulai"
        class="flex items-center w-full py-2 text-sm text-gray-900 hover:text-white font-bold">
            <span class="mr-1">Products</span>
            <!-- <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style="margin-top:3px">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg> -->
        </button>

        <!-- Dropdown yang muncul saat tombol di atas diklik -->
        <!-- <div v-if="isOpen" class="absolute right-0 mt-64 bg-white border border-gray-300 rounded shadow-lg">
            <ul class="py-2">
                Isi dropdown (item-item dropdown)
                <li class="px-4 py-2 text-sm hover:bg-gray-300">
                    <router-link to="/barang">Tenda</router-link>
                </li>
                <li class="px-4 py-2 text-sm hover:bg-gray-300">
                    <router-link to="/barang">Tas</router-link>
                </li>
                <li class="px-4 py-2 text-sm hover:bg-gray-300">
                    <router-link to="/barang">Alat Masak</router-link>
                </li>
                <li class="px-4 py-2 text-sm hover:bg-gray-300">
                    <router-link to="/barang">Sepatu</router-link>
                </li>
                <li class="px-4 py-2 text-sm hover:bg-gray-300">
                    <router-link to="/barang">Alat Lainnya</router-link>

                </li>
            </ul>
        </div> -->
    </div>
</template>
  
<script>
export default {
    name: "Dropdown",
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        mulai: function () {
            this.$router.push("/barang");
        },
    },
};
</script>
  