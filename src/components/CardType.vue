<template>
    <!-- <section class="text-gray-600 body-font"> -->
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div v-for="a in dataType" :key="a.id" class="p-2 md:w-1/3">
        <div v-for="(item) in a.images" :key="item.id" class="h-full shadow-xl border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="'https://digitm.isoae.com/' + item.path" alt="blog">
          <div class="p-6">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ a.name }}</h1>
            <p class="leading-relaxed mb-3">{{ a.description }}</p>
            <div class="flex items-center flex-wrap ">
              <router-link :to="'/content/' + a.id" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- </section> -->

    <!-- <div class="container px-6 py-6 mx-auto">
        <div class="flex flex-wrap -m-4">
            <div v-for="a in dataType" :key="a.id" class="p-4 md:w-1/3">
                <div v-for="(item) in a.images" :key="item.id">
                    <img class="object-cover object-center w-10 h-10 shadow-2xl rounded-2xl" alt="hero"
                        :src="'https://digitm.isoae.com/' + item.path">
                    <p>{{ item.path }}</p>
                </div>
                <div class="p-6">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ a.name }}</h1>
                    <p class="leading-relaxed mb-3">{{ a.description }}</p>
                    <div class="flex items-center flex-wrap ">
                        <router-link :to="'/content/' + a.id"
                            class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Lihat Detail
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
import { defineComponent, computed } from "vue";
import api from "../api.js";

export default defineComponent({
  data() {
    return {
      dataType: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      api.get("type", this.queryData).then((respon) => {
        this.dataType = respon.data.records;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.dataType);
      });
    },
  },
});
</script>

<style></style>

