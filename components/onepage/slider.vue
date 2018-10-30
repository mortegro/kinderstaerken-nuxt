<template lang="pug">
  section#main-slider
    #slider.carousel.slide(data-ride='carousel')
      .carousel-inner.embed-responsive.embed-responsive-21by9
        .carousel-item.embed-responsive-item.active(style="background-image: url('images/uploads/bg2.jpg');")
          //- img.d-block.w-100(src='', alt='First slide')
          .carousel-caption.d-none.d-md-block
            h2
              | Auch für 
              span Mut
              |  und Stärke braucht es 
              span Vorbilder
            p.d-none.d-lg-block
              | Dadurch dass wir Kindern und Jugendlichen Einblick in unsere Welt geben, 
              | können diese ihren eigenen Horizont erweitern.
            a.btn.btn-primary(href="#mentors") Mentor werden.

        .carousel-item.embed-responsive-item(style="background-image: url('/images/uploads/bg1.jpg')")
          //- img.d-block.w-100(src='images/uploads/bg1.jpg', alt='Second slide')
          .carousel-caption.d-none.d-md-block
            h2
              span Entwicklung
              |  braucht Kreativität, Lernen und Spass
            p.d-none.d-lg-block
              | Durch das Entdecken der in uns liegenden Potentiale lassen sich schwierige Zeiten einfacher überwinden.
            nuxt-link.btn.btn-primary(to='/#support', v-smooth-scroll="{ duration: 1000, offset: -100 }") Projekte unterstützen.

        .carousel-item.embed-responsive-item(style="background-image: url('~/static/images/uploads/bg3.jpg')")
          //- img.d-block.w-100(src='images/uploads/bg3.jpg', alt='Third slide')
          .carousel-caption.d-none.d-md-block
            h2
              | Was wir selbst
              span  erschaffen
              |  haben, können wir auch selbst
              span  begreifen.
            p.d-none.d-lg-block
              | Wir erschließen uns unsere Welt nicht nur über Augen und Ohren, sondern auch über unsere Hände und unseren Verstand.
              |  Besonders dadurch, was wir mit diesen erschaffen, verstehen wir unsere eigenen Möglichkeiten.
            nuxt-link.btn.btn-primary(to='/#support', v-smooth-scroll="{ duration: 1000, offset: -100 }") Projektpate werden.

        .carousel-item.embed-responsive-item(style="background-image: url('images/uploads/bg4.jpg')")
          //- img.d-block.w-100(src='images/uploads/bg4.jpg', alt='Third slide')
          .carousel-caption.d-none.d-md-block
            h2.dark
              | Das Beste was wir im 
              span Leben
              |  tun können, ist 
              span beherzt 
              | auf dem 
              span Weg
              |  zu sein.
            p.d-none.d-lg-block
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

.carousel-item {
  background: no-repeat center center scroll;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
}

.slider-inner {
  position: relative;    
  overflow: hidden;
}

.carousel-caption {
  top: 50%;
  transform: translateY(-40%);
  bottom: initial;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  right:50%;
  left: 5%;
}

.carousel-caption h2 {
    font-size: 28px;
    line-height: 1;
    text-transform: uppercase;
    color: #fff;
}

.carousel-caption h2>span {
    color: #45aed6;
}

.carousel-caption h2.dark {
    color: #272727
}


.carousel-caption .btn {
    margin-top: 10px;
} 





</style>
