<template lang="pug">
  div(data-spy="scroll", data-target="#topnav", data-offset="0")
    Slider
    Cause
    Workshops
    Support
    Activities
    Contact
    Map
</template>

<script>
import Slider from '~/components/onepage/slider.vue'
import Cause from '~/components/onepage/cause.vue';
import Workshops from '~/components/onepage/workshops.vue';
import Support from '~/components/onepage/support.vue';
import Activities from '~/components/onepage/activities.vue';
import Contact from '~/components/onepage/contact.vue';


export default {
  components: {
    Cause,
    Workshops,
    Support,
    Activities,
    Slider,
    Contact,
  }
}
</script>

<style>

</style>
