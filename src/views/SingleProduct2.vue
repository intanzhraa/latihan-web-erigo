<template>
    ada
    {{ slug }}
    {{ getid }}
  </template>
  <script>
  import { mapGetters, mapState } from 'vuex';
  export default{
    props:['slug'],
    computed:{
    ...mapState('product', ['getid'])
  },
   mounted(){
      this.$store.dispatch('product/fetchSingleProduct', this.slug)
   }
  }
  </script>