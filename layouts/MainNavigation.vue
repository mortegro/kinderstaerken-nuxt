<template lang="pug">
  nav#main-menu.navbar.navbar-default.navbar-fixed-top(role='banner')
    .navbar-header
      button.navbar-toggle(type='button', data-toggle='collapse', data-target='.navbar-collapse')
        span.sr-only Toggle navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      a.navbar-brand(href='index.html')
        img(src='images/uploads/logoverein.png', alt='logo')
    .collapse.navbar-collapse.navbar-right
      ul.nav.navbar-nav
        li.scroll.active
          nuxt-link(to='/#home' v-smooth-scroll="{ duration: 1000, offset: 0}") Home
        li.scroll
          nuxt-link(to='/#cause' v-smooth-scroll="{ duration: 1000, offset: -100 }") Anliegen
        li.scroll
          nuxt-link(to='/#workshops' v-smooth-scroll="{ duration: 1000, offset: -100 }") Workshops
        li.scroll
          nuxt-link(to='/#support' v-smooth-scroll="{ duration: 1000, offset: -100 }") Support
        li.scroll
          nuxt-link(to='/#get-in-touch' v-smooth-scroll="{ duration: 1000, offset: -100 }") Kontakt
        li.scroll
          nuxt-link(to='/impressum/') Impressum
</template>

<style>
/* Header shrink not working yet... */
.navbar.navbar-default {
  border: 0;
  border-radius: 0;
  margin-bottom: 0;
  padding-right: 30px;
  padding-left: 30px;
}

.navbar.navbar-default .navbar-toggle {
  margin-top: 32px;
}

.navbar.navbar-default .navbar-brand {
  height: auto;
  padding: 22px 15px 21px;
}

.navbar.navbar-default.shrink .navbar-brand {
  height: auto;
  padding: 5px 15px 5px;
}

.navbar.navbar-default .navbar-brand img {
  height: 56px
}

.navbar.navbar-default.shrink .navbar-brand img {
  height: 56px
}

</style>
