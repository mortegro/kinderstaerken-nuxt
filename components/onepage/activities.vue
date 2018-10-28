<template lang="pug">
Section#activities
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
import Activity from './activity'
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
    const sortFn = function (a,b) {
      if (a && a.date && b && b.date) {
        if (new Date(a.date) < new Date(b.date)) return -1; else return 1
      }
      return 0
    }
    const sorted = activities.sort(sortFn)
    // console.log(sorted)
    return { activities: sorted };
  }
}
</script>




<style scoped>
Section{
    background: #f5f5f5;
    padding: 80px 0;
    margin-top: 0px;
}
.portfolio-filter {
    list-style: none;
    padding: 0;
    margin: 0 0 50px;
    display: inline-block;
}

.portfolio-filter>li {
    float: left;
    display: block;
}

.portfolio-filter>li a {
    display: block;
    padding: 7px 15px;
    background: #e5e5e5;
    color: #64686d;
    position: relative;
}

.portfolio-filter>li a:hover,
.portfolio-filter>li a.active {
    background: #45aed6;
    color: #fff;
    box-shadow: 0 -3px 0 0 #318daf inset;
    -webkit-box-shadow: 0 -3px 0 0 #318daf inset;
}

.portfolio-filter>li a.active:after {
    content: " ";
    position: absolute;
    bottom: -17px;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #318daf transparent transparent transparent;
}

.portfolio-filter>li:first-child a {
    border-radius: 4px 0 0 4px;
}

.portfolio-filter>li:last-child a {
    border-radius: 0 4px 4px 0;
}

</style>
