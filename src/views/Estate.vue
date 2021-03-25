<template>
  <div class="lg:p-8 max-w-full lg:max-w-3xl mx-auto">
    <PropertyCard
      v-for="property in properties"
      :key="property.Id"
      :property="property"
    />
  </div>
</template>

<script>
import estateService from '@/service/estate.js'
import PropertyCard from '@/components/PropertyCard.vue'

export default {
  name: 'Estate',
  components: {
    PropertyCard,
  },
  data() {
    return {
      properties: [],
    }
  },
  created() {
    this.getProperties()
  },
  methods: {
    async getProperties() {
      const query = { type: 'koop', zo: '/amsterdam/tuin/video', pagesize: 5 }

      try {
        const { Objects } = await estateService.getEstates(query)
        this.properties = Objects
      } catch (error) {
        alert(error)
      }
    },
  },
}
</script>
