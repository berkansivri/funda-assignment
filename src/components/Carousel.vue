<template>
  <div>
    <Carousel :perPage="1" :paginationEnabled="false">
      <Slide v-for="(image, index) in images" :key="index">
        <img :src="image" class="w-full h-80 object-fill" />
      </Slide>
    </Carousel>
    <MediaButtons :images="images" />
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import MediaButtons from '@/components/MediaButtons.vue'

export default {
  components: {
    Carousel,
    Slide,
    MediaButtons,
  },
  props: {
    images: Array,
  },
}
</script>
