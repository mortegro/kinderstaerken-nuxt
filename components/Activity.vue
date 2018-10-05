<template lang="pug">
  .portfolio-item(data-wow-duration="300ms", :class="[category]")
    .portfolio-item-inner
      img.img-responsive(:src="fullImgPath", alt='')
      .portfolio-info
        h3 {{title}}
        a.preview(href='images/portfolio/full.jpg', rel='prettyPhoto')
          i.fa.fa-eye
</template>

<script>
import moment from 'moment'
export default {
  props: {
    title: {type: String, default: ''},
    imageUrl: {type: String, default: 'noImage.jpg'},
    category: {type: String, default: ''},

  },
  computed: {
    fullImgPath: function() {
      return "/images/uploads/" + this.imageUrl
    }
  }
}
</script>

<style>
</style>
