<template lang="pug">
  Section#support
    .container
      .section-header
        Title Unterstützen
        Atom(id="unterstuetzer")
      .row
        .col-sm-6
          .blog-post.blog-large.wow.fadeInLeft(data-wow-duration='300ms', data-wow-delay='0ms')
            article
              header.entry-header
                //- .entry-thumbnail
                //-   img.img-responsive(src='images/blog/01.jpg', alt='')
                //-   span.post-format.post-format-video
                //-     i.fa.fa-film
                h2.entry-title Spender
              .entry-content
                Atom(id="spenden")
                .media.service-box.wow.fadeInRight
                  .pull-left
                    i.fa.fa-hand-holding-heart
                  .media-body
                    h4.media-heading Finanzielle Unterstützung
                    Atom(id="konto")
                .media.service-box.wow.fadeInRight
                  .pull-left
                    i.fa.fa-clipboard-list
                  .media-body
                    h4.media-heading Amazon Wishlist
                    Atom(id="wishlist")
                .media.service-box.wow.fadeInRight
                  .pull-left
                    i.fa.fa-shopping-cart
                  .media-body
                    h4.media-heading Amazon Partnerprogramm
                    Atom(id="partnerprogramm")
        .col-sm-6
          .blog-post.blog-media.wow.fadeInRight(data-wow-duration='300ms', data-wow-delay='100ms')
            article.media.clearfix
              .entry-thumbnail.pull-left
                img.img-responsive(src='images/uploads/workshoppate.jpg', alt='')
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
                img.img-responsive(src='images/uploads/give.jpg', alt='giving hands')
                span.post-format.post-format-audio
                  i.fa.fa-parachute-box
              .media-body
                header.entry-header
                  h2.entry-title Workshop-Pate
                .entry-content
                  Atom(id="projektpate")
</template>

<style scoped>
.blog-post.blog-media .entry-thumbnail {
    margin: -15px 15px -15px -15px;
    position: relative;
}

.blog-post.blog-media .post-format {
    position: absolute;
    top: 20px;
    right: -10px;
}
.blog-post.blog-media {
    margin-bottom: 30px;
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

h2 {
  margin-top: 0px;
}
</style>
