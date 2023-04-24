<template>
  <v-fade-transition mode="out-in">
    <v-icon
      :key="$vuetify.theme.dark"
      @click="darkTheme"
    >
      {{ $vuetify.theme.dark ? icons.mdiWeatherSunny : icons.mdiWeatherNight }}
    </v-icon>
  </v-fade-transition>
</template>

<script>
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'
import { setDarkTheme } from '@/helpers/helpers'

export default {
  setup() {
    function darkTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      setDarkTheme(this.$vuetify.theme.dark)
    }

    return {
      icons: {
        mdiWeatherNight,
        mdiWeatherSunny,
      },
      darkTheme,
    }
  },
}
</script>

<style>
</style>
