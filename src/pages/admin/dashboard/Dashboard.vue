<template>
  <div class="relative min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 p-5 gap-5">
    <router-link to="/divisi">
      <div
        class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group ">
        <div
          class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
        </div>
        <div class="text-right">
          <p class="text-2xl">Data</p>
          <p>Divisi</p>
        </div>
      </div>
    </router-link>

    <router-link to="/area">
      <div
        class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div
          class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
        </div>
        <div class="text-right">
          <p class="text-2xl">Data</p>
          <p>Area</p>
        </div>
      </div>
    </router-link>

    <router-link to="/groupequipment">
      <div
        class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div
          class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
        </div>
        <div class="text-right">
          <p class="text-2xl">Data</p>
          <p class="text-sm">Group Equipment</p>
        </div>
      </div>
    </router-link>

    <router-link to="/equipment">
      <div
        class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div
          class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
        </div>
        <div class="text-right">
          <p class="text-2xl">Data</p>
        <p>Equipment</p>
      </div>
    </div>
  </router-link>

  <router-link to="/type">
    <div
      class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div
        class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
          </path>
        </svg>
      </div>
      <div class="text-right">
        <p class="text-2xl">Data</p>
        <p>Type</p>
      </div>
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped></style>