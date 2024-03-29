<template>
    <!-- <div class="flex flex-col mt-1">
        <label class="text-xl">Bukti Transfer</label>
        <input multiple type="file" ref="fileInput" @change="onFilePicked" accept="image/*"
            class="bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-700 w-100 mt-2 py-3 px-3 rounded-lg border text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
            placeholder="Masukkan Gambar" />
        <button type="button" @click="postUpload">submit</button>
    </div> -->
    <!-- component -->
    <div class="relative flex justify-center">
        <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                    <th scope="col" class="px-6 py-4">No</th>
                    <th scope="col" class="px-6 py-4">Bank</th>
                    <th scope="col" class="px-6 py-4">Nama</th>
                    <th scope="col" class="px-6 py-4">Nomor Rekening</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">1
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">BCA</td>
                    <td class="whitespace-nowrap px-6 py-4">Juma Willianda
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">1452 9987 010 
                    </td>
                </tr>
                <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">1
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">BRI</td>
                    <td class="whitespace-nowrap px-6 py-4">Juma Willianda
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">0669 3541 6579 530
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="flex w-full h-48  items-center justify-center bg-grey-lighter">
        <label
            class="w-80 flex flex-col items-center px-4 py-6 bg-gray-200 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-700 hover:text-white">
            <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span class="mt-2 text-base leading-normal">Select a file</span>
            <input multiple type="file" ref="fileInput" @change="onFilePicked" accept="image/*" />
        </label>

    </div>
    <div class="flex justify-center mt-none">
        <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="button" @click="postUpload">submit</button>

    </div>
</template>
<script>
import Cookies from 'js-cookie'
import axios from 'axios';
export default {
    data() {
        return {
            form: {
                bukti: null
            },
            token: Cookies.get('token')
        }
    },
    computed: {
        idFromParams() {
            return this.$route.params.id
        },
        formData() {
            const formData = new FormData()

            formData.append('bukti_pembayaran', this.form.bukti)

            return formData;
        }
    },
    methods: {
        onFilePicked(event) {
            const files = event.target.files;
            let filename = files[0].name;
            const fileReader = new FileReader();
            fileReader.addEventListener("load", () => {
                this.imagePreview = fileReader.result;
            });
            fileReader.readAsDataURL(files[0]);
            this.form.bukti = files[0];
            console.log(this.form.bukti);
        },
        async postUpload() {
            const file = this.form.bukti;
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
                    `http://127.0.0.1:8000/api/pembayaran/${this.idFromParams}`,
                    this.formData,
                    { headers: { Authorization: `Bearer ${this.token}` } }
                );
                this.handleSuccess('berhasil upload bukti pembayaran')
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
}
</script>