<template>
    <form class="flex flex-col justify-center w-1/2">
        <form-input v-model="form.name"
            placeholder="Masukkan Nama" showlabel="" label="Nama" />
        <div class="inline-flex py-2">
            <my-button @doClick="clearForm" warnanya="bg-yellow-500" warnatext="text-white" warnahover="hover:bg-yellow-600"
                label="Kembali" />
            <my-button @doClick="postKategori" warnanya="bg-green-500" warnatext="text-white"
                warnahover="hover:bg-green-600" label="Simpan" />
        </div>
    </form>
</template>
<script>
import FormInput from "../../../components/FormInput.vue";
import Cookies from 'js-cookie'
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                name: ''
            },
            token: Cookies.get('token')
        }
    },
    methods: {
        postKategori() {
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }
            const bodyParams = {
                name: this.form.name
            }
            axios.put(`http://127.0.0.1:8000/api/kategori/${this.$route.params.id}`, bodyParams, config).then((respose) => {
                this.$swal({
                    icon: 'success',
                    title: 'Data Berhasil Diiubah'
                }).then(()=>{
                    this.$router.back()
                })
            }).catch((err) => {
                console.log(err);
            })
        }
    },
    components: {
        FormInput
    }
}
</script>