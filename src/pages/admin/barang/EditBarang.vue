<template>
    <form class="flex flex-col justify-center w-1/2">
        <form-input v-model="form.name" placeholder="Masukkan Nama Barang" showlabel="" label="Nama" />
        <form-input v-model="form.description" placeholder="Masukkan Deskripsi Barang" showlabel="" label="Deskripsi" />
        <form-input v-model="form.harga" placeholder="Masukkan Harga Barang" showlabel="" label="Harga" />
        <label class="text-xl">Gambar</label>
        <input multiple type="file" ref="fileInput" @change="onFilePicked" accept="image/*"
            class="bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-700 w-100 mt-2 py-3 px-3 rounded-lg border text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
            placeholder="Masukkan Gambar" />
            <div class="w-full mt-2 flex justify-center">
        <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="button" @click="submitEdit">Simpan</button>
        </div>
    </form>
</template>
<script>
import FormInput from "../../../components/FormInput.vue";
import axios from 'axios';
import Cookies from 'js-cookie';
export default {
    data() {
        return {
            form: {
                name: 'kompor',
                description: 'lorem',
                harga: '10000',
                foto: null,
                gambarLama: ''
            },
            token: Cookies.get('token')
        }
    },
    components: {
        FormInput
    },
    computed: {
        formEdit() {
            const formEdit = new FormData()

            formEdit.append('foto', this.form.foto)
            formEdit.append('name', this.form.name)
            formEdit.append('harga', this.form.harga)
            formEdit.append('description', this.form.description)
            formEdit.append('gambarLama', this.form.gambarLama)

            return formEdit;
        },
        idFromParams() {
            return this.$route.params.id
        }
    },
    methods: {
        async submitEdit() {
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
                    `http://127.0.0.1:8000/api/barang/${this.idFromParams}?_method=put`,
                    this.formEdit,
                    { headers: { Authorization: `Bearer ${this.token}` } }
                );
                this.handleSuccess('berhasil ubah data')
                this.$router.back()
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
    },
}
</script>