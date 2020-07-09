<template>
  <div id='bgimage'>
    <div id='navheader'>
      <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="#"><b-icon-x-diamond></b-icon-x-diamond></b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
              <b-nav-item v-on:click="component = 'home-app'">Home</b-nav-item>
              <b-nav-item v-on:click="component = 'about-app'">About Me</b-nav-item>
              <b-nav-item v-on:click="component = 'pricing-app'">Pricing</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">


              <b-nav-item href="#">Login</b-nav-item>


              
          </b-navbar-nav>
          </b-collapse>
      </b-navbar>
    </div>
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
