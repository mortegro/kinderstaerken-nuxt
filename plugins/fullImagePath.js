import Vue from 'vue'

Vue.filter('fullImagePath', val => {
    return `/images/uploads/${val}`
})