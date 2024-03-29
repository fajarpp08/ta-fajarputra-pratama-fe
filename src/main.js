import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const ImageFormatAttributesList = [
    'alt',
    'height',
    'width',
    'style'
];

import axios from 'axios'
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.baseURL ='http://integrasiautama.my.id/api/';
// axios.defaults.baseURL ='https://fajar.garasicode.com/api/';
axios.defaults.baseURL ='http://127.0.0.1:8000/api/';


const getToken = localStorage.getItem('secure_app');
//console.log("token :"+getToken);
if (getToken){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + getToken
}

import AdminLayout from './components/admin/AdminLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';
import MyButton from './components/MyButton.vue';
import UserLayout from './components/user/UserLayout.vue';
import TablePagination from './components/TablePagination.vue';

const app = createApp(App);
app.component('admin-layout', AdminLayout);
app.component('empty-layout', EmptyLayout);
app.component('my-button', MyButton);
app.component('user-layout', UserLayout);
app.component('table-pagination', TablePagination);

store.dispatch('auth/isValidLogin')
    .then(() => {
        app.use(router).use(VueSweetalert2).use(store).mount('#app')
    }).catch((error) => {
    console.error(error);
})


