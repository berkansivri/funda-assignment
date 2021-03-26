<template>
  <div>
    <div
      class="w-full border-funda border-b-2"
      v-if="images && images.length > 0"
    >
      <Carousel v-if="isMobile" :images="images" />
      <Gallery v-else :images="images" />
    </div>
    <div class="flex mx-4" v-if="!isLoading">
      <div class="relative py-4 sm:ml-32 sm:pr-32">
        <div class="border-b-2 border-gray-200 sm:py-12">
          <div class="sm:space-y-2">
            <span
              class="px-2 py-0.5 rounded-sm bg-yellow-500 text-xs text-white font-semibold"
            >
              New
            </span>
            <h1 class="text-xl sm:text-4xl font-extrabold">
              {{ property.Adres }}
            </h1>
            <h3 class="text-gray-400 font-medium">
              {{ property.Postcode | postcode }} {{ property.Plaats }}
            </h3>
            <ul class="flex mt-3 sm:mt-5">
              <li class="flex mr-4 sm:mr-8">
                <img class="h-6" src="@/assets/icon/area.svg" />
                <strong class="mr-1">
                  {{ property.WoonOppervlakte | dimension }}
                </strong>
                <span class="hidden sm:inline-block"> living area</span>
              </li>
              <li class="flex mr-4 sm:mr-8">
                <img class="h-6" src="@/assets/icon/size.svg" />
                <strong class="mr-1">
                  {{ property.PerceelOppervlakte | dimension }}
                </strong>
                <span class="hidden sm:inline">plot size</span>
              </li>
              <li class="flex mr-4 sm:mr-8">
                <img class="h-6" src="@/assets/icon/bed.svg" />
                <strong class="mr-1">
                  {{ property.AantalKamers }}
                </strong>
                <span class="hidden sm:inline">bedrooms</span>
              </li>
            </ul>
          </div>
          <div class="flex mt-5 space-x-4">
            <span class="text-xl font-bold">
              {{ property.Prijs | price }}
            </span>
            <div class="flex space-x-2">
              <img class="h-6" src="@/assets/icon/calculator.svg" />
              <a class="text-blue-600 text-base">Calculate monthly payment</a>
            </div>
          </div>
          <div class="absolute top-10 right-3 sm:top-20 sm:right-0 text-center">
            <img class="h-14 rounded" src="@/assets/icon/map.svg" />
            <span
              class="hidden sm:inline-block text-blue-600 font-medium text-sm"
            >
              Map
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Gallery from '@/components/Gallery.vue'
import estateService from '@/service/estate.js'

export default {
  name: 'Property',
  components: {
    Gallery,
    Carousel,
  },
  data() {
    return {
      property: {},
      isMobile: false,
      isLoading: true,
    }
  },
  computed: {
    images() {
      // collecting bigest images from media items
      return this.property.Media?.map(
        p => p.MediaItems[p.MediaItems.length - 1].Url
      )
    },
  },
  created() {
    this.getPropertyDetail()
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    async getPropertyDetail() {
      try {
        this.property = await estateService.getDetail(this.$route.params.id)
        this.isLoading = false
      } catch (error) {
        alert(error.message)
      }
    },
    onResize() {
      this.isMobile = window.innerWidth <= 760
    },
  },
}
</script>
