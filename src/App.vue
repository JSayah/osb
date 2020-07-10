<template>
  <div>
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

          <template v-if="user.loggedIn">
            <b-nav-item href="#">{{user.data.displayName}}</b-nav-item>
            <b-nav-item @click.prevent="signOut">Logout</b-nav-item>
          </template>
          <template v-else>
            <b-nav-item href="#"><router-link to="login" class="nav-link">Login</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="register" class="nav-link">Register</router-link></b-nav-item>
          </template>  
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
  #userName{
    
  }
</style>
