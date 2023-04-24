<template>
  <component :is="resolveLayout">
    <router-view></router-view>
    <TheSnackbars/>
  </component>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useRouter } from '@/utils'
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'
import {getDarkTheme} from '@/helpers/helpers'
import TheSnackbars from "@/components/TheSnackbars";

export default {
  components: {
    LayoutBlank,
    LayoutContent,
    TheSnackbars,
  },
  mounted() {
    const theme = getDarkTheme()
    if (theme) {
      if (theme === 'true') {
        this.$vuetify.theme.dark = true
      } else {
        this.$vuetify.theme.dark = false
      }
    }
  },
  setup() {
    const { route } = useRouter()

    const resolveLayout = computed(() => {
      // Handles initial route
      if (route.value.name === null) return null

      if (route.value.meta.layout === 'blank') return 'layout-blank'

      return 'layout-content'
    })

    return {
      resolveLayout,
    }
  },
}
</script>
<style>
.date_range .v-input__slot {
  margin-bottom: 0;
}
.date_range .v-text-field__details {
  display: none;
}
</style>
