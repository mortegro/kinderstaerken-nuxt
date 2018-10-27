<template lang="pug">
  section#main-slider
    #slider.carousel.slide(data-ride='carousel')
      .carousel-inner
        .carousel-item.active
          img.d-block.w-100(src='images/uploads/bg2.jpg', alt='First slide')
          .carousel-caption.d-none.d-md-block.row
            .col-6
              h2
                | Auch für 
                span Mut
                |  und Stärke braucht es 
                span Vorbilder
              p
                | Dadurch dass wir Kindern und Jugendlichen Einblick in unsere Welt geben, 
                | können diese ihren eigenen Horizont erweitern.
              a.btn.btn-primary(href="#mentors") Mentor werden.

        .carousel-item
          img.d-block.w-100(src='images/uploads/bg1.jpg', alt='Second slide')
          .carousel-caption.d-none.d-md-block.row
            .col-6
              h2
                span Entwicklung
                |  braucht Kreativität, Lernen und Spass
              p
                | Durch das Entdecken der in uns liegenden Potentiale lassen sich schwierige Zeiten einfacher überwinden.
              nuxt-link.btn.btn-primary(to='/#support', v-smooth-scroll="{ duration: 1000, offset: -100 }") Projekte unterstützen.

        .carousel-item
          img.d-block.w-100(src='images/uploads/bg3.jpg', alt='Third slide')
          .carousel-caption.d-none.d-md-block.row
            .col-6
              h2
                | Was wir selbst
                span  erschaffen
                |  haben, können wir auch selbst
                span  begreifen.
              p
                | Wir erschließen uns unsere Welt nicht nur über Augen und Ohren, sondern auch über unsere Hände und unseren Verstand.
                |  Besonders dadurch, was wir mit diesen erschaffen, verstehen wir unsere eigenen Möglichkeiten.
              nuxt-link.btn.btn-primary(to='/#support', v-smooth-scroll="{ duration: 1000, offset: -100 }") Projektpate werden.

        .carousel-item
          img.d-block.w-100(src='images/uploads/bg4.jpg', alt='Third slide')
          .carousel-caption.d-none.d-md-block.row
            .col-6
              h2.dark
                | Das Beste was wir im 
                span Leben
                |  tun können, ist 
                span beherzt 
                | auf dem 
                span Weg
                |  zu sein.
              p
                | Wenn Sie Fragen oder Anregungen haben, oder gern etwas zusammen mit uns realisieren möchten, 
                | setzten sie sich mit uns in Verbindung.
              nuxt-link.btn.btn-primary(to='/#get-in-touch', v-smooth-scroll="{ duration: 1000, offset: -100 }") Kontakt aufnehmen.   

      // a.carousel-control-prev(href='#slider', role='button', data-slide='prev')
      //   span.carousel-control-prev-icon(aria-hidden='true')
      //   span.sr-only Previous

      // a.carousel-control-next(href='#slider', role='button', data-slide='next')
      //   span.carousel-control-next-icon(aria-hidden='true')
      //   span.sr-only Next
                
</template>

<script>
export default {
}
</script>

<style scoped>
.slider-inner {
  position: relative;    
  overflow: hidden;
}

.item {
    height: 558px;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
}

.carousel-caption {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
}

.carousel-caption h2 {
    margin-top: 180px;
    font-size: 36px;
    line-height: 1;
    text-transform: uppercase;
    color: #fff;
}

.carousel-caption h2>span {
    color: #45aed6;
}

.carousel-caption .btn {
    margin-top: 10px;
}





</style>
