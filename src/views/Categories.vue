<template>
  <section>
    <Header />
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
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import { mixin as clickaway } from 'vue-clickaway'
export default {
  name: 'Categories',
  mixins: [clickaway],
  data () {
    return {
      filter: 'All',
      header: 'no fix',
      expandImage: false,
      expandKey: null,
      product: true,
      selectedIndex: 0,
      categories: [{
        name: 'Jadau Items'
      }, {
        name: '22kt Jewellery'
      }, {
        name: 'Stones/Diamonds'
      }, {
        name: 'Fusion Jewellery'
      }, {
        name: 'Siver Jewellery'
      }],
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
  components: {
    Header
  },
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

<style>

</style>
