<template>
  <section class="home bg-gray-200 relative" @scroll="addHeader">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section class="banner flex items-center justify-center min-h-screen relative w-full z-10" :style="{'background-image': 'url(' + require('../assets/banner.jpg') + ')'}" style="background-size: auto 100%; height:562px">
      <!-- <label class="bg-black opacity-50 absolute h-full w-full top-0 left-0 z-10"></label> -->
      <div class="flex font-extrabold font-robo items-center justify-between px-16 py-2 text-gray-100 top-0 w-full" :class=" header == 'fix' ? 'bg-blue-1000 fixed' : 'absolute' ">
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
    <section class="flex items-center justify-center">
      <p class="text-xl text-blue-1000 font-fredoka"> Popular Categories : </p>
      <div v-for="(category, index) in categories" :key="index" class="p-2 my-4 mx-6 border border-golden text-gold bg-blue-1000 shadow-lg rounded-lg tracking-widest font-lob" :class="{'text-sm text-gray-300' : index !== 0}">
        <div class="overflow-hidden" style="height:100px">
          <img :src="category.url" :style="{width : index == 0 ? '170px' : '130px'}">
        </div>
        <p class="text-center pt-2">{{ category.name }}</p>
      </div>
    </section>
    <section class="bg-white">
      <div class="mx-24 py-12 flex items-center">
        <img class="w-1/2 mr-8" :src="url">
        <div class="ml-8">
          <h2 class="text-4xl text-center font-serif text-gold font-bold">KUNDAN MEENA</h2>
          <p class="py-3 text-sm text-gray-800 text-justify font-serif"> The traditional and elegant Kundan Meena Jewellery is our forte at Shree G. K. Chudiwalas. It is one of the oldest forms of jewellery making, crafted with an unadulterated precision and skills that have been carried over for centuries. A true heritage of the blend between Mughal and Rajasthani cultures, Kundan Meena jewellery symbolizes ethereal beauty, elegance and an unparalleled craftsmanship. </p>
          <div class="border border-gray-700 px-4 py-2 mx-auto text-gray-700 w-32 font-bold text-center font-mono">Discover</div>
        </div>
      </div>
    </section>
    <section>
      <div class="py-16 px-8 flex font-pop text-center bg-blue-1000" style="background: #051620;">
        <div class="flex items-center justify-center w-1/5">
          <img src="../assets/km2.png">
        </div>
        <div class="w-4/5 px-8 text-gold ">
          <h2 class="text-3xl mb-6 font-bold">
            Kundan Meena Jadau Jewelry
          </h2>
          <p class="text-xs text-justify">
            {{ dataSet }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="py-2 px-16 flex items-center border-t border-gray-400 bg-white">
        <p class="text-xs mx-auto text-gray-700 font-medium font-robo">&copy; Copyright 2020, Sparkling Hands. All Rights Reserved</p>
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { mixin as clickaway } from 'vue-clickaway'
import allData from '../data.json'

export default {
  name: 'Home',
  // mixins: [clickaway],
  data () {
    return {
      header: 'no fix',
      categories: [{
        name: 'Kundan Meena',
        url: 'img/icons/no-free/29.png'
      }, {
        name: '22kt Jewellery',
        url: 'img/icons/13.jpg'
      }, {
        name: 'Stones/Diamonds',
        url: 'img/icons/stones.jpg'
      }, {
        name: 'Fusion Jewellery',
        url: 'img/icons/no-free/28.png'
      }, {
        name: 'Siver Jewellery',
        url: 'img/icons/no-free/26.png'
      }],
      url: 'img/icons/no-free/29.png'
    }
  },
  // components: {
  //   HelloWorld
  // }
  computed: {
    dataSet () {
      const story = allData.allData.kundanMeena
      console.log(allData.allData.kundanMeena)
      return story
    }
  },
  methods: {
    // away: function () {
    //   this.expandImage = false
    // },
    // expandFunc (card, index) {
    //   this.expandImage = true
    //   this.selectedIndex = index
    //   this.expandKey = { ...card }
    //   console.log(this.expandKey, this.selectedIndex)
    // },

    // hasNext () {
    //   return this.selectedIndex + 1 < this.cards.length
    // },
    // hasPrev () {
    //   return this.selectedIndex - 1 >= 0
    // },
    // prev () {
    //   if (this.hasPrev()) {
    //     this.selectedIndex -= 1
    //   }
    // },
    // next () {
    //   if (this.hasNext()) {
    //     this.selectedIndex += 1
    //   }
    // },
    // onKeydown (e) {
    //   if (this.expandImage) {
    //     switch (e.key) {
    //       case 'ArrowRight':
    //         this.next()
    //         break
    //       case 'ArrowLeft':
    //         this.prev()
    //         break
    //       case 'ArrowDown':
    //       case 'ArrowUp':
    //       case ' ':
    //         e.preventDefault()
    //         break
    //       case 'Escape':
    //         this.away()
    //         break
    //     }
    //   }
    // },
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
    // window.removeEventListener('keydown', this.onKeydown)
    window.removeEventListener('scroll', this.addHeader)
  },
  mounted () {
    window.addEventListener('keydown', this.onKeydown)
  }
}
</script>
<style scoped>
.glow {
    /* text-shadow: 2px 2px 5px #ffd801; */
}

</style>
