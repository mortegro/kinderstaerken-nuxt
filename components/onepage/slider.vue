<template lang="pug">
  section#main-slider
    carousel(:perPage='1', :autoplay="true", :autoplayHoverPause="true", :paginationEnabled="false", :autoplayLoop="true")
      //- slide
      //-   .item(style='background-image: url(images/uploads/bg2.jpg);')
      //-     .slider-inner
      //-       .container
      //-         .row
      //-           .col-sm-6
      //-             .carousel-content
      //-               h2
      //-                 | Auch für 
      //-                 span Mut
      //-                 |  und Stärke braucht es 
      //-                 span Vorbilder
      //-               .ce-content
      //-                 | Dadurch dass wir Kindern und Jugendlichen Einblick in unsere Welt geben, 
      //-                 | können diese ihren eigenen Horizont erweitern.
      //-               a.btn.btn-primary(href="#mentors") Mentor werden.
      slide
        .item(style='background-image: url(images/uploads/bg1.jpg);')
          .slider-inner
            .container
              .row
                .col-sm-6
                  .carousel-content
                    h2
                      span Entwicklung
                      |  braucht Kreativität, Lernen und Spass
                    .ce-content
                      | Durch das Entdecken der in uns liegenden Potentiale lassen sich schwierige Zeiten einfacher überwinden.
                    nuxt-link.btn.btn-primary(to='/#support', v-smooth-scroll="{ duration: 1000, offset: -100 }") Projekte unterstützen.
      slide                
        .item(style='background-image: url(images/uploads/bg3.jpg);')
          .slider-inner
            .container
              .row
                .col-sm-6
                  .carousel-content
                    h2
                      | Was wir selbst
                      span  erschaffen
                      |  haben, können wir auch selbst
                      span  begreifen.
                    .ce-content.dark
                      | Wir erschließen uns unsere Welt nicht nur über Augen und Ohren, sondern auch über unsere Hände und unseren Verstand.
                      |  Besonders dadurch, was wir mit diesen erschaffen, verstehen wir unsere eigenen Möglichkeiten.
                    nuxt-link.btn.btn-primary(to='/#support', v-smooth-scroll="{ duration: 1000, offset: -100 }") Projektpate werden.
      slide
        .item(style='background-image: url(images/uploads/bg7.jpg);')
          .slider-inner
            .container
              .row
                .col-sm-6
                  .carousel-content(style="padding-top: 40px")
                    h2.dark
                      | Das Beste was wir im 
                      span Leben
                      |  tun können, ist 
                      span beherzt 
                      | auf dem 
                      span Weg
                      |  zu sein.
                    .ce-content.dark
                      | Wenn Sie Fragen oder Anregungen haben, oder gern etwas zusammen mit uns realisieren möchten, 
                      | setzten sie sich mit uns in Verbindung.
                    nuxt-link.btn.btn-primary(to='/#get-in-touch', v-smooth-scroll="{ duration: 1000, offset: -100 }") Kontakt aufnehmen.                    
</template>

<script>
export default {
}
</script>

<style scoped>
#main-slider .slider-inner {
  position: relative;
}
</style>
