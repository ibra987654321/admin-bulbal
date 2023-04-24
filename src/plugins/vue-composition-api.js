import VueCompositionAPI from '@vue/composition-api'
import Vue from 'vue'

Vue.use(VueCompositionAPI)
export default {
  setup() {
    const theme = localStorage.getItem('dark_theme')
    if (theme) {
      if (theme === 'true') {
        this.$vuetify.theme.dark = true
      } else {
        this.$vuetify.theme.dark = false
      }
    }
  },
}
