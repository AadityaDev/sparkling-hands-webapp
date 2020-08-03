<template>
  <section class="home bg-gray-200 relative" @scroll="addHeader">
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
    <div v-if="product" class="flex items-center text-base py-3 justify-center font-semibold text-gray-800 font-pop cursor-pointer">
      <p @click="filter = 'All'" class="mx-2" :class="{'border-b-2 text-lg border-gray-800': filter == 'All'}">
        All
      </p>
      <p @click="filter = 'Jadau'" class="mx-2" :class="{'border-b-2 text-lg border-gray-800': filter == 'Jadau'}">
        Jadau
      </p>
      <p @click="filter = 'Engraving'" class="mx-2" :class="{'border-b-2 text-lg border-gray-800': filter == 'Engraving'}">
        Engraving
      </p>
      <p @click="filter = 'Meena'" class="mx-2" :class="{'border-b-2 text-lg border-gray-800': filter == 'Meena'}">
        Meena
      </p>
    </div>
    <section class="gallery flex flex-wrap justify-around pb-16" v-if="(filter == 'All' || filter == 'Jadau') && product">
      <div v-for="(card, index) in cards" :key="index" class="group bg-white border border-gray-400 cursor-pointer duration-500 ease-in-out h-full flex flex-col hover:-translate-y-1 hover:scale-110 items-center justify-center my-3 p-2 relative rounded-lg shadow-lg transform transition" style="flex: 0 28%">
        <div class="relative overflow-hidden w-full" style="padding-top:75%">
          <label @click="expandFunc(card, index)" class="flex justify-center items-center bg-black opacity-0 rounded-lg hover:opacity-50 absolute h-full w-full top-0 left-0 z-10 cursor-pointer">
            <i class="fas fa-expand text-4xl absolute invisible group-hover:visible text-golden" />
          </label>
          <img class="rounded-t absolute inset-0" :src="card.url" />
        </div>
        <h4 class="pt-2 px-3 font-pop font-medium text-center text-gray-700 text-sm">{{card.name}}</h4>
      </div>
    </section>
    <section v-else class="py-12 flex justify-center items-center">
      <div class="h-40 border-gray-400 border rounded-lg shadow-lg bg-white flex justify-center items-center">
        <p class="text-gray-700 font-pop font-semibold mx-8">Sorry! No Posts Found for this category.</p>
      </div>
    </section>
    <div v-if="expandImage == true" class="fixed h-full w-full flex justify-center items-center top-0 left-0">
      <label class="bg-black opacity-50 absolute h-full w-full top-0 left-0 z-10"></label>
      <button @click.stop="prev" :class="{'invisible': ! hasPrev()}" class="bg-white py-6 px-3 border border-golden z-10 rounded-lg border-r-0 rounded-r-none text-lg font-bold text-golden cursor-pointer">
        <i class="fa fa-chevron-left" />
      </button>
      <div v-on-clickaway="away" class="p-2 border-gold border bg-white rounded-lg z-20">
          <img class="rounded-t h-screen90" :src="cards[selectedIndex].url" />
      </div>
      <button @click.stop="next" class="bg-white py-6 px-3 border border-golden z-10 rounded-lg border-l-0 rounded-l-none text-lg font-bold text-golden cursor-pointer" :class="{'invisible': ! hasNext()}">
        <i class="fa fa-chevron-right" />
      </button>
    </div>
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
            Kundan Meena, flaunted by the Royals, appreciated by the Elite. Kundan
            Meena is an amalgam of an art form & a jewelry style. Meena is the
            literal Hindi translation of Enameling, which a handcrafted work of
            fusing a myriad of colors in Gold, while Kundan is the literal Marwari
            translation of 24K Pure Gold, which when united on a piece of jewelry,
            make a handcrafted piece of art, in the form of jewelry, known as
            Kundan Meena. The Meenakari is an ancient form of Persian Art, which
            was also prevalent in Ancient Rajasthani Architecture & is seen in the
            royal Havelis (royal mansions) of Bikaner, Jodhpur, Jaipur & Udaipur.
            While Kundan is also refered to a form of traditional Rajasthani form
            of jewelry, which uses pure gold foils & lac to set gemstones in a
            setting of pure gold. <br><br> These 2 arts were combined during the Reign of
            the Kingdoms in India, & later flourished during the Mughal reign in
            India, which proliferated as the now famous Kundan Meena Jewelry.<br><br>
            Suranas excel in this rare form of jewelry & has carried on the
            tradition of setting uncut diamonds & natural gemstones in 24K Pure
            Gold, in its collection of Kundan Meena Jewelry. We stud uncut
            diamonds, rubies, emeralds & sapphires on the front of the jewelry
            piece, while the enameling is done on the sides & the back of the
            jewelry piece. I cannnot put it better than one of my clients, 'You
            have confused me now! Should I wear this with the diamonds showing or
            the enamel?'<br><br> Innovations in Kundan Meena : With changing times, we
            realized the need to adapt to the changing needs of people & have thus
            innovated & introduced new collections in Kundan Meena, including the
            Peacock Fusion Collection & Enamel with Brilliant Cut Diamonds. These
            collection are much lighter in weight & have a fragrant touch of full
            cut diamonds to bring out the beauty of the enamel with the value of
            the diamonds.
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
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'Home',
  mixins: [clickaway],
  data () {
    return {
      filter: 'All',
      header: 'no fix',
      expandImage: false,
      expandKey: null,
      product: true,
      selectedIndex: 0,
      cards: [
        {
          id: '001',
          url: 'img/icons/no-free/29.png',
          name: 'Duposta Jadau Set'
        },
        {
          id: '002',
          url: 'img/icons/no-free/26.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '003',
          url: 'img/icons/no-free/24.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '004',
          url: 'img/icons/no-free/22.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '005',
          url: 'img/icons/no-free/23.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '006',
          url: 'img/icons/no-free/25.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '007',
          url: 'img/icons/no-free/27.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '008',
          url: 'img/icons/no-free/28.png',
          name: 'Duposta Jadau Set'
        },
        {
          id: '001',
          url: 'img/icons/maxresdefault.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '002',
          url: 'img/icons/2.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '003',
          url: 'img/icons/3.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '004',
          url: 'img/icons/4.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '005',
          url: 'img/icons/5.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '006',
          url: 'img/icons/6.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '007',
          url: 'img/icons/7.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '008',
          url: 'img/icons/8.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '009',
          url: 'img/icons/9.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0010',
          url: 'img/icons/10.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0011',
          url: 'img/icons/stones.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0021',
          url: 'img/icons/no-free/1.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0022',
          url: 'img/icons/no-free/22.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0012',
          url: 'img/icons/no-free/11.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0013',
          url: 'img/icons/12.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0014',
          url: 'img/icons/13.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0015',
          url: 'img/icons/14.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0016',
          url: 'img/icons/15.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0017',
          url: 'img/icons/16.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0018',
          url: 'img/icons/17.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0019',
          url: 'img/icons/18.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0020',
          url: 'img/icons/19.jpg',
          name: 'Duposta Jadau Set'
        },
        {
          id: '0023',
          url: 'img/icons/20.jpg',
          name: 'Duposta Jadau Set'
        }
      ]
    }
  },
  // components: {
  //   HelloWorld
  // }
  computed: {
  },
  methods: {
    away: function () {
      this.expandImage = false
    },
    expandFunc (card, index) {
      this.expandImage = true
      this.selectedIndex = index
      this.expandKey = { ...card }
      console.log(this.expandKey, this.selectedIndex)
    },

    hasNext () {
      return this.selectedIndex + 1 < this.cards.length
    },
    hasPrev () {
      return this.selectedIndex - 1 >= 0
    },
    prev () {
      if (this.hasPrev()) {
        this.selectedIndex -= 1
      }
    },
    next () {
      if (this.hasNext()) {
        this.selectedIndex += 1
      }
    },
    onKeydown (e) {
      if (this.expandImage) {
        switch (e.key) {
          case 'ArrowRight':
            this.next()
            break
          case 'ArrowLeft':
            this.prev()
            break
          case 'ArrowDown':
          case 'ArrowUp':
          case ' ':
            e.preventDefault()
            break
          case 'Escape':
            this.away()
            break
        }
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
  },
  destroyed () {
    window.removeEventListener('keydown', this.onKeydown)
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
