<template>
  <div>
    <div id="gallery" class="container-fluid">
      <img
          v-for="(item, i) in data"
          :key="i"
          :src="'img/' + item.fileName"
          class="img-responsive"
          @click="open(item)"
      >
    </div>
        <carousel :id="imageId" :images="data" @changeId="changeId($event)"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
const carousel = () => import('./Carousel')
export default {
  name: "StackForDialogGallery",
  props: {
    data: Array,
    columnMinWidth: Number,
  },
  components: {
    carousel
  },
  data:() => ({
    imageId: null
  }),
  methods: {
    open(id) {
      this.imageId = id
    },
    changeId(v) {
      this.imageId = v
    },
  }
}
</script>

<style scoped>
#gallery{
  -webkit-column-count:3;
  -moz-column-count:3;
  column-count:3;

  -webkit-column-gap:20px;
  -moz-column-gap:20px;
  column-gap:20px;
}
@media (max-width:800px){
  #gallery{
    -webkit-column-count:2;
    -moz-column-count:2;
    column-count:2;

    -webkit-column-gap:20px;
    -moz-column-gap:20px;
    column-gap:20px;
  }
}
@media (max-width:600px){
  #gallery{
    -webkit-column-count:1;
    -moz-column-count:1;
    column-count:1;
  }
}
#gallery img {
  width:100%;
  height:auto;
  margin: 2% auto;
  border-radius: 14px;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.modal-img{
  width:100%;
  height:auto;
}
.modal-body{
  padding:0px;
}
</style>
