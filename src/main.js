import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/router'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.mixin({
  filters: {
    postcode(code) {
      return `${code.substring(0, 4)} ${code.substr(4)} `
    },
    price({ Koopprijs: price, KoopAbbreviation: abbr }) {
      const formatter = new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
      })
      return `${formatter.format(price)} ${abbr}`
    },
    dimension(value) {
      return `${value} m²`
    },
  },
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
