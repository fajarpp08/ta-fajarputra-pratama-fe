<template>
  <div class="bg-white">
  <div
    class="w-full bg-gradient-to-r from-blue-400 to-blue-700 flex flex-wrap items-center drop-shadow-xl rounded-b-xl justify-between mx-auto p-4">
    <a class="flex items-center">
      <img src=".././../assets/icon.png" class="h-16 w-16" alt="icon" />
      <div class="px-0">
        <p class="text-2xl md:text-xl tracking-tight font-bold">Digital Maintenance Journal</p>
        <p class="text-xl md:text-base tracking-tight font-sans">Pembangkit Listrik Tenaga Uap</p>
      </div>
      <!-- <span class="text-2xl font-medium  font-sans whitespace-nowrap dark:text-white"><strong>Digital Maintenance
            Journal PLTU</strong></span> -->
    </a>

    <div class="hidden w-full bg-transparent md:block md:w-auto">
      <ul
        class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <router-link to="/"
            class="hidden md:block hover:border-gray-900 hover:border-b-2 pb-3 "
             >Beranda</router-link>
        </li>
        <li>
          <router-link to="/galeriuser"
            class="hidden md:block hover:border-gray-900 hover:border-b-2 pb-3">Galeri</router-link>
        </li>
        <li>
          <router-link to="beritauser"
            class="hidden md:block hover:border-gray-900 hover:border-b-2 pb-3">Berita</router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HeaderUser"
}
</script>

<style></style>