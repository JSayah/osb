import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './main.scss'
import * as firebase from "firebase"
import Router from 'vue-router'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home.vue'
import Courses from './components/Courses.vue'
import store from './store.js'
import Profile from './components/Profile.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Card from './components/Cards/Card.vue'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component(Card)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        beforeEnter: (to, from, next) => {
          if(store.state.user.loggedIn == false) {
              next(false);
          } else {
              next();
          }
      }
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses,
      beforeEnter: (to, from, next) => {
        if(store.state.user.loggedIn == false) {
            next('/');
        } else {
            next();
        }
    }
    },
    {
        path: '*',
        redirect: '/login'
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        beforeEnter: (to, from, next) => {
          if(store.state.user.loggedIn == false) {
              next(false);
          } else {
              next();
          }
      }
    }
]
})

export default router 

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDCky8f_y6DFpLOcx5sqB3eNnOoicvBzWo",
  authDomain: "osbtest2020.firebaseapp.com",
  databaseURL: "https://osbtest2020.firebaseio.com",
  projectId: "osbtest2020",
  storageBucket: "osbtest2020.appspot.com",
  messagingSenderId: "926112819860",
  appId: "1:926112819860:web:8e168ab9d479d2a5fe6281",
  measurementId: "G-WEXCJF5QZE"
}

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
