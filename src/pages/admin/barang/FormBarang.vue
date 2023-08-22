<template>
    <div v-if="show" ref="formTenda">
        <form class="flex flex-col justify-center w-1/2">
            <form-select @onSelect="kategoriChange" v-model="formData.kategori_id" :options="listKategori"
                placeholder="Pilih Kategori" :error="errors.kategori_id" label="Kategori" showlabel="" />
            <form-input v-model="formData.name" :error="errors.name"
                :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan Nama" showlabel=""
                label="Nama" />
            <form-input v-model="formData.description" :error="errors.description"
                :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan deskripsi" showlabel=""
                label="Deskripsi" />
            <form-input v-model="formData.harga" :error="errors.harga"
                :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan harga" showlabel=""
                label="Harga" />
            <div v-if="imagePreview !== null" class="rounded-lg w-128 h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full my-12" :src="imagePreview" />
            </div>

            <!-- Bagian yang berbeda pada setiap kondisi -->
            <div v-if="formData.id !== null && formData.image !== null && imagePreview === null"
                class="rounded-lg w-128 h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full my-12"
                    :src="'http://127.0.0.1:8000/' + formData.image" />
            </div>

            <div class="flex flex-col mt-1">
                <label class="text-xl">Gambar</label>
                <input multiple type="file" ref="fileInput" @change="onFilePicked" accept="image/*"
                    class="bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-700 w-100 mt-2 py-3 px-3 rounded-lg border text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
                    placeholder="Masukkan Gambar" />
            </div>

            <div class="inline-flex py-2">
                <my-button @doClick="clearForm" warnanya="bg-yellow-500" warnatext="text-white"
                    warnahover="hover:bg-yellow-600" label="Kembali" />
                <my-button @doClick="onSave" warnanya="bg-green-500" warnatext="text-white" warnahover="hover:bg-green-600"
                    label="Simpan" />
            </div>
        </form>
    </div>
</template>
    
<script>
import { defineComponent } from "vue";
import api from "../../../api.js";
import FormInput from "../../../components/FormInput.vue";
import FormSelect from "../../../components/FormSelect.vue";
export default defineComponent({
    components: { FormInput, FormSelect },
    emits: ["finish"],
    created() {
        // this.getOptionTenda();
        // this.mode = "form";

    },
    data() {
        return {
            errors: [],
            listTenda: [],
            listKategori: [],
            show: false,
            formData: {
                id: null,
                kategori_id: "",
                name: "",
                description: "",
                harga: "",
            },
            image: null,
            imagePreview: null,
            // video: null,
        };
    },
    methods: {
        getOptionKategori() {
            api.get("kategori/getOption", {}).then((respon) => {
                this.listKategori = respon.data.records;
            });
        },
        kategoriChange(event) {
            this.formData.barang_id = "";
        },
        // getOptionTenda() {
        //     api.get("tenda", {}).then((respon) => {
        //         this.listTenda = respon.data.records;
        //     });
        // },
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
            this.image = files[0];
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

        onSave() {
            const fd = new FormData();
            fd.append("id", this.formData.id);
            fd.append("kategori_id", this.formData.kategori_id);
            fd.append("name", this.formData.name);
            fd.append("description", this.formData.description);
            fd.append("harga", this.formData.harga);

            if (this.image != null) {
                fd.append("image", this.image);
            }

            if (this.formData.id != null) {
                //ini ada id, berarti edit data
                fd.append("_method", "put");
                fd.append("id", "this.formData.id,");
                api
                    .post("barang/" + this.formData.id, fd, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((respon) => {
                        this.show = false;
                        this.$emit("finish");
                    })
                    .catch((err) => {
                        if (err.response.status === 422) {
                            this.errors = err.response.data.errors;
                        }
                    });
            } else {
                //new data
                api
                    .post("barang", fd, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((respon) => {
                        this.show = false;
                        this.$emit("finish");
                    })
                    .catch((err) => {
                        if (err.response.status === 422) {
                            this.errors = err.response.data.errors;
                        }
                    });
            }
        },
    },
});
</script>
    
<style scoped></style>