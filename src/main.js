import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import DatetimePicker from 'vuetify-datetime-picker'
import statusFilter from '@/filter/status.filter'
import dateFilter from '@/filter/date.filter'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(DatetimePicker)
Vue.filter('status', statusFilter)
Vue.filter('date', dateFilter)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
