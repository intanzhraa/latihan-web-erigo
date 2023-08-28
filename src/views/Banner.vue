<template>
<div class="flex min-h-screen w-screen">
  <div class="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
    <!-- Left Column -->
    <div class="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
      <div class="mb-16 lg:my-auto lg:max-w-lg">
        <div class="mb-6 max-w-xl">
          <div>
            <p class="bg-teal-accent-400 mb-2 inline-block rounded-full bg-blue-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">25% OFF THIS AUGUST</p>
          </div>
          <h2 class="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
            Welcome To <br />
            ERIGO X
            <span class="rounded- abg-gradient-to-r inline-block bg-sky-400 from-navy-400 to-sky-400 px-2 font-bold text-white">JKT48</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">Erigo, Everywhere You Go. Renew your clothes right now with our cool and stylish collections.</p>
        </div>
        <div class="flex items-center">
          <a href="/produk" class="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"> Start Shopping </a>
          <a href="https://youtu.be/OvoizAEtR0Y" class="inline-flex items-center font-semibold text-sky-400 transition-colors duration-200 hover:text-navy-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
            Watch Videos</a
          >
        </div>
      </div>
    </div>
    <!-- /Left Column -->

    <!-- Right Column -->
    <div class="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
      <!-- Col 2 -->
      <div class="hidden w-56 items-center space-y-3 lg:flex">
        <div class="overflow-hidden rounded-xl bg-navy-400">
          <img class="h-full w-full object-cover" src="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/24/b7fb2c9c-ef51-4329-a67a-25bdd8257f2c.jpg" alt="" />
        </div>
      </div>
      <div class="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
        <div class="h-40 overflow-hidden rounded-xl bg-navy-600/60">
          <img class="mx-auto h-full w-full object-cover" src="https://pbs.twimg.com/media/F2l4AjVaoAAx0Mj?format=jpg&name=small" alt="" />
        </div>
        <div class="h-40 overflow-hidden rounded-xl bg-navy-600/60">
          <img class="mx-auto h-full w-full object-cover" src="https://pbs.twimg.com/media/F2wo0UeacAEkHul?format=jpg&name=small" alt="" />
        </div>
        <div class="h-40 overflow-hidden rounded-xl bg-blue-600/60">
          <img class="mx-auto h-full w-full object-cover" src="https://pbs.twimg.com/media/FwjsGyMaAAAnhEk?format=jpg&name=large" alt="" />
        </div>
      </div>
    </div>
    <!-- /Right Column -->
  </div>
</div>

<footer class="relative mt-20 bg-gray-900 px-4 pt-20">
  <div class="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2"><img class="h-full object-contain" src="../assets/logoerigo.jpg" alt="" /></div>
  <nav aria-label="Footer Navigation" class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left">
    <a href="#" class="font-medium text-white">CUSTOMER SERVICE</a>
    <a href="#" class="font-medium text-white">SUPPORT</a>
    <a href="#" class="font-medium text-white">BUSINESS</a>
    <a href="#" class="font-medium text-white">ABOUT US</a>
  </nav>
  <p class="py-10 text-center text-gray-300">© 2023, ERIGO Powered by Shopify</p>
</footer>


</template>