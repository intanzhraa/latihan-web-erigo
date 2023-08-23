<template>
    <center>
    <div class="m-10 max-w-sm">
  <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
    <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">Profil page Erigo Store !</h1>
    <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">{{ user.name }}</h3>
    <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">{{ user.email }}</h3>
  </div>
</div>
</center>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters("auth", ["getUser"]),
        user() {
            return this.getUser;
        },
    },
    methods: {
        ...mapActions("auth", ["getUserInfo"]),
    },
    async mounted() {
        // fetch user information
        const user = await this.getUserInfo();

        // if user information is retrived, update the store
        if (user) {
            this.$store.commit("auth/SET_USER", user);
        }
    },
};
</script>