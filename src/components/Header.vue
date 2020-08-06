<template>
  <section class="header bg-gray-200 relative" @scroll="addHeader">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section class="banner flex items-center justify-center min-h-screen relative w-full z-10" :style="{'background-image': 'url(' + require('../assets/banner.jpg') + ')'}" style="background-size: auto 100%; height:562px">
      <!-- <label class="bg-black opacity-50 absolute h-full w-full top-0 left-0 z-10"></label> -->
      <div class="flex fixed font-extrabold font-robo items-center justify-between px-16 py-2 text-gray-100 top-0 w-full" :class="{ 'bg-blue-1000' : header == 'fix' }">
        <img src="../assets/logo.png" :class="header == 'fix' ? 'h-8' : 'h-12'">
        <div class="flex text-gold font-lob tracking-widest cursor-pointer" :class="header == 'fix' ? 'text-xs' : 'text-sm'">
          <p class="mx-2 border-b-2 border-gold">
            Home
          </p>
          <p class="mx-2 hover:border-b-2 border-gold">
            Our Process
          </p>
          <p class="mx-2 hover:border-b-2 border-gold">
            About Us
          </p>
          <p class="mx-2 hover:border-b-2 border-gold">
            Contact Us
          </p>
          <p class="mx-2 hover:border-b-2 border-gold">
            Admin
          </p>
        </div>
      </div>
      <div class="flex flex-col text-center ml-auto my-20 justify-center items-center font-pop glow text-gold w-2/3">
        <p class="text-xs my-2 font-semibold">
          Focused on Quality, Looks & Perfection in work.
        </p>
        <h2 class="text-xl font-bold">
          We have great expertise in making Kundan-Meena Jewelry, Our few of art are presented below.
        </h2>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      header: 'no fix'
    }
  },
  computed: {
  },
  methods: {
    addHeader (event) {
      if (window.scrollY > window.innerHeight - 100) {
        this.header = 'fix'
      } else {
        this.header = 'no-fix'
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.addHeader)
  },
  destroyed () {
    window.removeEventListener('scroll', this.addHeader)
  }
}
</script>
