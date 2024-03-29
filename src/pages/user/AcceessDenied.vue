<template>
  <!-- component -->
<div class="lg:px-24 lg:py-2 md:py-20 md:px-44 px-4 py-2 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-12 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div class="relative object-center">
                        <div class="">
                            <h1 class="my-2 text-gray-800 font-bold text-2xl">
                                Ooopss!!!
                            </h1>
                            <p class="my-2 text-gray-800">Kamu tidak bisa mengakses halaman ini.</p>
                            <button @click="goBack" class="sm:w-full lg:w-auto my-2 border rounded-2xl py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Kembali</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1935.jpg?w=740&t=st=1693599901~exp=1693600501~hmac=a64f1e40f7db7033b2833b24a85772c9959b66fdb12ecb91237b1176a4803a5c" />
            </div>
        </div>
</template>

<script>
export default {
    methods: {
        goBack (){
            this.$router.push ("/");
        },
    },
};
</script>
