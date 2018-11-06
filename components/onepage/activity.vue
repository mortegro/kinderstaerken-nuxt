<template lang="pug">
  .portfolio-item(data-wow-duration="300ms")
    .portfolio-item-inner
      img.w-100(:src="imageUrl | fullImagePath", alt='')
      .portfolio-info
        h3 {{title}}
        nuxt-link.preview(:to='_path')
          i.fa.fa-eye
</template>

<script>
import moment from 'moment'
export default {
  props: {
    title: {type: String, default: ''},
    imageUrl: {type: String, default: 'noImage.jpg'},
    category: {type: String, default: ''},
    _path: {type: String, default: ''},
  },
}
</script>

<style scoped>
.portfolio-item {
    padding: 15px;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 350px;
    flex: 0 1 350px;
}

.portfolio-item .portfolio-item-inner {
    position: relative;
}

.portfolio-item .portfolio-item-inner .portfolio-info {
    -webkit-transition: opacity 400ms;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
}

.portfolio-item .portfolio-item-inner .portfolio-info a{
    opacity: 0;
    transition: opacity 400ms;
}

.portfolio-item:hover .portfolio-info a{
    opacity: 1;
}

.portfolio-item .portfolio-item-inner .portfolio-info h3 {
    font-size: 16px;
    line-height: 1;
    margin: 0;
    color: #fff;
}

.portfolio-item .portfolio-item-inner .portfolio-info .preview {
    position: absolute;
    top: -18px;
    right: 12px;
    border-radius: 50%;
    background-image: -webkit-gradient(linear, left top, right top, from(#2caab3), to(#2c8cb3));
    background-image: linear-gradient(90deg, #2caab3 0%, #2c8cb3 100%);
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    box-shadow: 0 0 0 2px #fff;
    -webkit-box-shadow: 0 0 0 2px #fff;
}
</style>


