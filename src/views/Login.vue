/* eslint-disable no-unused-vars */
<template>
  <section class="auth-page bg-white h-screen">
    <div class="flex flex-wrap h-screen justify-center items-center">
      <form v-if="showLoginForm" @submit.prevent class="p-6 w-1/2 lg:w-1/3" method="post" name="validation" role="form">
        <div class="mb-8 text-center">
          <img src="../assets/logo.png" class="mx-auto" width="320" alt="Genpact Logo">
        </div>
        <h1 @click="fb()" class="text-2xl font-bold text-gray-700 text-center">
          Facebookk Login
        </h1>
        <div class="my-5 relative">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-sm uppercase" for="ohrid">
            Email Id
          </label>
          <input
            id="ohrid"
            v-model.trim="loginForm.email"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="tel"
            placeholder="Ex: 30000000"
          >
          <!-- <button
            v-if="$store.state.device.biometricAvailable"
            class="absolute fa-fingerprint fas p-2 bottom-0 right-0 px-3 text text-gray-600 text-xl"
            @click.prevent="biometricLogin"
          /> -->
        </div>

        <div class="my-5">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-sm uppercase" for="password">
            Password
          </label>
          <input
            id="password"
            v-model.trim="loginForm.password"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="password"
            placeholder="********"
          >
          <!-- <p class="text-red text-xs italic">Please choose a password.</p> -->
        </div>

        <button
          class="bg-gold button font-bold hover:bg-golden leading-normal letter-spacing-1 mb-12 mt-2 py-3 rounded text-white uppercase w-full"
          @click="login()"
        >
          Sign In
          <!-- <ring-loader /> -->
        </button>
        <div class="w-full text-center text-gray-800 text-sm cursor-pointer">
          <a @click="toggleForm()">Create an Account</a>
        </div>
        <div v-if="error" class="text-sm font-red-500 font-robo text-center">{{error}}</div>
      </form>
      <form class="p-6 w-1/2 lg:w-1/3" v-else @submit.prevent>
        <div class="mb-8 text-center">
          <img src="../assets/logo.png" class="mx-auto" width="320" alt="Genpact Logo">
        </div>
        <div class="my-5 relative">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-sm uppercase">
            Name
          </label>
          <input
            id="email"
            v-model.trim="signupForm.email"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="text"
            placeholder="Ex: Rahul.."
          >
          <!-- <button
            v-if="$store.state.device.biometricAvailable"
            class="absolute fa-fingerprint fas p-2 bottom-0 right-0 px-3 text text-gray-600 text-xl"
            @click.prevent="biometricLogin"
          /> -->
        </div>

        <div class="my-5">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-sm uppercase" for="password">
            Title
          </label>
          <input
            id="title"
            v-model.trim="signupForm.title"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="text"
            placeholder=" Ex: title.."
          >
        </div>
        <div class="my-5 relative">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-sm uppercase" for="ohrid">
            Email Id
          </label>
          <input
            id="email"
            v-model.trim="signupForm.email"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="email"
            placeholder="email@mail.com"
          >
          <!-- <button
            v-if="$store.state.device.biometricAvailable"
            class="absolute fa-fingerprint fas p-2 bottom-0 right-0 px-3 text text-gray-600 text-xl"
            @click.prevent="biometricLogin"
          /> -->
        </div>

        <div class="my-5">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-sm uppercase" for="password">
            Password
          </label>
          <input
            id="password"
            v-model.trim="signupForm.password"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="password"
            placeholder="********"
          >
          <!-- <p class="text-red text-xs italic">Please choose a password.</p> -->
        </div>

        <button
          class="bg-gold button font-bold hover:bg-golden leading-normal letter-spacing-1 mb-12 mt-2 py-3 rounded text-white uppercase w-full"
          @click="signup()"
        >
          Sign Up
          <!-- <ring-loader /> -->
        </button>
        <div class="w-full text-center text-gray-800 text-sm cursor-pointer">
          <a @click="toggleForm()">Back to login</a>
        </div>
      </form>
    </div>
  </section>
    <!-- <div id="login">
      <section>
        <div class="col1">
          <h1>Vuegram</h1>
          <p>Welcome to the <a href="https://savvyapps.com/" target="_blank">Savvy Apps</a> sample social media web app powered by Vue.js and Firebase.
            Build this project by checking out The Definitive Guide to Getting Started with Vue.js</p>
        </div>
        <div :class="{ 'signup-form': !showLoginForm }" class="col2">
          <form v-if="showLoginForm" @submit.prevent>
            <h1>Welcome Back</h1>
            <div>
              <label for="email1">Email</label>
              <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" />
            </div>
            <div>
              <label for="password1">Password</label>
              <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />
            </div>
            <button @click="login()" class="button">Log In</button>
            <div class="extras">
              <a>Forgot Password</a>
              <a @click="toggleForm()">Create an Account</a>
            </div>
          </form>
          <form v-else @submit.prevent>
            <h1>Get Started</h1>
            <div>
              <label for="name">Name</label>
              <input v-model.trim="signupForm.name" type="text" placeholder="Savvy Apps" id="name" />
            </div>
            <div>
              <label for="title">Title</label>
              <input v-model.trim="signupForm.title" type="text" placeholder="Company" id="title" />
            </div>
            <div>
              <label for="email2">Email</label>
              <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />
            </div>
            <div>
              <label for="password2">Password</label>
              <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2" />
            </div>
            <button @click="signup()" class="button">Sign Up</button>
            <div class="extras">
              <a @click="toggleForm()">Back to Log In</a>
            </div>
          </form>
        </div>
      </section>
    </div> -->
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'LoginPage',
  data () {
    return {
      // add property to data()
      showLoginForm: true,
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    // add toggle form method
    fb () {
      const provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // eslint-disable-next-line no-unused-vars
        var token = result.credential.accessToken
        // The signed-in user info.
        // eslint-disable-next-line no-unused-vars
        var user = result.user
        // ...
      }).catch(function (error) {
        // Handle Errors here.
        // eslint-disable-next-line no-unused-vars
        var errorCode = error.code
        // eslint-disable-next-line no-unused-vars
        var errorMessage = error.message
        // The email of the user's account used.
        // eslint-disable-next-line no-unused-vars
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        // eslint-disable-next-line no-unused-vars
        var credential = error.credential
        // ...
      })
    },
    toggleForm () {
      this.showLoginForm = !this.showLoginForm
    },
    // submit () {
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(this.form.email, this.form.password)
    //     .then(data => {
    //       this.$router.replace({ name: 'Dashboard' })
    //     })
    //     .catch(err => {
    //       this.error = err.message
    //     })
    // }
    login () {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup () {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title
      })
    }
  }
}
</script>
