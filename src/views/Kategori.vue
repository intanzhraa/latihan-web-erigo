<template>
    <section class="py-20">
  <h1 class="mb-12 text-center font-sans text-5xl font-bold">All Kategori</h1>
  <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
    <div v-for="kategori in getKategori.data" :key="kategori.id">
    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" :src="kategori.banner" />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">{{ kategori.name }}</p>
          <p class="mb-2 text-xl font-medium text-gray-800">{{  kategori.slug }}</p>
          <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
          <div class="justify-starts mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#icefactory</div>
          </div>
        </div>
      </a>
    </article>
</div>
    
    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src="https://images.unsplash.com/photo-1660213372424-deecb106a28e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Gardening</p>
          <p class="mb-2 text-xl font-medium text-gray-800">Sunflowers are my favorite</p>
          <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
          <div class="justify-starts mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#icefactory</div>
          </div>
        </div>
      </a>
    </article>

  </div>
</section>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('kategori', ['getKategori']),
    },
    methods: {
        ...mapActions('kategori', ['fetchKategori']),
    },
    created() {
        this.fetchKategori();
    },
}
</script>