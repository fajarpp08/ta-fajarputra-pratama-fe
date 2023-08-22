<template>
    <div v-if="show" ref="formKategori">
        <form class="flex flex-col justify-center w-1/2">
            <form-input v-model="formData.name" :error="errors.name"
                :border="errors.name ? 'border-red-400' : 'border-gray-400'" placeholder="Masukkan Nama" showlabel=""
                label="Nama" />

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
// import FormSelect from "../../../components/FormSelect.vue";
export default defineComponent({
    components: { FormInput },
    emits: ["finish"],
    created() {
        this.getOptionKategori();
        // this.mode = "form";

    },
    data() {
        return {
            errors: [],
            listKategori: [],

            show: false,
            formData: {
                id: null,
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
            api.get("kategori", {}).then((respon) => {
                this.listKategori = respon.data.records;
            });
        },
        clearData() {
            this.formData.id = null;
            this.formData.name = "";
        },

        clearForm() {
            this.show = false;
            this.$emit("finish");
            this.formData.id = null;
            this.formData.name = "";
        },
        newData() {
            this.show = true;
            this.clearData();
        },
        selectData(data) {
            this.show = true;
            this.formData.id = data.id;
            this.formData.name = data.name;
        },
        onSave() {
            if (this.formData.id != null) {
                //ini ada id, berarti edit data
                api
                    .put("kategori/" + this.formData.id, this.formData)
                    .then((respon) => {
                        this.clearForm();
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
                    .post("kategori", this.formData)
                    .then((respon) => {
                        this.clearForm();
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