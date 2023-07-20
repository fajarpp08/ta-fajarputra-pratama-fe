import { createWebHistory, createRouter } from "vue-router";
// admin
import Dashboard from "./../pages/admin/dashboard/Dashboard.vue";
import Divisi from "./../pages/admin/divisi/BrowseData.vue";
import Area from "./../pages/admin/area/BrowseArea.vue";
import GroupEquipment from "./../pages/admin/groupequipment/BrowseGroup.vue";
import Equipment from "./../pages/admin/equipment/BrowseEquipment.vue";
import Type from "./../pages/admin/type/BrowseType.vue";
import TypeDetail from "./../pages/admin/type/DetailType.vue";
import AddAdmin from "./../pages/admin/admin/BrowseAdmin.vue";
import Transaksi from "./../pages/admin/transaksi/BrowseTransaksi.vue";
import Login from "./../pages/auth/Login.vue";

// user
import DashboardUser from "./../pages/user/DashboardUser.vue";
// import DivisiUser from "./../pages/user/DivisiUser.vue";
// import AreaUser from "./../pages/user/AreaUser.vue";
// import GroupEquipmentUser from "./../pages/user/GroupEquipmentUser.vue";
// import EquipmentUser from "./../pages/user/EquipmentUser.vue";
import TypeUser from "./../pages/user/TypeUser.vue";
import GaleriUser from "./../pages/user/GaleriUser.vue";
import BeritaUser from "./../pages/user/BeritaUser.vue";
import DashboardUserShowType from "./../pages/user/DashboardUserShowType.vue";


import store from "../store";


const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { layout: "empty",guest: true},

    },  
    {
        path: "/",
        name: "Home",
        component: DashboardUser,
        meta: { layout: "user",requiredLogin: false},

    },
    {
        path: "/homeadmin",
        name: "HomeAdmin",
        component: Dashboard,
        meta: { layout: "admin",requiredLogin: true},

    },
    {
        path: "/divisi",
        name: "Divisi",
        component: Divisi,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/area",
        name: "Area",
        component: Area,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/groupequipment",
        name: "GroupEquipment",
        component: GroupEquipment,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/equipment",
        name: "Equipment",
        component: Equipment,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/type",
        name: "Type",
        component: Type,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/typedetail/:id",
        name: "TypeDetail",
        component: TypeDetail,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/transaksi",
        name: "Transaksi",
        component: Transaksi,
        meta: { layout: "admin",requiredLogin: true},
    },
    {
        path: "/addadmin",
        name: "AddAdmin",
        component: AddAdmin,
        meta: { layout: "admin",requiredLogin: true},
    },
    

    // USER
    {
        path: "/dashboarduser",
        name: "DashboardUser",
        component: DashboardUser,
        meta: { layout: "user",requiredLogin: false},
    },
    {
        path: "/content/:id",
        name: "Content",
        component: DashboardUserShowType,
        meta: { layout: "user",requiredLogin: false},

    },
    // {
    //     path: "/divisiuser",
    //     name: "DivisiUser",
    //     component: DivisiUser,
    //     meta: { layout: "user",requiredLogin: false},
    // },
    // {
    //     path: "/areauser",
    //     name: "AreaUser",
    //     component: AreaUser,
    //     meta: { layout: "user",requiredLogin: false},
    // },
    // {
    //     path: "/groupequipmentuser",
    //     name: "GroupEquipmentUser",
    //     component: GroupEquipmentUser,
    //     meta: { layout: "user",requiredLogin: false},
    // },
    // {
    //     path: "/equipmentuser",
    //     name: "EquipmentUser",
    //     component: EquipmentUser,
    //     meta: { layout: "user",requiredLogin: false},
    // },
    {
        path: "/typeuser",
        name: "TypeUser",
        component: TypeUser,
        meta: { layout: "user",requiredLogin: false},
    },
    {
        path: "/galeriuser",
        name: "GaleriUser",
        component: GaleriUser,
        meta: { layout: "user",requiredLogin: false},
    },
    {
        path: "/beritauser",
        name: "BeritaUser",
        component: BeritaUser,
        meta: { layout: "user",requiredLogin: false},
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiredLogin)) {
        if (store.getters['auth/isLoggedIn']) {
            next();
            return;
        }
        next("/login");
    } else if (to.matched.some((record) => record.meta.guest)) {
        if (store.getters['auth/isLoggedIn']) {
            next("/homeadmin");
            return;
        }
        next();
    } else {
        next();
    }
});

export default router;