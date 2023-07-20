<script setup>
import HeaderUser from "../user/HeaderUser.vue";
import FooterUser from "../user/FooterUser.vue";

</script>

<template>
  <div class="bg-white">
  <div>
    <header-user />
  </div>
  <div>
      <!-- <div
      class="relative">
      <img class="w-full relative relative-layout bg-cover blur-lg rounded-md bg-repeat-y overflow-hidden"
        src=".././../assets/bg1.jpg"/>
    </div>
     -->
  
    <!-- Letak Kontent--> 
    <router-view :key="$route.path" />
  </div>
  <div class="bg-white">
    <footer-user />
  </div>
</div>
</template>

<style></style>