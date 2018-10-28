<template lang="pug">
  Section#support
    .container
      .section-header
        Title Unterstützen
        Atom(id="unterstuetzer")
      .row
        .col-lg-6.col-sm-12
          .blog-post.blog-large.wow.fadeInLeft(data-wow-duration='300ms', data-wow-delay='0ms')
            article
              header.entry-header
                h2.entry-title Spender
              .entry-content
                Atom(id="spenden")
                .media.service-box.wow.fadeInRight(data-toggle="modal",data-target="#spendenmodal")
                  .pull-left
                    i.fa.fa-hand-holding-heart
                  .media-body
                    Atom(id="konto", heading="Finanzielle Unterstützung")
                .media.service-box.wow.fadeInRight(@click="wishlist")
                  .pull-left
                    i.fa.fa-clipboard-list
                  .media-body
                    Atom(id="wishlist", heading="Amazon Wishlist")
                .media.service-box.wow.fadeInRight(@click="amazon")
                  .pull-left
                    i.fa.fa-shopping-cart
                  .media-body
                    Atom(id="partnerprogramm", heading="Amazon Partnerprogramm")
        .col-lg-6.col-sm-12
          .blog-post.blog-media.wow.fadeInRight(data-wow-duration='300ms', data-wow-delay='100ms')
            article.media.clearfix
              .entry-thumbnail.pull-left
                img.w-100(src='images/uploads/workshoppate.jpg', alt='')
                span.post-format.post-format-gallery
                  i.fa.fa-users
              .media-body
                header.entry-header
                  h2.entry-title An-Stifter
                .entry-content
                  Atom(id="anstifter")
          .blog-post.blog-media.wow.fadeInRight(data-wow-duration='300ms', data-wow-delay='200ms')
            article.media.clearfix
              .entry-thumbnail.pull-left
                img.w-100(src='images/uploads/give.jpg', alt='giving hands')
                span.post-format.post-format-audio
                  i.fa.fa-parachute-box
              .media-body
                header.entry-header
                  h2.entry-title Workshop-Pate
                .entry-content
                  Atom(id="projektpate")
    #spendenmodal.modal.fade(tabindex="-1",role="dialog", ref="spendenmodal")
      .modal-dialog(role='document')
        .modal-content
          .modal-header
            h2.modal-title Spendenkonto
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            p Für eine finanzielle Unterstützung unserer Projekte sind wir Ihnen sehr dankbar. 
            p 
              strong Bankverbindung:
              br
              | Skatbank Altenburg
              br
              | IBAN: DE51 8306 5408 0004 8459 27
              br
              | BIC: GENO DEF1 SLR
          .modal-footer
            button.btn.btn-secondary(type='button', data-dismiss='modal') Schließen
</template>

<script>
export default {
  methods: {
    wishlist() {
      window.open('http://www.amazon.de/registry/wishlist/26ALMABVEFYJT')
    },
    amazon() {
      window.open('http://www.kinderstaerken.org/amazon')
    }
  }
}
</script>



<style scoped>
.blog-post {
    border: 1px solid #eee;
    padding: 15px;
}

.blog-post .post-format {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 34px;
    text-align: center;
    color: #fff;
    background: #222534;
    border: 3px solid #fff;
    border-radius: 100px;
}

/* Blog large */
.blog-post.blog-large .entry-thumbnail {
    margin: -15px -15px 15px;
    position: relative;
}

.blog-post.blog-large .post-format {
    width: 66px;
    height: 66px;
    line-height: 60px;
    position: absolute;
    right: 20px;
    bottom: -33px;
}

.blog-post.blog-large .post-format>i {
    font-size: 20px;
}

.blog-post.blog-large .entry-date {
    font-size: 12px;
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: #45aed6;
}

.blog-post.blog-large .entry-title {
    margin-top: 0;
    font-size: 18px;
    line-height: 1;
    margin-bottom: 15px;
}

.blog-post.blog-large .entry-title a {
    color: #64686d;
}

.blog-post.blog-large .entry-title a:hover {
    color: #45aed6;
}

/* Blog media */
.blog-post.blog-media {
    margin-bottom: 30px;
}

.blog-post.blog-media .entry-thumbnail {
    margin: -15px 15px -15px -15px;
    position: relative;
}

.blog-post.blog-media .post-format {
    position: absolute;
    top: 20px;
    right: -10px;
}

.blog-post.blog-media .entry-date {
    font-size: 12px;
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: #45aed6;
}

.blog-post.blog-media .entry-title {
    margin-top: 0;
    font-size: 18px;
    line-height: 1;
    margin-bottom: 15px;
}

.blog-post.blog-media .entry-title a {
    color: #64686d;
}

.blog-post.blog-media .entry-title a:hover {
    color: #45aed6;
}

/* Entry meta */
.blog-post .entry-meta {
    margin-top: 20px;
    border-top: 1px solid #eee;
    padding-top: 15px;
}

.blog-post .entry-meta>span {
    display: inline-block;
    margin-right: 10px;
    color: #999;
}

.blog-post .entry-meta>span>a {
    color: #999;
}

.blog-post .entry-meta>span>a:hover {
    color: #45aed6;
}

h2 {
  margin-top: 0px;
}

@media only screen and (min-width: 992px) and (max-width: 1200px){
  .blog-post.blog-media .entry-thumbnail{
      width: 50%;
  }
}

</style>
