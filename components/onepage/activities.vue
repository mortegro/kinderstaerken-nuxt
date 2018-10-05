<template lang="pug">
Section#portfolio
  .container
    .section-header
      h2.section-title.text-center.wow.fadeInDown Unsere Aktivitäten
      Atom.text-center.wow.fadeInDown(id="aktivitaeten")
    .text-center
      ul.portfolio-filter
        li
          a.active(href='#', data-filter='*') Alle
        li
          a(href='#', data-filter='.move') Move
        li
          a(href='#', data-filter='.design') Design
        li
          a(href='#', data-filter='.build') Build
    .portfolio-items
      Activity(v-for="(activity, id) in activities", v-bind="activity", :key="id")
</template>

<script>
import Activity from '~/components/Activity'
export default {
  components:{
    Activity
  },
  data() {
    const context = require.context('~/content/activities/', false, /\.json$/);
    const activities = context.keys().map(key => ({
      ...context(key),
      _path: `/activities/${key.replace('.json', '').replace('./', '')}`
    }));
    return { activities };
  }
}
</script>




<style scoped>
Section{
    background: #f5f5f5;
}
</style>
