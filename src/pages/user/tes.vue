<template>
  <div class="bg-white">
    <!-- Hero -->
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded rounded-3xl shadow-xl" alt="hero" src="../../assets/hero.png">
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 tracking-tight">Selamat Datang di
            <br class="hidden lg:inline-block">Jelajah Alam Sumbar
          </h1>
          <p class="mb-8 leading-relaxed">Jelajah Alam Sumbar menyediakan rental alat outdoor yang ada di Kota Padang.
            Menyediakan semua kebutuhan alat outdoor yang anda inginkan. Mulai rental?</p>
          <div class="flex justify-center">
            <button @click="mulai"
              class="inline-flex text-white py-2 px-6 bg-blue-700 transition ease-in-out delay-100 bg-blue-700 hover:-translate-xy-1 hover:scale-105 hover:bg-blue-700 duration-200 rounded-xl text-lg">Mulai<span
                class="ml-2">→</span></button>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <!-- Kategori Barang -->
    <section class="text-gray-600 body-font">
      <section class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <h2 class="text-2xl tracking-tight font-bold text-gray-900">
              Our Category Products!
            </h2>
          </div>
          <!-- Card Kategori -->
          <section class="py-2 bg-white-100">
            <div class="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <template v-if="!kategori.length">
                kosongggggg
              </template>
              <template v-else v-for="data in kategori">
                <article
                  class="rounded-2xl bg-gray-200 p-3 mx-3 my-3 shadow-xl hover:shadow-xl hover:transform hover:scale-105 duration-300">
                  <a>
                    <div class="relative flex items-end overflow-hidden rounded-xl mt-8">
                      <img src="https://freepngimg.com/download/party/146384-camp-tent-download-hq.png" />
                    </div>
                    <div class="mt-4 p-2">
                      <h2 class="text-slate-900 text-xl flex justify-center font-bold">
                        {{ data.name }}
                      </h2>
                    </div>
                  </a>
                </article>
              </template>
              <!-- <article
                  class="rounded-2xl bg-gray-200 p-3 mx-3 my-3 shadow-xl hover:shadow-xl hover:transform hover:scale-105 duration-300">
                  <a>
                    <div class="relative flex items-end overflow-hidden rounded-xl">
                      <img src="https://png.monster/wp-content/uploads/2022/03/png.monster-1015.png" />
                    </div>
                    <div class="mt-1 p-2">
                      <h2 class="text-slate-900 text-xl flex justify-center font-bold">Tas</h2>
                    </div>
                  </a>
                </article>
                <article
                  class="rounded-2xl bg-gray-200 p-3 mx-3 my-3 shadow-xl hover:shadow-xl hover:transform hover:scale-105 duration-300">
                  <a>
                    <div class="relative flex items-end overflow-hidden rounded-xl">
                      <img src="../../assets/stovecamp.png" />
                    </div>
                    <div class="mt-1 p-2">
                      <h2 class="text-slate-900 text-xl flex justify-center font-bold">Alat Masak</h2>
                    </div>
                  </a>
                </article>
                <article
                  class="rounded-2xl bg-gray-200 p-3 mx-3 my-3 shadow-xl hover:shadow-xl hover:transform hover:scale-105 duration-300">
                  <a>
                    <div class="relative flex items-end overflow-hidden rounded-xl mt-8">
                      <img src="../../assets/sepatu.png" />
                    </div>
                    <div class="mt-4 p-2">
                      <h2 class="text-slate-900 text-xl flex justify-center font-bold">Sepatu</h2>
                    </div>
                  </a>
                </article>
                <article
                  class="rounded-2xl bg-gray-200 p-3 mx-3 my-3 shadow-xl hover:shadow-xl hover:transform hover:scale-105 duration-300">
                  <a>
                    <div class="relative flex items-end overflow-hidden rounded-xl">
                      <img src="../../assets/matras.png" />
                    </div>
                    <div class="mt-1 p-2">
                      <h2 class="text-slate-900 text-xl flex justify-center font-bold">Alat Lainnya</h2>
                    </div>
                  </a>
                </article> -->
            </div>
          </section>
        </div>
      </section>
    </section>
    <section class="text-gray-600 body-font">
      <section class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <h2 class="text-2xl tracking-tight font-bold text-gray-900">
              Our Products!
            </h2>
          </div>
          <!-- Card Kategori -->
          <section class="py-2 bg-white-100">
            <div class="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <template v-if="!barang.length">
                kosong ngab
              </template>
              <template v-else v-for="data in barang">
                <article
                  class="rounded-2xl bg-gray-200 p-3 mx-3 my-3 shadow-xl hover:shadow-xl hover:transform hover:scale-105 duration-300">
                  <a>
                    <div class="relative flex items-end overflow-hidden rounded-xl mt-8">
                      <img :src="data.foto" />
                    </div>
                    <div class="mt-4 p-2">
                      <h2 class="text-slate-900 text-xl flex justify-center font-bold">
                        {{ data.nama }}
                      </h2>
                      <p class="text-slate-500 text-xl flex justify-center">
                        qty: {{ data.stok }}
                      </p>
                      <h2 class="text-slate-900 text-xl flex justify-center font-bold">
                        {{ data.harga }}
                      </h2>

                      <template v-if="token">
                        <button @click="addKeranjang(data.id)"
                          class="md:w-36 bg-blue-600 dark:bg-blue-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                          + keranjang
                        </button>
                      </template>

                      <template v-else>
                        <router-link to="/login">
                          <button
                            class="md:w-36 bg-blue-600 dark:bg-blue-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                            + keranjang
                          </button>
                        </router-link>
                      </template>

                    </div>
                  </a>
                </article>
              </template>
            </div>
          </section>
        </div>
      </section>
    </section>
    <!-- End Kategori Barang -->

    <!-- Our Gallery -->
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <h2 class="text-2xl tracking-tight font-bold text-gray-900">
              Our Gallery!
            </h2>
          </div>
        </div>
      </div>
      <div class="container overflow-hidden mx-auto">
        <div class="flex flex-wrap justify-center">
          <img src="https://superlive.id/storage/articles/096bb413-0cd7-4a03-a4b6-a11c0e3917a9.png" alt=""
            class="object-fit h-48 w-96 px-2 py-1 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110">
          <img src="https://backpackerjakarta.com/wp-content/uploads/2017/12/Daily-Voyagers.png" alt=""
            class="object-contain h-48 w-96 px-2 py-1 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110">
          <img
            src="https://1.bp.blogspot.com/-Bzc2wU5WdVQ/X3WJHGOOibI/AAAAAAAAAMo/0nw4KXaxDpMcWj-RBOTHlKPnHTFuv_uDACLcBGAsYHQ/s626/outdoor-travel-equipment-planning-mountain-trekking-camping-trip-wooden-background-top-view-vintage-film-grain-filter-effect-styles_130181-8%2BFreepik.webp"
            alt=""
            class="object-fit h-48 w-96 px-2 py-1 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110">
          <img
            src="https://s1.bukalapak.com/bukalapak-kontenz-production/content_attachments/26171/original/01_Peralatan_Rock_Climbing.jpg"
            alt=""
            class="object-fit h-48 w-96 px-2 py-1 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110">
          <img
            src="https://www.rappler.com/tachyon/r3-assets/612F469A6EA84F6BAE882D2B94A4B421/img/8A13158B1F5740528FF1C23CA6B8A7DD/daki-gunung.jpg"
            alt=""
            class="object-fit h-48 w-96 px-2 py-1 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110">
          <img src="https://www.superlive.id/storage/superadventure/2018/07/17/54caaed04aa5.jpg" alt=""
            class="object-fit h-48 w-96 px-2 py-1 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110">
          <img
            src="https://i0.wp.com/www.shunt-magetan.org/wp-content/uploads/2015/04/alat-panjat-tebing.jpg?fit=1024%2C768&ssl=1"
            alt=""
            class="object-fit h-48 w-96 px-2 py-1 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRzjVkByPpXo-z5BV_THsXSxQSoWeTYvpZg&usqp=CAU"
            alt=""
            class="object-fit h-48 w-96 px-2 py-1 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110">
          <img
            src="https://i0.wp.com/www.shunt-magetan.org/wp-content/uploads/2017/04/ropes-241787_960_720.jpg?resize=960%2C640&ssl=1"
            alt=""
            class="object-fit h-48 w-96 px-2 py-1 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110">
          <img src="https://bolmora.com/wp-content/uploads/2021/07/IMG-20210722-WA0055.jpg" alt=""
            class="object-fit h-48 w-96 px-2 py-1 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110">
        </div>


      </div>
    </section>
    <!-- End Our Gallery -->

    <!-- How To Rent? -->
    <section class="text-gray-600 body-font mt-12">
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <h2 class="text-2xl tracking-tight font-bold text-gray-900">
              How To Rent?
            </h2>
          </div>
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Buat Akun</h2>
                  <p class="leading-relaxed">Buat akun dengan mendaftarkan email anda.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Login</h2>
                  <p class="leading-relaxed">Masuk dengan akun yang sudah anda buat sebelumnya.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Pilih barang</h2>
                  <p class="leading-relaxed">Pilih barang yang ingin anda rental, dengan cara masukkan
                    ke dalam keranjang.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Checkout</h2>
                  <p class="leading-relaxed">Lakukan Checkout barang yang sudah anda masukkan ke dalam keranjang.</p>
                </div>
              </div>
              <div class="flex relative">
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Pembayaran</h2>
                  <p class="leading-relaxed">Lakukan pembayaran sesuai dengan tagihan yang sudah ditentukan.</p>
                </div>
              </div>
            </div>
            <img
              class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-2xl drop-shadow-2xl brightness-50 md:mt-0 mt-12"
              src="../../assets/howtorent.jpg" alt="step">
          </div>
        </div>
      </section>
    </section>
    <!-- End How To Rent? -->

    <!-- About Us -->
    <!-- <section class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <h2 class="text-2xl tracking-tight font-bold text-gray-900">
              About Us!
            </h2>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div
        class="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img class="w-20 h-20" src="./../../assets/icon.png" />


            <span class="ml-3 text-xl">Jelajah Alam Sumbar</span>
          </a>
          <p class="mt-2 text-sm text-gray-500 line-clamp-4">Lorem ipsum dolor sit amet. 33 quisquam doloribus quo
            exercitationem
            dolores non internos eaque qui ducimus velit eum officia omnis. Sit modi sequi aut error placeat sed quibusdam
            voluptatem est consectetur soluta.

            Ex doloremque consequatur ea harum praesentium aut sint obcaecati aut aliquam consequatur. 33 nulla explicabo
            vel enim eveniet est cumque rerum id deleniti enim. Ab sequi tempore et fugit optio aut nihil excepturi sed
            totam dolor.

            Hic tenetur doloremque non perspiciatis maiores qui odio quisquam rem modi aperiam. In accusantium iure qui
            voluptatibus dignissimos rem illo voluptatem ea fugit reprehenderit.</p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/3 md:w-2/3 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Our Contact!</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-900 hover:text-gray-800 flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-6 mr-2">
                    <path fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd" />
                  </svg>
                  <span class="tracking-tight">+62 812 1817 3646</span>
                </a>
              </li>
              <li>
                <a class="text-gray-900 hover:text-gray-800 flex items-start mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  <span class="tracking-tight">Jelajah Alam Sumbar</span>
                </a>
              </li>
              <li>
                <a class="text-gray-800 hover:text-blue-900 flex items-start mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span class="tracking-tight">@jelajahalamofficial</span>
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/3 md:w-2/3 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Our Shop!</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Jelajah Alam Jati</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Jelajah Alam Unand</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/3 md:w-2/3 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </section> -->
    <!-- End About Us -->
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      token: Cookies.get('token'),
      kategori: [],
      barang: []
    }
  },
  created() {
    this.getKategori();
    this.getBarang();
  },
  methods: {
    mulai: function () {
      this.$router.push("/barang");
    },
    addKeranjang(id) {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };

      const bodyParams = {
        barang_id: id
      };

      axios.post('http://integrasiautama.my.id/api/keranjang', bodyParams, config)
        .then((response) => {
          this.$swal({
            icon: 'success',
            title: response.data.pesan
          })
          window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getKategori() {
      axios.get('http://integrasiautama.my.id/api/kategori')
        .then((response) => {
          this.kategori = response.data.data
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBarang() {
      axios.get('http://integrasiautama.my.id/api/barang')
        .then((response) => {
          this.barang = response.data.data
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>