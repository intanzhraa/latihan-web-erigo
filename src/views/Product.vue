<template>
    <h1 class="mb-8 text-center font-sans text-5xl font-bold mt-5">Product</h1>
          <div class="grid grid-cols-4 gap-4">
              <div v-for="product in getProduct.data" :key="product.id">
                <article class="mx-auto my-4 flex w-full flex-col overflow-hidden border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                  <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc0a35b0-b3b8-427c-bf2c-334e0c4beeca/sb-logo-skate-t-shirt-LBBxZV.png" class="h-56 w-full object-cover" alt="" />
                  <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">{{ product.name }}</h3>
                  <p class="mb-4 text-base font-light">{{ product.slug }}</p>
                  <h3 class="mt-4 mb-3 text-l font-semibold xl:text-2xl">Rp {{ product.base_price }}</h3>
                  <router-link :to="'/singleproduct/' + product.slug">
                    klik
                  </router-link>
                </article>
              </div>
          </div>
  </template>
  
  <script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
    computed: {
    ...mapGetters('product', ['getProduct']),
    },
    methods: {
    ...mapActions('product', ['fetchProduct']),
    },
    created() {
    this.fetchProduct();
    },
    }
  </script>