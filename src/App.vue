<template>
  <div id='bgimage'>
    <navbar 
    v-on:home="component = 'home-app'" v-on:about="component = 'about-app'" v-on:pricing="component = 'pricing-app'"></navbar>
    <component v-bind:is='component'></component>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Pricing from './components/Pricing.vue'

export default {
  name: 'App',
  components: {
    'home-app': Home,
    'navbar': Header,
    'about-app': About,
    'pricing-app': Pricing
  },
  data(){
    return{
    component: 'home-app'
    }
  }
}

</script>

<style>

</style>
