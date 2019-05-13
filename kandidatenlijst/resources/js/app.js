/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('Home', require('./views/Home.vue'));
Vue.component('Login', require('./views/Login.vue'));
Vue.component('Register', require('./views/Register.vue'));
Vue.component('Profile', require('./views/ShowProfile.vue'));
Vue.component('Profiles', require('./views/ShowProfiles.vue'));



const routes = [

  { path: '/', component: require('./views/Home.vue').default },
  { path: '/profiles', component: require('./views/ShowProfiles.vue').default },
  { path: '/login', component: require('./views/Login.vue').default },
  { path: '*', redirect: '/profiles' }
]

const router = new VueRouter({
  // mode: "history", When I turn this on my routes are not completly correct, somethign with laravel TODO
  routes
})

Vue.use(VueRouter)


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  router,
  el: '#app',
});
