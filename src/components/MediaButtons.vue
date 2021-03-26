<template>
  <div
    class="flex justify-around sm:space-x-10 justify-items-center p-2 sm:px-32 sm:py-4"
  >
    <div
      class="space-x-2 cursor-pointer hidden sm:flex"
      @click="$emit('openGallery')"
    >
      <img class="h-6" src="@/assets/icon/collection.svg" />
      <span class="text-blue-500 font-medium">Photos</span>
      <span class="text-gray-500 text-sm">{{ images.length }}</span>
    </div>
    <div class="block sm:flex space-x-2">
      <img class="h-6 mx-auto" src="@/assets/icon/collection.svg" />
      <span class="text-blue-500 font-medium">Floorplan</span>
    </div>
    <div class="block sm:flex space-x-2">
      <img class="h-6 mx-auto" src="@/assets/icon/collection.svg" />
      <span class="text-blue-500 font-medium">360 Photos</span>
    </div>
    <div class="block sm:flex space-x-2">
      <img class="h-6 mx-auto" src="@/assets/icon/collection.svg" />
      <span class="text-blue-500 font-medium">Video</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaButtons',
  props: {
    images: Array,
  },
}
</script>
