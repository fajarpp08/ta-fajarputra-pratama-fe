import { createWebHistory, createRouter } from "vue-router";

// ADMIN
import AddAdmin from "./../pages/admin/admin/BrowseAdmin.vue";
import Transaksi from "./../pages/admin/transaksi/BrowseTransaksi.vue";
import Login from "./../pages/auth/Login.vue";
import Register from "./../pages/auth/Register.vue";
import EmailVerification from "./../pages/auth/EmailVerification.vue";
import DashboardAdmin from "./../pages/admin/dashboard/DashboardAdmin.vue";
import Kategori from "./../pages/admin/kategori/BrowseKategori.vue";
import EditKategori from "./../pages/admin/kategori/editKategori.vue"
import BarangAdmin from "./../pages/admin/barang/BrowseBarang.vue";
import DetailBarang from "./../pages/admin/barang/DetailBarang.vue";
import EditBarang from "./../pages/admin/barang/EditBarang.vue";
import Pesanan from "./../pages/admin/pesanan/BrowsePesanan.vue";
import Bank from "./../pages/admin/bank/BrowseBank.vue";
import qty_tambah from './../pages/admin/barang/TambahQtyBarang.vue'
import qty_kurang from './../pages/admin/barang/KurangQtyBarang.vue'
import Cookies from "js-cookie";

// USER
import Dashboard from "./../pages/user/Dashboard.vue";
import GaleriUser from "./../pages/user/GaleriUser.vue";
import Barang from "./../pages/user/Barang.vue";
import Keranjang from "./../pages/user/Keranjang.vue";
import Pembayaran from "./../pages/user/Pembayaran.vue";
import CheckoutPembayaran from "./../pages/user/CheckoutPembayaran.vue";
import DetailPembayaran from "./../pages/user/DetailPembayaran.vue";
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
        path: "/kategori/:id",
        name: "Edit Kategori",
        component: EditKategori,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/barangadmin",
        name: "BarangAdmin",
        component: BarangAdmin,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/barangadmin/:id/edit",
        name: "Edit Barang",
        component: EditBarang,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/barangadmin/tambah_qty/:id",
        name: "Tambah Qty Barang",
        component: qty_tambah,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/barangadmin/kurang_qty/:id",
        name: "Kurang Qty Barang",
        component: qty_kurang,
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
    {
        path: "/checkout_pembayaran/:id",
        name: "Checkout Pembayaran",
        component: CheckoutPembayaran,
        meta: { layout: "user",requiredLogin: true},
    },
    {
        path: "/detail_pembayaran/:id",
        name: "Detail Pembayaran",
        component: DetailPembayaran,
        meta: { layout: "user",requiredLogin: true},
    },
    {
        path: '/access-denied',
        name: 'Access Denied',
        component: ()=>import('../pages/user/AcceessDenied.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const allowedRoutes = ['Login'];

router.beforeEach((to, from, next) => {
    const isAuthenticated = Cookies.get('token') != null;
    
    if (allowedRoutes.includes(to.name) && isAuthenticated) {
      next({ name: 'Home' }); 
    } else {
      next(); 
    }
  });
  router.beforeEach((to, from, next) => {
    const roleAdmin = [1, 2]; 
    const roleUser = 3; 
    const token = Cookies.get('token');
    const routeUser = ["Keranjang", "Pembayaran", "Checkout Pembayaran", "Detail Pembayaran"];
    const routeAdmin = ["HomeAdmin", "BarangAdmin", "Kategori", "Edit Kategori"];

    if (routeUser.includes(to.name)) {
        if (!token) {
            next({ name: 'Login' });
        } else {
            const roles = Number(Cookies.get('role'));
            if (roles === roleUser) {
                next();
            } else {
                next({ name: 'Access Denied' });
            }
        }
    } else if (routeAdmin.includes(to.name)) {
        if (!token) {
            next({ name: 'Login' });
        } else {
            const roles = Number(Cookies.get('role')); 
            if (roleAdmin.includes(roles)) {
                next();
            } else {
                next({ name: 'Access Denied' });
            }
        }
    } else {
        next();
    }
});
export default router;