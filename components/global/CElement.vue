<template lang="pug">
div.content-element
  div(v-if="title" :class="[titleClass]")  {{heading}}
  div(:class="[contentClass]") {{body}}
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
    titleClass: {
      type: String,
      default: "content-title"
    },
    elementId: {
      type: String,
      required: true
    }
  },
  data() {
    let element = require('~/content/atoms/' + this.elementId + '.json');
    if (!element || !element.body) 
      element={body:"Not found"} 
    return element;
  }
}
</script>