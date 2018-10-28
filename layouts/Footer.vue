<template lang="pug">
  #footer
    .container
      .row
        .col-sm-6 
          nuxt-link(to="/") © 2014 Förderverein KinderStärken Jena e.V.
        .col-sm-3
          nuxt-link(to="/impressum") Impressum
        .col-sm-3
          nuxt-link(to="/datenschutz") Datenschutzerklärung
</template>

<style scoped>
#footer{
    padding-top: 30px;
    padding-bottom: 30px;
    color: #fff;
    background: #2e2e2e;
}

a {
    color: #fff;
}

a:hover {
    color: #45aed6;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0 -7.5px;
}

ul>li {
    display: inline-block;
    margin: 0 7.5px;
}

</style>
