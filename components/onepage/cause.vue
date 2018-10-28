<template lang="pug">
  Section#cause
    .container
      .section-header
        Title Unser Anliegen
        Atom.wow.fadeInDown(id='anliegen')
        .row
          .col-md-6.wow.fadeInLeft
            ColumnTitle Seelische Erkrankungen
            Atom(id='erkrankungen')
          .col-md-6.wow.fadeInRight
            ColumnTitle Therapie
            Atom(id='therapie')
        .row
          .col-sm-12.wow.fadeInDown
            ColumnTitle Inspiration
            Atom(id='inspiration')
</template>

<script>
</script>

<style scpoed>
#cause {
  margin-top: 80px;
}
</style>
