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
            Shop
          </p>
          <p class="mx-2 hover:border-b-2 border-gold">
            Contact Us
          </p>
          <p class="mx-2 hover:border-b-2 border-gold">
            Categories
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
    <section class="flex flex-col items-center justify-center">
      <p class="text-xl text-blue-1000 font-fredoka mt-4"> Popular Jewellery Types </p>
      <div class="flex items-center justify-center">
        <div @click="selectCategory(category, index)" v-for="(category, index) in categories" :key="index" class="p-2 my-4 mx-6 border border-golden text-gold bg-blue-1000 cursor-pointer shadow-lg rounded-lg tracking-widest font-lob" :class="{'text-sm text-gray-300' : selected !== index}">
          <div class="overflow-hidden" :style="{height : selected == index ? '125px' : '100px'}">
            <img :src="category.url" :style="{width : selected == index ? '170px' : '130px'}">
          </div>
          <p class="text-center pt-2">{{ category.name }}</p>
        </div>
      </div>
    </section>
    <section class="bg-white py-12">
      <transition name="fade">
        <div class="mx-24 flex items-center" :key="selectedObj.name">
          <img class="w-1/2 mr-8" :src="selectedObj.url">
          <div class="ml-8">
            <h2 class="text-4xl text-center font-serif text-gold font-bold">{{selectedObj.name}}</h2>
            <p class="my-3 text-sm text-gray-800 text-justify font-serif"> The traditional and elegant Kundan Meena Jewellery is our forte at Shree G. K. Chudiwalas. It is one of the oldest forms of jewellery making, crafted with an unadulterated precision and skills that have been carried over for centuries. A true heritage of the blend between Mughal and Rajasthani cultures, Kundan Meena jewellery symbolizes ethereal beauty, elegance and an unparalleled craftsmanship. </p>
            <router-link to="/categories" class="border border-gray-700 px-4 py-2 mx-auto text-gray-700 w-32 block font-bold text-center font-mono">See All</router-link>
          </div>
        </div>
      </transition>
    </section>
    <section>
      <div class="py-16 px-8 flex font-pop text-center bg-blue-1000" style="background: #051620;">
        <div class="flex items-center justify-center w-1/5">
          <img src="../assets/km2.png">
        </div>
        <div class="w-4/5 px-8 text-gold">
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
      show: false,
      header: 'no fix',
      selected: 0,
      selectedObj: null,
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
        name: 'Silver Jewellery',
        url: 'img/icons/no-free/silver.jpg'
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
    selectCategory (category, index) {
      console.log('hello')
      if (this.selectedObj == null) {
        this.selectedObj = this.categories[0]
      } else {
        this.selectedObj = { ...category }
        this.selected = index
      }
    },
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
    this.selectCategory()
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
    letter-spacing: normal;
}
/* .fade-leave-active {
  transition: opacity 5s linear;
} */
.fade-enter-active {
  transition: opacity .5s linear;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* .fade-leave-active {
   transition-duration: 2.9s;
   transition-timing-function: linear;
} */

/* .fade-enter-active {
   transition-duration: 1s;
   transition-timing-function: linear;
}
.fade-enter-to, .fade-leave {
   max-height: 800px;
   overflow: hidden;
}

.fade-enter, .fade-leave-to {
   overflow: hidden;
   max-height: 0;
} */
</style>
