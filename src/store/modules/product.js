import axios from "axios";

const product = {
    namespaced: true,
    state: {
        productData: [],
    },
    getters: {
        getProduct: (state) => state.productData,
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/product/latest/5"
                );
                commit("SET_PRODUCTS", data.data["data"]);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PRODUCTS(state, product) {
            state.productData = product;
        },
    },
};

export default product;