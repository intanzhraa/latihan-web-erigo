import { createStore } from "vuex";
import auth from "./modules/auth";
import merk from "./modules/merk";
import kategori from "./modules/kategori";
import product from "./modules/product";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        merk,
        kategori,
        product
    },
});

export default store;