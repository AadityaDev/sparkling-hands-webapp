<template>
  <section class="">
    <div class="flex fixed font-extrabold font-robo items-center justify-between px-16 py-3 text-gray-100 bg-blue-1000 top-0 w-full z-10">
      <img src="../assets/logo.png" class="h-10">
      <div class="flex text-gold font-lob tracking-widest text-sm cursor-pointer">
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
    <!-- <Header /> -->
    <!-- <div v-if="product" class="flex items-center text-base py-3 justify-center font-semibold text-gray-800 font-pop cursor-pointer">
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
    </div> -->
    <section class="w-full flex items-start relative mt-16">
      <div class="bg-gray-100 flex flex-col min-h-screen max-h-screen fixed pt-8 px-6 w-1/6">
        <div v-for="category in categories" :key="category.id" class="mb-4">
          <div @click="filteredCards(category)" class="relative border rounded-lg py-1 font-semibold font-pop text-sm" :class="category.tag !== tag ? 'bg-goldlight text-gray-700 border-gray-500 cursor-pointer' : 'bg-blue-1100 text-gold border-blue-1100'">
            <div class="border-goldlight flex items-center justify-between px-3" :class="{'border-b pb-1' : category.tag === tag && category.tag !== 'all'}">
              {{category.name}}
              <i :class="category.tag === tag ? 'fa fa-chevron-down' : 'fa fa-chevron-right'" />
            </div>
            <div class="px-6 underline relative text-xs w-full" v-if="category.tag === tag" style="text-underline-position: under">
              <div @click.stop="filteredCards(subCategory)" v-for="subCategory in category.subCategories" :key="subCategory.id" class="pt-1 cursor-pointer" :class="subCategory.subTag === subTag ? 'font-bold' : 'font-thin'">
                <li>{{subCategory.name}}</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-5/6 py-6 px-16 ml-auto">
        <p class="text-xl font-pop font-bold text-gray-700 pb-6">{{ headingName }}<span class="font-normal text-lg"><i class="fa fa-chevron-right px-2 text-sm" />{{subHeadingName}}</span></p>
        <section class="gallery bg-gray-100 rounded-lg">
          <div class="w-full flex items-center justify-between">
            <div class="w-4/6 px-8 mt-6 relative">
              <input type="text" placeholder="Try search here" class="w-full px-4 py-1 text-xs bg-white border border-gray-500 rounded text-gray-600 focus:border-gray-700 outline-none">
              <i class="absolute fa fa-search mr-12 pt-2 right-0 text-gray-600 text-xs top-0" />
            </div>
            <div class="w-1/6 mt-6 mx-8">
              <div class="relative">
              <select class="w-full cursor-pointer flex justify-between items-center px-3 py-1 text-xs bg-white border border-gray-500 rounded text-gray-600 focus:border-gray-700 outline-none">
                <option v-for="n in 5" :key="n">e.g. Earrings, Set...</option>
              </select>
              <i class="fa fa-chevron-down absolute mr-3 pt-2 right-0 text-gray-600 text-xs top-0" />
            </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-around">
            <div v-for="(card, index) in selectedCategory" :key="index" class="group bg-white border border-gray-400 cursor-pointer duration-500 ease-in-out h-full flex flex-col hover:-translate-y-1 hover:scale-110 items-center justify-center mt-6 p-2 relative rounded shadow-lg transform transition" style="flex: 0 28%">
              <div class="relative overflow-hidden w-full" style="padding-top:75%">
                <label @click="expandFunc(card, index)" class="flex justify-center items-center bg-black opacity-0 rounded-lg hover:opacity-50 absolute h-full w-full top-0 left-0 z-10 cursor-pointer">
                  <i class="fas fa-expand text-4xl absolute invisible group-hover:visible text-golden" />
                </label>
                <img class="rounded-t absolute inset-0" :src="card.url" />
              </div>
              <h4 class="pt-2 px-3 font-pop font-medium text-center text-gray-700 text-sm">{{card.name}}</h4>
            </div>
          </div>
        <section v-if="noCards" class="py-12 flex justify-center items-center">
          <div class="h-40 border-gray-400 border rounded-lg shadow-lg bg-white flex justify-center items-center">
            <p class="text-gray-700 font-pop font-semibold mx-8">Sorry! No Posts Found for this category.</p>
          </div>
        </section>
        </section>
        <div v-if="expandImage == true" class="fixed h-full w-full flex justify-center items-center top-0 left-0">
          <label class="bg-black opacity-50 absolute h-full w-full top-0 left-0 z-10"></label>
          <button @click.stop="prev" :class="{'invisible': ! hasPrev()}" class="bg-white py-6 px-3 border border-golden z-10 rounded-lg border-r-0 rounded-r-none text-lg font-bold text-golden cursor-pointer">
            <i class="fa fa-chevron-left" />
          </button>
          <div v-on-clickaway="away" class="p-2 border-gold border bg-white rounded-lg z-20">
              <img class="rounded-t h-screen90" :src="selectedCategory[selectedIndex].url" />
          </div>
          <button @click.stop="next" class="bg-white py-6 px-3 border border-golden z-10 rounded-lg border-l-0 rounded-l-none text-lg font-bold text-golden cursor-pointer" :class="{'invisible': ! hasNext()}">
            <i class="fa fa-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
// import Header from '@/components/Header.vue'
import allData from '../data.json'
import { mixin as clickaway } from 'vue-clickaway'
export default {
  name: 'Categories',
  mixins: [clickaway],
  data () {
    return {
      filtered: false,
      header: 'no fix',
      firstIndex: 0,
      lastIndex: 9,
      expandImage: false,
      expandKey: null,
      product: true,
      selectedIndex: 0,
      selectedCategory: null,
      noCards: true,
      tag: 'all',
      subTag: 'all',
      headingName: 'All Collection',
      subHeadingName: 'All'
    }
  },
  components: {
    // Header
  },
  computed: {
    categories () {
      const categories = allData.allData.categories
      return categories
    },
    cards () {
      const cards = allData.allData.cards
      return cards
    }
  },
  methods: {
    away: function () {
      this.expandImage = false
    },
    filteredCards (category) {
      let filtered = this.cards
      if (category.tag && category.tag !== 'all') {
        this.tag = category.tag
        this.headingName = category.name
        this.subHeadingName = 'All'
        this.subTag = 'all'
        filtered = filtered.filter((x) => x.tag === category.tag)
        if (filtered.length < 1) {
          this.noCards = true
        } else {
          this.noCards = false
        }
      } else if (category.subTag !== undefined) {
        this.subHeadingName = category.name
        this.subTag = category.subTag
        filtered = filtered.filter((x) => x.subTag === category.subTag)
        if (filtered.length < 1) {
          this.noCards = true
        } else {
          this.noCards = false
        }
      } else {
        this.tag = category.tag
        this.headingName = category.name
        if (filtered.length < 1) {
          this.noCards = true
        } else {
          this.noCards = false
        }
      }
      this.selectedCategory = filtered
    },
    expandFunc (card, index) {
      this.expandImage = true
      this.selectedIndex = index
      this.expandKey = { ...card }
      console.log(this.expandKey, this.selectedIndex)
    },

    hasNext () {
      return this.selectedIndex + 1 < this.selectedCategory.length
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
    this.selectedCategory = allData.allData.cards
    window.addEventListener('keydown', this.onKeydown)
  }
}
</script>

<style>
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}
</style>
