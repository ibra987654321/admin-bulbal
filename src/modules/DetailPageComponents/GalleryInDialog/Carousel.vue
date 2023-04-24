<template>
  <v-dialog
      v-model="dialog"
      max-width="1300px"
      transition="dialog-bottom-transition"
  >
<!--    <v-carousel v-model="model" height="600px">-->
<!--      <v-carousel-item-->
<!--          v-for="(image, i) in images"-->
<!--          :key="i"-->
<!--      >-->
<!--          <v-row  class="fill-height"-->
<!--                 align="center"-->
<!--                 justify="center">-->
<!--            <div-->
<!--                class="img"-->
<!--            >-->
<!--              <img-->
<!--                  :src="image.urls.small"-->
<!--              />-->
<!--            </div>-->
<!--          </v-row>-->
<!--      </v-carousel-item>-->
<!--    </v-carousel>-->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body">
            <img
                v-if="dialog"
                :src="'img/' + n.fileName"
                alt=""
                class='modal-img'
            />
          </div>
        </div>

      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    id: '',
    images: Array
  },
  data: () => ({
    model: 0,
    dialog: false,
  }),
  computed: {
    idLocal: {
      get: function() {
        return this.id
      },
      set: function(value) {
        this.$emit('changeId', value)
      }
    }
  },
  watch: {
    'idLocal'(v) {
      if (v) {
        this.model = v
        // this.model = this.$props.images.find(i => v.id === i.id)
        this.dialog = true
      }
    },
    dialog(v) {
      if (!v) {
        this.idLocal = ''
      }
    }
  },
}
</script>

<style scoped>
.modal-img{
  width:100%;
  height:auto;
}
.modal-body{
  padding:0px;
}
</style>
