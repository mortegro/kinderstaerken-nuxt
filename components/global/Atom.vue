<template lang="pug">
div.content-element
  div(v-if="title" :class="[headingClass]")  {{heading}}
  div(:class="[contentClass]",v-html="$md.render(body)")
</template>

<script>
export default {
  props: {
    contentClass: {
      type: String,
      default: "content-content"
    },
    heading: {
      type: String
    },
    headingClass: {
      type: String,
      default: "content-title"
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    if (!this.id) return {body:"Not found"}
    let element = require('~/content/atoms/' + this.id + '.json');
    if (!element || !element.body) 
      element={body:"Not found"} 
    return element;
  },
}
</script>