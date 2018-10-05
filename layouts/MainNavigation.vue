<template lang="pug">
  nav#main-menu.navbar.navbar-default.navbar-fixed-top(role='banner')
    .navbar-header
      button.navbar-toggle(type='button', data-toggle='collapse', data-target='.navbar-collapse')
        span.sr-only Toggle navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      a.navbar-brand(href='index.html')
        img(src='~/static/images/uploads/logoverein.png', alt='logo')
    .collapse.navbar-collapse.navbar-right
      ul.nav.navbar-nav
        li.scroll.active
          a(href='/#home' data-scroll) Home
        li.scroll
          a(href='/#cause' data-scroll) Anliegen
        li.scroll
          a(href='/#workshops' data-scroll) Workshops
        li.scroll
          a(href='/#mentors' data-scroll) Mentoren
        li.scroll
          a(href='/#sponsors' data-scroll) Sponsoring
        li.scroll
          a(href='/#get-in-touch' data-scroll) Kontakt
        li.scroll
          a(href='/impressum/') Impressum
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
