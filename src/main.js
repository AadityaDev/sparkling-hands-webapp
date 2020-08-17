import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/styles/tailwind.css'
import '@/styles/main.css'
import * as firebase from 'firebase'

Vue.config.productionTip = false

const configOptions = {
  apiKey: 'AIzaSyCW1BH472cxtMObvpoK7dp7iyOVToVrneU',
  authDomain: 'sparkling-gold.firebaseapp.com',
  databaseURL: 'https://sparkling-gold.firebaseio.com',
  projectId: 'sparkling-gold',
  storageBucket: 'sparkling-gold.appspot.com',
  messagingSenderId: '917942681658',
  appId: '1:917942681658:web:089898262f432af2dc7503',
  measurementId: 'G-22S558590X'
}

firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
