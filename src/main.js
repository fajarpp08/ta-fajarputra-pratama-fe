import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'



//quill editor
// import 'quill/dist/quill.snow.css';
// import Quill from 'quill';
// handle allow image alignment styles on quill
const ImageFormatAttributesList = [
    'alt',
    'height',
    'width',
    'style'
];
//import BlotFormatter from 'quill-blot-formatter' <--- Error, if as module
// import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';
// import ImageUploader from "quill-image-uploader";
// Quill.register("modules/imageUploader", ImageUploader);
// Quill.register("modules/blotFormatter", BlotFormatter);

// const BaseImageFormat = Quill.import('formats/image');
// class ImageFormat extends BaseImageFormat {
//     static formats(domNode) {
//         return ImageFormatAttributesList.reduce(function(formats, attribute) {
//             if (domNode.hasAttribute(attribute)) {
//                 formats[attribute] = domNode.getAttribute(attribute);
//             }
//             return formats;
//         }, {});
//     }
//     format(name, value) {
//         if (ImageFormatAttributesList.indexOf(name) > -1) {
//             if (value) {
//                 this.domNode.setAttribute(name, value);
//             } else {
//                 this.domNode.removeAttribute(name);
//             }
//         } else {
//             super.format(name, value);
//         }
//     }
// }
// Quill.register(ImageFormat, true);

// import FormQuillEditor from './components/FormQuillEditor.vue'

// end handle allow image alignment styles on quill editor



import axios from 'axios'
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
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

// app.component("form-quill-editor", FormQuillEditor);

store.dispatch('auth/isValidLogin')
    .then(() => {
        app.use(router).use(store).mount('#app')
    }).catch((error) => {
    console.error(error);
})


