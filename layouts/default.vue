<template>
  <div id="home" class="homepage">
    <Header/>
    <nuxt/>
    <Footer/>
    <script src="/js/mousescroll.js"></script>
    <script src="/js/main.js"></script>

  </div>
</template>

<script>
  import Header from '~/layouts/Header.vue'
  import Footer from '~/layouts/Footer.vue'

  export default {
    components: {
      Header,
      Footer,
    }
  }
</script>


<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s
  }
.page-enter, .page-leave-active {
  opacity: 0
}
  
</style>
