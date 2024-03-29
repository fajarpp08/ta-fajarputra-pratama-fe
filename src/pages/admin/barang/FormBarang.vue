<template>
    <div v-if="show" ref="formTenda">
        <form class="flex flex-col justify-center w-1/2">
            <form-input v-model="form.name" :error="errors.name"
                :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan Nama" showlabel=""
                label="Nama" />
            <form-input v-model="form.description" :error="errors.description"
                :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan deskripsi" showlabel=""
                label="Deskripsi" />
            <form-input v-model="form.harga" :error="errors.harga"
                :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan harga" showlabel=""
                label="Harga" />
            <div class="flex flex-col mt-1">
                <label class="text-xl">Gambar</label>
                <input multiple type="file" ref="fileInput" @change="onFilePicked" accept="image/*"
                    class="bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-700 w-100 mt-2 py-3 px-3 rounded-lg border text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
                    placeholder="Masukkan Gambar" />
            </div>

            <div class="inline-flex py-2">
                <my-button @doClick="clearForm" warnanya="bg-yellow-500" warnatext="text-white"
                    warnahover="hover:bg-yellow-600" label="Kembali" />
                <my-button @doClick="postBarang" warnanya="bg-green-500" warnatext="text-white"
                    warnahover="hover:bg-green-600" label="Simpan" />
            </div>
        </form>
    </div>
</template>
    
<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import { defineComponent } from "vue";
import api from "../../../api.js";
import FormInput from "../../../components/FormInput.vue";
import FormSelect from "../../../components/FormSelect.vue";
export default defineComponent({
    components: { FormInput, FormSelect },
    emits: ["finish"],
    created() {

    },
    data() {
        return {
            errors: [],
            listTenda: [],
            listKategori: [],
            show: false,
            form: {
                name: "sepatu rei",
                description: "lorem",
                harga: "20000",
                foto: null,
            },
            token: Cookies.get('token'),
            imagePreview: null,
            // video: null,
        };
    },
    computed: {
        formData() {
            const formData = new FormData()

            formData.append('foto', this.form.foto)
            formData.append('name', this.form.name)
            formData.append('harga', this.form.harga)
            formData.append('description', this.form.description)

            return formData;
        },
    },
    methods: {
        getOptionKategori() {
            api.get("kategori/getOption", {}).then((respon) => {
                this.listKategori = respon.data.records;
            });
        },

        getKategori() {
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }
            axios.get('http://127.0.0.1:8000/api/kategori', config).then((response) => {
                this.kategori = response.data.data
                console.log(response);
            }).catch((err) => {
                console.log(err);
            })
        },


        kategoriChange(event) {
            this.formData.barang_id = "";
        },
        clearData() {
            this.image = null;
            this.imagePreview = null;

            this.formData.id = null;
            this.formData.kategori_id = "";
            this.formData.name = "";
            this.formData.description = "";
            this.formData.harga = "";
        },

        clearForm() {
            this.show = false;
            this.$emit("finish");
            this.image = null;
            this.imagePreview = null;

            this.formData.id = null;
            this.formData.kategori_id = "";
            this.formData.name = "";
            this.formData.description = "";
            this.formData.harga = "";
        },
        newData() {
            this.show = true;
            this.formData.id = null;
            this.formData.kategori_id = "";
            this.formData.name = "";
            this.formData.description = "";
            this.formData.harga = "";
            this.clearData();
        },

        onFilePicked(event) {
            const files = event.target.files;
            let filename = files[0].name;
            const fileReader = new FileReader();
            fileReader.addEventListener("load", () => {
                this.imagePreview = fileReader.result;
            });
            fileReader.readAsDataURL(files[0]);
            this.form.foto = files[0];
            console.log(this.form.foto);
        },
        selectData(data) {
            this.show = true;
            this.formData.id = data.id;
            this.formData.kategori_id = data.kategori_id;
            this.formData.name = data.name;
            this.formData.description = data.description;
            this.formData.harga = data.harga;
            this.formData.image = data.images.length > 0 ? data.images[0].path : null;
            // console.log(this.formData.image);
        },
        async postBarang() {
            const file = this.form.foto;
            const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
            const maxSizeInBytes = 5 * 1024 * 1024;

            if (!file) {
                this.handleGalat('Maaf, gambar tidak ada');
                return;
            }

            if (!allowedFormats.includes(file.type)) {
                this.handleGalat('Maaf, format gambar tidak sesuai');
                return;
            }

            if (file.size > maxSizeInBytes) {
                this.handleGalat('Maaf, ukuran gambar terlalu besar');
                return;
            }

            try {
                const response = await axios.post(
                    'http://127.0.0.1:8000/api/barang',
                    this.formData,
                    { headers: { Authorization: `Bearer ${this.token}` } }
                );
                this.handleSuccess('berhasil tambah data')
                this.clearForm()
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        },
        handleSuccess(message) {
            this.$swal({
                icon: 'success',
                title: message
            })
        },
        handleGalat(message) {
            this.$swal({
                icon: 'error',
                title: message
            })
        }
    },
});
</script>
    
<style scoped></style>