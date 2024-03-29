<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg mt-10 mb-10 pb-10 px-5 ms-10">
        <img class="w-full" :src="detail.barang.foto" alt="Foto">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{ detail.barang.nama }}
          </div>
          <p class="text-gray-700 text-base">
            {{ detail.barang.deskripsi }}
          </p>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {{ detail.barang.harga }}
          </span>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Jumlah: {{ detail.qty }}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Total harga: {{ detail.total_beli }}
          </span>
        </div>
      </div>
      
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie'
export default {
    data(){
        return{
            token: Cookies.get('token'),
            detail: []
        }
    },
    created() {
        this.getDetail()
    },
    computed:{
        idFromParams(){
            return this.$route.params.id
        }
    },
    methods: {
        getDetail(){
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            } 
            axios.get(`http://127.0.0.1:8000/api/checkout/${this.idFromParams}`, config).then((response)=>{
                console.log(response);
                this.detail = response.data.data[0]
            }).catch((err)=>{
                console.log(err);
            })
        }
    },
}
</script>