<template>
  <!-- <body class="bg-blue-500">
    <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
      <a class="text-3xl font-bold leading-none" href="#">
        <svg class="h-10" alt="logo" viewBox="0 0 10240 10240">
          <path xmlns="http://www.w3.org/2000/svg"
            d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z">
          </path>
        </svg>
      </a>
      <ul
        class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
        <li class="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li><a class="text-sm text-blue-600 font-bold" href="#">About Us</a></li>
        <li class="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
        <li class="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
        <li class="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
      </ul>
      <a class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
        href="#">Sign In</a>
      <a class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
        href="#">Sign up</a>
    </nav>
  </body> -->



  <div class="bg-white py-0">
    <!-- Form Search -->
    <div class="w-full inline-flex py-4 px-6">
      <input v-model="queryData.name" @keyup="onSearching()" placeholder="Masukan nama alat yang ingin kamu cari!"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      <!-- <my-button class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" label="Cari"/> -->
    </div>
    <!--End Form Search -->
    <!-- Isi Konten -->
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="w-full flex flex-col">
            <h2 class="text-2xl tracking-tight font-bold text-gray-900">
              Tenda
            </h2>
          </div>
          <!-- cardproduct baru -->
          <section class="py-2 bg-white-100">
            <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <article v-for="a in dataTenda" :key="a.id"
                class="rounded-xl bg-white p-3 mx-3 my-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                <a>
                  <div v-for="item in a.images" :key="item.id" class="relative flex items-end overflow-hidden rounded-xl">
                    <img :src="'http://127.0.0.1:8000/' + item.path" alt="gambar" />
                    <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="ml-1 text-sm text-slate-400">4.9</span>
                    </div>
                  </div>
                  <div class="mt-1 p-2">
                    <h2 class="text-slate-700">{{ a.name }}</h2>
                    <p class="mt-1 text-sm text-slate-400">
                      {{ a.description }}
                    </p>
                    <div class="mt-3 flex items-end justify-between">
                      <p class="text-lg font-bold text-blue-500">
                        Rp.{{ a.harga }}
                      </p>
                      <!-- Button Add Keranjang -->
                      <div
                        class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="h-4 w-4">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <button type="submit" class="text-sm" @click="addKeranjang">Add</button>
                      </div>
                      <!--End Button Add Keranjang -->
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </section>

          <!-- end cardproduct baru -->

          <!-- <div v-for="a in dataTenda" :key="a.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a v-for="(item) in a.images" :key="item.id" class="block relative h-48 rounded overflow-hidden">
              <img alt="gambar" class="object-cover object-center w-full h-full block"
                :src="'http://127.0.0.1:8000/' + item.path">
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ a.name }}</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">{{ a.description }}</h2>
              <p class="mt-1">Rp.{{ a.harga }}</p>
            </div>
          </div> -->

          <div class="w-full flex flex-col">
            <h2 class="text-2xl tracking-tight font-bold text-gray-900">Tas</h2>
          </div>
          <section class="py-2 bg-white-100">
            <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <article v-for="a in dataTas" :key="a.id"
                class="rounded-xl bg-white p-3 mx-3 my-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                <a>
                  <div v-for="item in a.images" :key="item.id" class="relative flex items-end overflow-hidden rounded-xl">
                    <img :src="'http://127.0.0.1:8000/' + item.path" alt="gambar" />
                    <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="ml-1 text-sm text-slate-400">4.9</span>
                    </div>
                  </div>
                  <div class="mt-1 p-2">
                    <h2 class="text-slate-700">{{ a.name }}</h2>
                    <p class="mt-1 text-sm text-slate-400">
                      {{ a.description }}
                    </p>
                    <div class="mt-3 flex items-end justify-between">
                      <p class="text-lg font-bold text-blue-500">
                        Rp.{{ a.harga }}
                      </p>
                      <div
                        class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="h-4 w-4">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <button class="text-sm">Add</button>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </section>

          <div class="w-full flex flex-col">
            <h2 class="text-2xl tracking-tight font-bold text-gray-900">
              Sepatu
            </h2>
          </div>
          <section class="py-2 bg-white-100">
            <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <article v-for="a in dataSepatu" :key="a.id"
                class="rounded-xl bg-white p-3 mx-3 my-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                <a>
                  <div v-for="item in a.images" :key="item.id" class="relative flex items-end overflow-hidden rounded-xl">
                    <img :src="'http://127.0.0.1:8000/' + item.path" alt="gambar" />
                    <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="ml-1 text-sm text-slate-400">4.9</span>
                    </div>
                  </div>
                  <div class="mt-1 p-2">
                    <h2 class="text-slate-700">{{ a.name }}</h2>
                    <p class="mt-1 text-sm text-slate-400">
                      {{ a.description }}
                    </p>
                    <div class="mt-3 flex items-end justify-between">
                      <p class="text-lg font-bold text-blue-500">
                        Rp.{{ a.harga }}
                      </p>
                      <div
                        class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="h-4 w-4">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <button class="text-sm">Add</button>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </section>

          <div class="w-full flex flex-col">
            <h2 class="text-2xl tracking-tight font-bold text-gray-900">
              Alat Masak
            </h2>
          </div>
          <section class="py-2 bg-white-100">
            <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <article v-for="a in dataMasak" :key="a.id"
                class="rounded-xl bg-white p-3 mx-3 my-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                <a>
                  <div v-for="item in a.images" :key="item.id" class="relative flex items-end overflow-hidden rounded-xl">
                    <img :src="'http://127.0.0.1:8000/' + item.path" alt="gambar" />
                    <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="ml-1 text-sm text-slate-400">4.9</span>
                    </div>
                  </div>
                  <div class="mt-1 p-2">
                    <h2 class="text-slate-700">{{ a.name }}</h2>
                    <p class="mt-1 text-sm text-slate-400">
                      {{ a.description }}
                    </p>
                    <div class="mt-3 flex items-end justify-between">
                      <p class="text-lg font-bold text-blue-500">
                        Rp.{{ a.harga }}
                      </p>
                      <div
                        class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="h-4 w-4">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <button class="text-sm">Add</button>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </section>

          <div class="w-full flex flex-col">
            <h2 class="text-2xl tracking-tight font-bold text-gray-900">
              Alat Lainnya
            </h2>
          </div>
          <section class="py-2 bg-white-100">
            <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <article v-for="a in dataLainnya" :key="a.id"
                class="rounded-xl bg-white p-3 mx-3 my-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                <a>
                  <div v-for="item in a.images" :key="item.id" class="relative flex items-end overflow-hidden rounded-xl">
                    <img :src="'http://127.0.0.1:8000/' + item.path" alt="gambar" />
                    <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="ml-1 text-sm text-slate-400">4.9</span>
                    </div>
                  </div>
                  <div class="mt-1 p-2">
                    <h2 class="text-slate-700">{{ a.name }}</h2>
                    <p class="mt-1 text-sm text-slate-400">
                      {{ a.description }}
                    </p>
                    <div class="mt-3 flex items-end justify-between">
                      <p class="text-lg font-bold text-blue-500">
                        Rp.{{ a.harga }}
                      </p>
                      <div
                        class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="h-4 w-4">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <button class="text-sm">Add</button>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </section>

          <!-- <div class="py-4 md:mx-6 flex flex-wrap overflow-hidden">
        <div v-for="a in dataLainnya" :key="a.id" class="p-2 md:w-1/6 h-1/6">
          <div v-for="(item) in a.images" :key="item.id"
            class="w-full overflow-hidden shadow-xl border-4 border-gray-400 border-opacity-60 rounded-3xl">
            <img class="lg:h-48 md:h-36 w-full object-cover object-fix" :src="'http://127.0.0.1:8000/' + item.path"
              alt="blog">
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ a.name }}</h1>
              <p class="leading-relaxed mb-3">{{ a.description }}</p>
              <p class="leading-relaxed mb-3">{{ a.harga }}</p>
            </div>
          </div>
        </div>
      </div> -->
        </div>
      </div>
    </section>
    <!-- End Isi konten -->
  </div>
