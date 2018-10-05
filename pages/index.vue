<template lang="pug">
  div
    Activities
    Slider
    Cause
    Workshops
    Support
    //- Sample
</template>

<script>
import Sample from '~/components/Sample.vue'
import Slider from '~/components/onepage/slider.vue'
import Cause from '~/components/onepage/cause.vue';
import Workshops from '~/components/onepage/workshops.vue';
import Support from '~/components/onepage/support.vue';
import Activities from '~/components/onepage/activities.vue';


export default {
  components: {
    Cause,
    Workshops,
    Support,
    Activities,
    Sample,
    Slider
  }
  
}
</script>

<style>

</style>
