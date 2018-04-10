import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SingUp from '@/components/Sing-up'

Vue.use(Router)
  let router = new Router({
   routes: [
      {
        path: '*',
        redirect: '/login'
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/sing-up',
        name: 'Sing-up',
        component: SingUp
      },
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
          reqiuresAuth: true
        }
      }
    ]
  })


router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.reqiuresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('HelloWorld')
  else next()
})

export default router;