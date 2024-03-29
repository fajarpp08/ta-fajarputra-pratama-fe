<template>
    <div v-if="show" ref="formKategori">
        <form class="flex flex-col justify-center w-1/2">
            <form-input v-model="form.name" :error="errors.name"
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
import FormInput from "../../../components/FormInput.vue";
import Cookies from 'js-cookie'
import axios from 'axios'
export default ({
    components: { FormInput },
    emits: ["finish"],
    data() {
        return {
            errors: [],
            form: {
                id: '',
                name: ''
            },
            show: false,
            token: Cookies.get('token')
        };
    },
    methods: {
        getOptionKategori() {
            api.get("kategori", {}).then((respon) => {
                this.listKategori = respon.data.records;
            });
        },
        clearData() {
            this.form.id = null;
            this.form.name = "";
        },
        clearForm() {
            this.show = false;
            this.$emit("finish");
            this.form.id = null;
            this.form.name = "";
        },
        newData() {
            this.show = true;
            this.clearData();
        },
        selectData(data) {
            this.show = true;
            this.form.id = data.id;
            this.form.name = data.name;
        },
        onSave() {
            if (this.form.id != null) {
                //ini ada id, berarti edit data
                const config = {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                };
                const bodyParams = {
                    name: this.form.name
                };

                axios.put(`http://127.0.0.1:8000/api/kategori/${this.form.id}`, bodyParams, config)
                    .then((response) => {
                        this.$swal({
                            icon: 'success',
                            title: 'berhasil tambah data'
                        }).then(() => {
                            this.clearForm()
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                //new data
                const config = {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                };
                const bodyParams = {
                    name: this.form.name
                };

                axios.post('http://127.0.0.1:8000/api/kategori', bodyParams, config)
                    .then((response) => {
                        this.$swal({
                            icon: 'success',
                            title: 'berhasil tambah data'
                        }).then(() => {
                            this.clearForm()
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        postKategori() {
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            };
            const bodyParams = {
                name: this.form.name
            };

            axios.post('http://127.0.0.1:8000/api/kategori', bodyParams, config)
                .then((response) => {
                    this.$swal({
                        icon: 'success',
                        title: 'berhasil tambah data'
                    }).then(() => {
                        this.clearForm()
                    })
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
});
</script>
    