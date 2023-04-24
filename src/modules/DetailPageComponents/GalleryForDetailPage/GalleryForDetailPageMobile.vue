<template>
  <div>
    <v-carousel>
      <v-carousel-item
          v-for="(item,i) in completedAllImages"
          :key="i"
          :src="'img/' + item.fileName"
          reverse-transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "GalleryForDetailPageMobile",
  computed: {
    ...mapGetters([
      'completedAllImages'
    ])
  },
}
</script>

<style scoped>

</style>
