<template lang="pug">
  .container
    section.mt-4
      Title 
        h2 {{heading}}
      .row
        .col.mb-4
          .card.mb-4.wow.fadeIn
            #slider.carousel.slide(data-ride='carousel')
              .carousel-inner
                .carousel-item(v-if="images", v-for="(img,idx) in images", :key="idx", :class="{ active: (idx==0)}")
                  img.d-block.w-100(:src="img")
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
      heading: "Not Found!", 
      body:"Eintrag nicht gefunden..", 
      images:[
        "https://images.unsplash.com/photo-1534294668821-28a3054f4256?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1527321838203-8f3f563a0656?auto=format&fit=crop&w=1350&q=80"
      ]
    }
    if (!this.$route.params.id) return defaultEntry
    let element = require('~/content/activities/' + this.$route.params.id + '.json');
    console.log(element)
    if (!element || !element.body) return defaultEntry;
    return element
  },
}
</script>
