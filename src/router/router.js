import VueRouter from 'vue-router'
import Estate from '@/views/Estate.vue'
import Property from '@/views/Property.vue'
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Estate',
      component: Estate,
    },
    {
      path: '/property/:id',
      name: 'Property',
      component: Property,
    },
  ],
})
