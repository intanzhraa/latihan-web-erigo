import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Produk from "../views/Produk.vue";
import Banner from "../views/Banner.vue";
import store from "../store";

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