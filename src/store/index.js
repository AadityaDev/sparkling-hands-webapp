import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import * as fb from '../../firebase'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {
      userProfile: {},
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  // mutations: {
  //   SET_LOGGED_IN (state, value) {
  //     state.user.loggedIn = value
  //   },
  //   SET_USER (state, data) {
  //     state.user.data = data
  //   }
  // },
  mutations: {
    setUserProfile (state, val) {
      state.userProfile = val
    }
  },
  // actions: {
  //   fetchUser ({ commit }, user) {
  //     commit('SET_LOGGED_IN', user !== null)
  //     if (user) {
  //       commit('SET_USER', {
  //         displayName: user.displayName,
  //         email: user.email
  //       })
  //     } else {
  //       commit('SET_USER', null)
  //     }
  //   }
  // }
  actions: {
    async login ({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async signup ({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title
      })

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile ({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())

      // change route to dashboard
      router.push('/dashboard')
    }
  }
})
