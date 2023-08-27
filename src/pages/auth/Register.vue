<template>
    <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2" v-if="show"
            ref="formRegister">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                <input v-model="formData.name" :error="errors.name" type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4" name="fullname"
                    placeholder="Full Name" />

                <input v-model="formData.email" :error="errors.email" type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />

                <input v-model="formData.password" :error="errors.password" type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />

                <!-- <button @doClick="onSave" type="submit"
                    class="w-full text-center py-3 rounded bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none my-1">Create
                    Account!</button> -->
                <my-button class="w-full text-lg" @doClick="register" warnanya="bg-indigo-500" warnatext="text-white"
                    warnahover="bg-indigo-600" label="Create Account!" />

                <div class="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the
                    <a class="underline underline-offset-2 border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and
                    <a class="underline underline-offset-2 border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div class="text-grey-dark mt-6">
                Already have an account?
                <a :onClick="clearForm"
                    class="no-underline border-b border-blue text-blue hover:text-blue-700 cursor-pointer">
                    Login
                </a>.
            </div>
        </div>
    </div>

    <!-- <div class="bg-gray-500" v-if="show" ref="formRegister">
        <form class="flex flex-col justify-center w-full">
            <form-input v-model="formData.name" :error="errors.name"
                :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan Nama" showlabel=""
                label="Nama" />
            <form-input v-model="formData.email" :error="errors.email"
                :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan Email" showlabel=""
                label="Email" />
            <form-input v-model="formData.password" :error="errors.password"
                :border="errors.password ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan Password"
                showlabel="" label="Password" />

            <div class="inline-flex py-2">
                <my-button @doClick="clearForm" warnanya="bg-yellow-500" warnatext="text-white"
                    warnahover="hover:bg-yellow-600" label="Kembali" />
                <my-button @doClick="onSave" warnanya="bg-green-500" warnatext="text-white" warnahover="hover:bg-green-600"
                    label="Simpan" />
            </div>
        </form>
    </div> -->
</template>
    
<script>
import axios from 'axios'
import { defineComponent } from "vue";
import api from "../../api.js";
import FormInput from "./../../components/FormInput.vue";
export default defineComponent({
    components: { FormInput },
    emits: ["finish"],
    created() { },
    data() {
        return {
            errors: [],
            show: false,
            formData: {
                id: null,
                name: "",
                email: "",
                password: "",
            },
        };
    },
    methods: {
        newData() {
            (this.errors = []), (this.show = true);
            this.formData.id = null;
            this.formData.name = "";
            this.formData.email = "";
            this.formData.password = "";
        },
        onSave() {
            //new data
            api
                .post("register", this.formData)
                .then((respon) => {
                    this.clearForm();
                    // this.$router.push("EmailVerification");
                    this.show = false;
                    this.$emit("finish");
                })
                .catch((err) => {
                    if (err.response.status === 422) {
                        this.errors = err.response.data.errors;
                    }
                });
        },
        goBack() {
            // Kembali ke halaman sebelumnya
            window.history.back();
        },
        clearForm() {
            this.show = false;
            this.$emit("finish");
            this.formData.id = null;
            this.formData.name = "";
            this.formData.email = "";
            this.formData.password = "";
        },
        register(){
            const pesan = "Maaf, Terjadi Kesalahan Dalam Permintaan Request"
            axios.post('http://integrasiautama.my.id/api/register',{
                name: this.formData.name,
                email: this.formData.email,
                password: this.formData.password
            }).then((response)=>{
                if(response.data.message === pesan){
                    this.handleGalat(response.data.message)
                } else{
                    this.handleSuccess(response.data.pesan)
                }
            })
        },
        handleSuccess(message){
            this.$swal({
                icon: 'success',
                title: message
            })
        },
        handleGalat(message){
            this.$swal({
                icon: 'error',
                title: message
            })
        }
    },
});
</script>
    
<style scoped></style>