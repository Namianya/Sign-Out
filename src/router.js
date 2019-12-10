import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Requests from './views/Requests.vue'
import SignOut from "./views/SignOut.vue"


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // }
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/requests',
      name: 'requests',
      component: Requests
    },
    {
      path: '/signout',
      name: 'signout',
      component: SignOut
    }
  ]
})
