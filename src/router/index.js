import { createWebHistory, createRouter } from "vue-router";

// ADMIN
import AddAdmin from "./../pages/admin/admin/BrowseAdmin.vue";
import Transaksi from "./../pages/admin/transaksi/BrowseTransaksi.vue";
import Login from "./../pages/auth/Login.vue";
import Register from "./../pages/auth/Register.vue";
import EmailVerification from "./../pages/auth/EmailVerification.vue";
import DashboardAdmin from "./../pages/admin/dashboard/DashboardAdmin.vue";
import Kategori from "./../pages/admin/kategori/BrowseKategori.vue";
import BarangAdmin from "./../pages/admin/barang/BrowseBarang.vue";
import DetailBarang from "./../pages/admin/barang/DetailBarang.vue";
import Pesanan from "./../pages/admin/pesanan/BrowsePesanan.vue";
import Bank from "./../pages/admin/bank/BrowseBank.vue";
import Cookies from "js-cookie";
// USER
import Dashboard from "./../pages/user/Dashboard.vue";
import GaleriUser from "./../pages/user/GaleriUser.vue";
import Barang from "./../pages/user/Barang.vue";
import Keranjang from "./../pages/user/Keranjang.vue";
import Pembayaran from "./../pages/user/Pembayaran.vue";

import store from "../store";


const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { layout: "empty",guest: true},
    }, 
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { layout: "empty",guest: true},
    },
    {
        path: "/emailverification",
        name: "EmailVerification",
        component: EmailVerification,
        meta: { layout: "empty",guest: true},
    },
    {
        path: "/",
        name: "Home",
        component: Dashboard,
        meta: { layout: "user",requiredLogin: false},

    },
    {
        path: "/homeadmin",
        name: "HomeAdmin",
        component: DashboardAdmin,
        meta: { layout: "admin",requiredLogin: true,  role: "admin"},
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/barangadmin",
        name: "BarangAdmin",
        component: BarangAdmin,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/detailbarang/:id",
        name: "DetailBarang",
        component: DetailBarang,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/pesanan",
        name: "Pesanan",
        component: Pesanan,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/bank",
        name: "Bank",
        component: Bank,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/addadmin",
        name: "AddAdmin",
        component: AddAdmin,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/transaksi",
        name: "Transaksi",
        component: Transaksi,
        meta: { layout: "admin",requiredLogin: true},
    },
    

    // USER
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { layout: "user",requiredLogin: true,  role: "user"},
    },
    {
        path: "/galeriuser",
        name: "GaleriUser",
        component: GaleriUser,
        meta: { layout: "user",requiredLogin: false},
    },
    {
        path: "/barang",
        name: "Barang",
        component: Barang,
        meta: { layout: "user",requiredLogin: false},
    },
    {
        path: "/keranjang/:idKeranjang",
        name: "Keranjang",
        component: Keranjang,
    },
    {
        path: "/pembayaran",
        name: "Pembayaran",
        component: Pembayaran,
        meta: { layout: "user",requiredLogin: true},
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach(async (to, from, next) => {
//     if (to.matched.some((record) => record.meta.requiredLogin)) {
//         if (store.getters['auth/isLoggedIn']) {
//             const user = store.getters['auth/dataUser']
//             if (user.role.name === 'user') {
//                 next();
//                 return;
//             } else if ((user.role.name === 'admin')) {
//                 next();
//                 return;
//             } else if (user.role.name === 'super_admin') {
//                 next();
//                 return;
//             } else {
//                 next('/buathalaman access forbidden');
//             }

//             next();
//             return;
//         }
//         next("/login");
//     } else {
//         next();
//     }
// });
const allowedRoutes = ['Login'];

router.beforeEach((to, from, next) => {
    const isAuthenticated = Cookies.get('token') != null;
  
    if (allowedRoutes.includes(to.name) && isAuthenticated) {
      next({ name: 'Home' }); 
    } else {
      next(); 
    }
  });

export default router;