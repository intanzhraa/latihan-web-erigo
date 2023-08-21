import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Produk from "../views/Produk.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Banner from "../views/Banner.vue";
import Kontak from "../views/Kontak.vue";
import Checkout from "../views/Checkout.vue";
import Chard from "../views/Chard.vue";
import store from "../store";
import Merk from "../views/Merk.vue";
import Kategori from "../views/Kategori.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true},
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
      path: "/produk",
      name: "Produk",
      component: Produk,
    },
    {
      path: "/",
      name: "Banner",
      component: Banner,
    },
    {
      path: "/singleproduct",
      name: "SingleProduct",
      component: SingleProduct,
    },
    {
      path: "/kontak",
      name: "Kontak",
      component: Kontak,
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
    },
    {
      path: "/chard",
      name: "Chard",
      component: Chard,
    },
    {
      path: "/merk",
      name: "Merk",
      component: Merk,
    },
    {
      path: "/kategori",
      name: "Kategori",
      component: Kategori,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
      next("/"); // Redirect to Home
    } else {
      next();
    }
  });

  router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && store.getters["auth/isAuthenticated"]) {
      next("/login"); // Redirect to Home
    } else {
      next();
    }
  });

export default router;