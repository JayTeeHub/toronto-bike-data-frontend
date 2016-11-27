// src/main.js

require('src/assets/css/material.min.css')
require('src/assets/css/style.css')

import VueMdl from 'vue-mdl'
import Vue from 'vue'
import App from './App.vue'
import Map from './components/Map.vue'
import Data from './components/Data.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueMdl)

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/data', component: Data },
  { path: '/map', component: Map },
  { path: '/', component: App },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
