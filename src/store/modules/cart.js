// // import axios from "axios";

// // const cart = {
// //     namespaced: true,
// //     state: {
// //         cartData: [],
// //     },
// //     getters: {
// //         getCart: (state) => state.cartData,
// //     },
// //     actions: {
// //         async fatchCart({ commit }) {
// //             try {
// //                 // const token = localStorage.getItem('token');
// //                 const dataCart = await axios.post(
// //                     "https://ecommerce.olipiskandar.com/api/v1/carts",
// //                     {
// //                         temp_user_id: null,
// //                     },
// //                     {
// //                         headers: {
// //                             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //                         },
// //                     }
// //                 );
// //                 console.log(dataCart.data["cart_items"]);
// //                 commit("SET_CART", dataCart.data["cart_items"]);
// //             } catch (error) {
// //                 alert(error);
// //                 console.log(error);
// //             }
// //         },
// //     },
// //     mutations: {
// //         SET_CART(state, cart) {
// //             state.cartData = cart;
// //         },
// //     },
// // };

// // export default cart

// import axios from "axios";

// const cart = {
//     namespaced: true,
//     state: {
//       cart: [],
//     },
//     getters:{
//        getCart: (state) => state.cart
//     },
//     actions:{
//         async fetchCart({commit}) {
//             try {
//                 const datacart = await axios.post("https://ecommerce.olipiskandar.com/api/v1/carts", {
//                     "temp_user_id": null
//                 }, {
//                     headers: {
//                         'Authorization': `Bearer ${localStorage.getItem('token')}`
//                     }
//                 } )
//                 console.log(datacart.data.cart_items.data);
//                 commit('SET_CART',datacart.data.cart_items.data)
//             } catch (error) {
//                 alert('Ada Error')
//                 console.log(error)
//             }
//         },

//         async removeFromCart({ commit, dispatch}, cartId) {
//             try {
//                 const response = await axios.post(
//                     `https://ecommerce.olipiskandar.com/api/v1/carts/destroy`,
//                     {
//                         cart_id: cartId,
//                     },
//                     {
//                         headers: {
//                             Authorization: `Bearer ${localStorage.getItem("token")}`,
//                         },
//                     }
//                 );
//                 console.log(response.data.message);
//                 dispatch("fatcbCart");
//             } catch (error) {
//                 alert("error removing item from cart");
//                 console.log(error);
//             }
//         }
       
        
//     },
//     mutations:{
//         SET_CART(state, cart) {
//             state.cart = cart
//         }
//     }
// }

// export default cart;

import axios from "axios";

const cart = {
    namespaced: true,
    state: {
      cart: [],
    },
    getters:{
       getCart: (state) => state.cart
    },
    actions:{
        async fetchCart({commit}) {
            try {
                const datacart = await axios.post("https://ecommerce.olipiskandar.com/api/v1/carts", {
                    "temp_user_id": null
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                } )
                console.log(datacart.data.cart_items.data);
                commit('SET_CART',datacart.data.cart_items.data)
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        },

        async removeFromCart({ commit, dispatch}, cartId) {
                        try {
                            const response = await axios.post(
                                `https://ecommerce.olipiskandar.com/api/v1/carts/destroy`,
                                {
                                    cart_id: cartId,
                                },
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                                    },
                                }
                            );
                            console.log(response.data.message);
                            dispatch("fetchCart");
                        } catch (error) {
                            alert("error removing item from cart");
                            console.log(error);
                        }
                    },

                    async changeQuantityCart({ commit, dispatch}, {cartId, typeQty}) {
                        try {
                            const response = await axios.post(
                                `https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity`,
                                {
                                    cart_id: cartId,
                                    temp_user_id: null,
                                    type: typeQty,
                                },
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                                    },
                                }
                            );
                            console.log(response.data.message);
                            dispatch("fetchCart");
                        } catch (error) {
                            alert("error");
                            console.log(error);
                        }
                    }
                   
                    
                },
    mutations:{
        SET_CART(state, cart) {
            state.cart = cart
        }
    }
}

export default cart;