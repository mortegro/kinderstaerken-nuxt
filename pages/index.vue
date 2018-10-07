<template lang="pug">
  div
    Slider
    Cause
    Workshops
    Support
    Activities
    Contact
    Map
    //- Sample
</template>

<script>
import Sample from '~/components/Sample.vue'
import Slider from '~/components/onepage/slider.vue'
import Cause from '~/components/onepage/cause.vue';
import Workshops from '~/components/onepage/workshops.vue';
import Support from '~/components/onepage/support.vue';
import Activities from '~/components/onepage/activities.vue';
import Contact from '~/components/onepage/contact.vue';
import Map from '~/components/onepage/map.vue';


export default {
  components: {
    Cause,
    Workshops,
    Support,
    Activities,
    Slider,
    Contact,
    Map,
    Sample,
  }
  
}
</script>

<style>

</style>
