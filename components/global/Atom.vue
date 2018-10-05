<template lang="pug">
div.content-element
  div(v-if="title" :class="[titleClass]")  {{heading}}
  vue-markdown(:class="[contentClass]") {{body}}
</template>

<script>
import VueMarkdown from 'vue-markdown'
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
    id: {
      type: String,
      required: true
    }
  },
  components: {
    VueMarkdown
  },
  data() {
    if (!this.id) return {body:"Not found"}
    let element = require('~/content/atoms/' + this.id + '.json');
    if (!element || !element.body) 
      element={body:"Not found"} 
    return element;
  }
}
</script>