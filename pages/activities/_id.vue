<template lang="pug">
  .container
    .section-header
      Title {{title}}
    .row
      .col.mb-4
        .card.mb-4.wow.fadeIn
          #slider.carousel.slide(data-ride='carousel')
            .carousel-inner
              .carousel-item(v-if="images", v-for="(img,idx) in images", :key="idx", :class="{ active: (idx==0)}")
                img.d-block.w-100(:src="img | fullImagePath")
              .carousel-item(v-if="videos", v-for="(video,idx) in videos", :key="idx+500")
                .embed-responsive.embed-responsive-16by9
                  iframe.embed-responsive-item.d-block.w-100(:src="video")
            a.carousel-control-prev(href='#slider', role='button', data-slide='prev')
              span.carousel-control-prev-icon(aria-hidden='true')
              span.sr-only Previous
            a.carousel-control-next(href='#slider', role='button', data-slide='next')
              span.carousel-control-next-icon(aria-hidden='true')
              span.sr-only Next
        .card.mb-4.wow.fadeIn
          .card-body
            p(v-html="body")

</template>

<script>
export default {
  data() {
    const defaultEntry = {
      title: "Not Found!", 
      body:"Eintrag nicht gefunden..", 
      images:[
        "dancing.jpg",
      ]
    }
    if (!this.$route.params.id) return defaultEntry
    let element = require('~/content/activities/' + this.$route.params.id + '.json');
    // console.log(element)
    if (!element || !element.body) return defaultEntry;
    return element
  },
}
</script>

<style scoped>
  .container {
    margin-top: 80px;
  }
</style>
