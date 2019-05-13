import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: require('./views/Home.vue') },
    { path: '/profiles', component: require('./views/ShowProfiles.vue') },
    { path: '/login', component: require('./views/Login.vue') },
    { path: '*', redirect: '/profiles' }
  ]
})

//const routes = [

  //   { path: '/', component: require('./views/Home.vue').default },
  //   { path: '/profiles', component: require('./views/ShowProfiles.vue').default },
  //   { path: '/login', component: require('./views/Login.vue').default },
  //   { path: '*', redirect: '/profiles' }
  // ]

  // const router = new VueRouter({
  //   // mode: "history", When I turn this on my routes are not completly correct, somethign with laravel TODO
  //   routes
  // })

  // Vue.use(VueRouter)