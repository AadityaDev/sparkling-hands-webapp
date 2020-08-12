<template>
  <section class="auth-page bg-white h-screen">
    <div class="flex flex-wrap h-screen justify-center items-center">
      <form class="p-6 w-1/2 lg:w-1/3" method="post" name="validation" role="form" @submit.prevent="login(user)">
        <div class="mb-8 text-center">
          <img src="../assets/logo.png" class="mx-auto" width="320" alt="Genpact Logo">
        </div>

        <div class="my-5 relative">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-sm uppercase" for="ohrid">
            OHR Id
          </label>
          <input
            id="ohrid"
            v-model="user.username"
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
            v-model="user.password"
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
        >
          Sign In
          <!-- <ring-loader /> -->
        </button>
      </form>
    </div>
  </section>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    // ...mapGetters(['request'])
  },
  methods: {
    // ...mapActions(['login'])
  }
}
</script>
