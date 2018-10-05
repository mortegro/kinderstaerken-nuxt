<template lang="pug">
  Section#workshops
    .container
      .section-header
        Title Workshops
        Atom(id="workshops")
      .features
        .col-md-4.col-sm-6.wow.fadeInUp(data-wow-duration='300ms', data-wow-delay='0ms')
          .media.service-box
            .pull-left
              i.fa.fa-bicycle
            .media-body
              Atom(id="sport" titleClass="h4 media-heading")
        .col-md-4.col-sm-6.wow.fadeInUp(data-wow-duration='300ms', data-wow-delay='100ms')
          .media.service-box
            .pull-left
              i.fa.fa-paint-brush
            .media-body
              Atom(id="gestalten" titleClass="h4 media-heading")

        .col-md-4.col-sm-6.wow.fadeInUp(data-wow-duration='300ms', data-wow-delay='200ms')
          .media.service-box
            .pull-left
              i.fa.fa-cubes
            .media-body
              Atom(id="erschaffen" titleClass="h4 media-heading")
</template>

<script>
</script>

<style>
</style>
