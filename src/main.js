// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import toastr from '@deveodk/vue-toastr'

Vue.use(toastr)

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyDS_416A-DNK8J0pb1bxUBgGU7D-kuK9wc',
  authDomain: 'rosidi-99cbf.firebaseapp.com',
  databaseURL: 'https://rosidi-99cbf.firebaseio.com',
  projectId: 'rosidi-99cbf',
  storageBucket: 'rosidi-99cbf.appspot.com',
  messagingSenderId: '1009264203957'
}

firebase.initializeApp(config)

Vue.config.productionTip = false

let app;
/* eslint-disable no-new */
firebase.auth().onAuthStateChanged( (user) => {
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
