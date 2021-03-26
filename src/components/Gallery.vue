<template>
  <div>
    <VueGallery :images="images" :index="index" @close="index = null" />
    <div class="grid grid-flow-col grid-cols-4 grid-rows-2 h-96">
      <div
        class="col-span-2 row-span-2 b bg-cover bg-no-repeat bg-center border-red-100 m-0.5"
        @click="index = 0"
        :style="{
          backgroundImage: 'url(' + images[0] + ')',
        }"
      />
      <div
        class="col-span-1 row-span-1 bg-cover bg-no-repeat bg-center border-red-100 m-0.5"
        v-for="(image, imageIndex) in images.slice(1, 5)"
        :key="imageIndex"
        @click="index = imageIndex + 1"
        :style="{
          backgroundImage: 'url(' + image + ')',
        }"
      />
    </div>
    <MediaButtons :images="images" @openGallery="index = 0" />
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'
import MediaButtons from '@/components/MediaButtons.vue'

export default {
  name: 'Gallery',
  components: {
    VueGallery,
    MediaButtons,
  },
  props: {
    images: Array,
  },
  data() {
    return {
      index: null,
    }
  },
}
</script>
