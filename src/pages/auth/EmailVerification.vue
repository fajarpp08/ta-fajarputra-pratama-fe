<template>
    <div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
        <div class="max-w-xl px-5 text-center">
            <h2 class="mb-2 text-[42px] font-bold text-zinc-800">Check your inbox</h2>
            <p class="mb-2 text-lg text-zinc-500">We are glad, that you’re with us ? We’ve sent you a verification link to
                the email address <span class="font-medium text-indigo-500">mail@yourdomain.com</span>.</p>
            <a @click="backLogin"
                class="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700">Open
                the App →</a>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    methods: {
        backLogin: function () {
            this.$router.push({ name: "Login" })
        },
    },
});
</script>

<style></style>