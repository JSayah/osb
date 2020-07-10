<template>
  <div id='navheader'>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"><b-icon-x-diamond></b-icon-x-diamond></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item v-on:click="$emit('home')">Home</b-nav-item>
            <b-nav-item v-on:click="$emit('about')">About Me</b-nav-item>
            <b-nav-item v-on:click="$emit('pricing')">Pricing</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">


            <b-nav-item href="#">Login</b-nav-item>


            
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

</script>

<style>
  #navheader{
    font-family: 'Oswald', sans-serif;
  }
</style>