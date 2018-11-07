<template lang="pug">
  nav#topnav.navbar.navbar-expand-lg.navbar-light.bg-light.fixed-top(role='banner')
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navcollapse')
      span.navbar-toggler-icon
    a.navbar-brand(href='/')
      img(src='/images/uploads/logoverein.png', alt='logo')
    #navcollapse.collapse.navbar-collapse
      ul.nav.navbar-nav.ml-auto
        li.scroll
          nuxt-link(to='/#home', data-toggle='collapse', data-target='#navcollapse', v-smooth-scroll="{ duration: 1000, offset: -100}") Home
        li.scroll
          nuxt-link(to='/#cause', data-toggle='collapse', data-target='#navcollapse', v-smooth-scroll="{ duration: 1000, offset: -200 }") Anliegen
        li.scroll
          nuxt-link(to='/#workshops', data-toggle='collapse', data-target='#navcollapse', v-smooth-scroll="{ duration: 1000, offset: -200 }") Workshops
        li.scroll
          nuxt-link(to='/#support', data-toggle='collapse', data-target='#navcollapse', v-smooth-scroll="{ duration: 1000, offset: -200 }") Support
        li.scroll
          nuxt-link(to='/#activities', data-toggle='collapse', data-target='#navcollapse', v-smooth-scroll="{ duration: 1000, offset: -200 }") Aktivitäten
        li.scroll
          nuxt-link(to='/#get-in-touch', data-toggle='collapse', data-target='#navcollapse', v-smooth-scroll="{ duration: 1000, offset: -100 }") Kontakt
        //- li.scroll
        //-   nuxt-link(to='/impressum/') Impressum
</template>

<style>
/* Header shrink not working yet... */
.navbar-light{
  border: 0;
  border-radius: 0;
  margin-bottom: 0;
  padding-right: 30px;
  padding-left: 30px;
}

.navbar-brand {
  height: auto;
  padding: 0 15px;
  margin-right: 0;
}

.navbar-brand img {
  height: 56px;
}

/* Shrink */
.navbar-light.shrink .navbar-brand {
  height: auto;
  padding: 5px 15px 5px;
}

.navbar-light.shrink .navbar-brand img {
  height: 56px
}

.nav.main-tab {
    background: #eee;
    border-bottom: 3px solid #222534;
    border-radius: 3px 3px 0 0;
}

.nav.main-tab>li>a {
    color: #272727;
}

.nav.main-tab>li.active>a {
    background: #222534;
    color: #45aed6;
}

.nav.main-tab>li:first-child>a {
    border-radius: 3px 0 0 0;
}

.nav.main-tab>li:last-child>a {
    border-radius: 0 3px 0 0;
}


@media only screen and (min-width: 991px) {
    .navbar-light{
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
    }
    .navbar-nav>li {
        padding-top: 40px;
        padding-bottom: 40px;
        padding-right: 10px;
        padding-left: 10px;
    }
    .navbar-nav>li.active,
    .navbar-nav>li.open,
    .navbar-nav>li:hover {
        background: transparent;
        padding-top: 37px;
        border-top: 3px solid #45aed6;
    }

    /* Dropdown menu */
    .dropdown-menu {
        padding: 0 20px;
        min-width: 220px;
        background-color: rgba(26, 28, 40, 0.9);
        border: 0;
        border-radius: 0;
        box-shadow: none;
        background-clip: inherit;
    }
    .dropdown-menu>li {
        border-left: 3px solid transparent;
        margin-left: -20px;
        padding-left: 17px;
        transition: border-color 400ms;
    }
    .dropdown-menu>li>a {
        border-top: 1px solid #404455;
        padding: 15px 0;
        color: #eeeeee;
    }
    .dropdown-menu>li:first-child>a {
        border-top: 0;
    }
    .dropdown-menu>li.active,
    .dropdown-menu>li.open,
    .dropdown-menu>li:hover {
        border-left-color: #45aed6;
    }
    .dropdown-menu>li.active>a,
    .dropdown-menu>li.open>a,
    .dropdown-menu>li:hover>a {
        color: #45aed6;
        background-color: transparent;
    }
}

@media only screen and (max-width: 991px) {
    .navbar-nav>li,
    .navbar-nav>li.active,
    .navbar-nav>li.open,
    .navbar-nav>li:hover {
        padding: 0 15px;
        line-height: 30px;
        border-top: 3px solid transparent;
    }
    .navbar-nav>li:hover {
      background-color: #d6dee0
    }
    .navbar-header {
        float: none;
        margin: 0 auto;
        text-align: center;
    }
    .navbar>.container .navbar-brand,
    .navbar>.container-fluid .navbar-brand {
        float: none;
        height: 60px;
        display: inline-block;
        padding: 10px;
    }
    .navbar>.container .navbar-brand img,
    .navbar>.container-fluid .navbar-brand img {
        max-height: 100%
    }

}

</style>