</template>
  
<script>
import { defineComponent, computed } from "vue";
import api from "../../api.js";
export default defineComponent({
  // components: { FormData },
  created() {
    // this.mode = "browse";
    this.loadDataTenda();
    this.loadDataMasak();
    this.loadDataTas();
    this.loadDataSepatu();
    this.loadDataLainnya();
  },
  data() {
    return {
      dataTenda: [],
      dataMasak: [],
      dataTas: [],
      dataSepatu: [],
      dataLainnya: [],
      dataTendaGambar: [],
      pesan: {},
      // mode: "browse",
      queryData: {
        page: 1,
        name: "",
        limit: 10,
        order_col: "",
        order_type: "",
      },
      paginationData: Object,
    };
  },
  methods: {
    onSearching(event) {
      this.loadDataTenda();
      this.loadDataMasak();
      this.loadDataTas();
      this.loadDataSepatu();
      this.loadDataLainnya();
    },
    loadDataTenda() {
      api.get("tenda", this.queryData).then((respon) => {
        this.dataTenda = respon.data.records;
        // this.dataTendaGambar = respon.data.records.images;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.paginationData);
      });
    },
    loadDataMasak() {
      api.get("masak", this.queryData).then((respon) => {
        this.dataMasak = respon.data.records;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.paginationData);
      });
    },
    loadDataTas() {
      api.get("tas", this.queryData).then((respon) => {
        this.dataTas = respon.data.records;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.paginationData);
      });
    },
    loadDataSepatu() {
      api.get("sepatu", this.queryData).then((respon) => {
        this.dataSepatu = respon.data.records;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.paginationData);
      });
    },
    loadDataLainnya() {
      api.get("lainnya", this.queryData).then((respon) => {
        this.dataLainnya = respon.data.records;
        if (typeof respon.data.paging === "object") {
          this.paginationData = respon.data.paging;
        }
        console.log(this.paginationData);
      });
    },
    onSelect(data) {
      this.$router.push("details");
    },
    addKeranjang() {
      //new data
      api
        .post("keranjang", this.formData)
        .then((respon) => {
          // this.clearForm();
          this.show = false;
          // this.$emit("finish");
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.errors = err.response.data.errors;
          }
        });
    },
    pemesanan() {
      // if (this.pesan.jumlah_pemesanan) {
        this.pesan.barang = this.barang;
        axios
          .post("keranjang", this.pesan)
          .then(() => {
            // console.log('berhasil')
            // this.$router.push({ path: "/keranjang" });
            // this.$toast.success("Sukses masuk keranjang", {
            //   type: "success",
            //   position: "top-right",
            //   duration: 3000,
            //   dismissible: true,
            // });
          })
          .catch((err) => console.log(err));
      // } 
      // else {
      //   this.$toast.error("Jumlah pesanan wajib diisi!", {
      //     type: "error",
      //     position: "top-right",
      //     duration: 3000,
      //     dismissible: true,
      //   });
      // }
    },
  },
});
</script>
  
<style scoped></style>