// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import router from './router'
import toastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

import {db} from './firebase'

Vue.use(toastr)
Vue.use(VueFire)

// // Initialize Firebase
// let config = {
//   apiKey: 'AIzaSyDS_416A-DNK8J0pb1bxUBgGU7D-kuK9wc',
//   authDomain: 'rosidi-99cbf.firebaseapp.com',
//   databaseURL: 'https://rosidi-99cbf.firebaseio.com',
//   projectId: 'rosidi-99cbf',
//   storageBucket: 'rosidi-99cbf.appspot.com',
//   messagingSenderId: '1009264203957'
// }

// const appDb = firebase.initializeApp(config);

// const db = appDb.database();
// const dbRef = db.ref('rosidi');

Vue.config.productionTip = false;

let app;
/* eslint-disable no-new */
db.auth().onAuthStateChanged((user) => {
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
