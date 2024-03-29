<script setup>
import AppHeader from "../admin/AppHeader.vue";
import AppSidebar from "../admin/AppSidebar.vue";
</script>
<template>
  <div>
      <!-- <div
      class="">
      <img class="min-h-screen blur-lg rounded-md overflow-hidden absolute inset-0 z-0"
        src=".././../assets/bg1.jpg"/>
    </div> -->
    <div
      class="flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white z-10"
    >
      <app-header />
      <app-sidebar />
      <div class="h-full md:mt-16 md:ml-64 relative min-h-screen">
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>
  <!-- <div
    class="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 text-center text-white bg-gray-800"
  >
    This a Admin Dashboard along with dark mode &amp; responsive sidebar by
    Robin Hossain.
    <a
      class="text-gray-200 underline"
      href="https://tailwindcomponents.com/component/responsive-admin-template"
      >Component details</a
    >
  </div> -->
</template>

<style scoped>
</style>