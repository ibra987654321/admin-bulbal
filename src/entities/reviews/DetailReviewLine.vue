<template>
  <div>
    <div v-for="(item, idx) in review" :key="idx" class="mb-3 inter">
      <div class="black--text">{{item.title}}</div>
      <v-progress-linear rounded :value="item.count"></v-progress-linear>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailReviewLine",
  props: {
    review: Array
  }
}
</script>

<style scoped>

</style>
