<template>
  <v-row>
    <v-col cols="12">
      <h2 class="poppins">Удобства</h2>
    </v-col>
    <v-col v-for="(item, i) in $store.state.dashboard.approve.createObject.conveniences" cols="12" sm="6" class="poppins d-flex">
      <div>
<!--        <v-img :src="data[i].icon" width="24px" class="mr-5"/>-->
      </div>
      <div class="title__facilities poppins grey--text">{{item.name}}</div>
    </v-col>
    <v-col cols="12">
      <v-btn outlined rounded class="font-weight-medium text-capitalize">Подробнее</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "FacilitiesDetailPage",
  data:() => ({
  }),
  computed: {
    ...mapState(['postDetail'])
  }
}
</script>

<style scoped>
.title__facilities {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
}
</style>
