<template>
  <div>
    <!--<nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <router-link to="/" class="navbar-brand">One Student Body</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="user.loggedIn">
            <div class="nav-item">{{user.data.displayName}}</div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link">Register</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>-->
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"><b-icon-x-diamond></b-icon-x-diamond></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item ><router-link to="home" class="nav-link">Home</router-link></b-nav-item>
            <b-nav-item ><router-link to="about" class="nav-link">About</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">


            <b-nav-item href="#"><router-link to="login" class="nav-link">Login</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="register" class="nav-link">Register</router-link></b-nav-item>

            
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

<style>

</style>
