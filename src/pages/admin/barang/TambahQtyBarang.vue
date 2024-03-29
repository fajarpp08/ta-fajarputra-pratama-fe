<template>
    <form class="flex flex-col justify-center w-1/2">
        <form-input v-model="form.qty" placeholder="Masukkan jumlah qty" showlabel="" label="Jumlah QTY masuk" />
        <button type="button" @click="postQty">
            submit
        </button>
    </form>
</template>
<script>
import axios from "axios";
import Cookies from 'js-cookie'
import FormInput from "../../../components/FormInput.vue";
export default {
    data() {
        return {
            form: {
                qty: ''
            },
            token: Cookies.get('token')
        }
    },
    computed: {
        idFromParams() {
            return this.$route.params.id
        }
    },
    components: {
        FormInput
    },
    methods: {
        postQty() {
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            };
            const bodyParams = {
                qty: this.form.qty,
                barang_id: this.idFromParams
            };
            axios.post(`http://127.0.0.1:8000/api/stok_barang/masuk`, bodyParams, config).then((response)=>{
                this.$swal({
                    icon: 'success',
                    title: 'Berhasil ubah data'
                }).then(()=>{
                    this.$router.back()
                })
            }).catch((err)=>{
                console.log(err);
            })
        }
    },
}
</script>