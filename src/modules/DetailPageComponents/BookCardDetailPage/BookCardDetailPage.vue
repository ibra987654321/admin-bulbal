<template>
  <div>
    <v-card class="rounded-lg elevation-0 card_block">
      <div class="d-flex justify-space-between">
        <div class="">
          <v-card-title class="d-flex justify-space-between">
            <div class="d-flex justify-space-between">
              <div class="font-weight-bold mr-1">{{ calculator(priceForBooking) }}сом </div> | <small class="ml-1 poppins"> ночь</small>
            </div>
          </v-card-title>
          <v-card-subtitle class="d-flex pl-0 align-center poppins">
            <svg class="mx-2 my-2 ml-3" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1128 1.28584L13.9159 4.83396L17.9638 5.40522C19.8601 5.67275 20.7269 8.01285 19.2651 9.39572L16.3576 12.1438L17.0419 16.016C17.3923 17.9996 15.287 19.3318 13.6291 18.4871L9.99983 16.6358L6.37158 18.4865C4.71129 19.334 2.6077 17.9973 2.95772 16.016L3.64203 12.1438L0.734898 9.3961C-0.727986 8.01223 0.141888 5.67263 2.03558 5.40525L6.08385 4.83394L7.88788 1.28584C8.75916 -0.428539 11.2417 -0.428688 12.1128 1.28584Z" fill="#FFD166"/>
            </svg>
            <div class="font-weight-bold text--black mr-2">4.8</div>
            (56 отзывов)
          </v-card-subtitle>
        </div>
      </div>
      <v-card-text>
        <v-row class="poppins">
          <v-col
              cols="12"
          >
            <v-menu
                v-model="menu1"
                :close-on-content-click="true"
                max-width="290"
            >
              <vc-date-picker class="mx-2" v-model="$store.state.header.range" color="teal" is-range/>
              <template v-slot:activator="{ on, attrs }">
                <v-card
                    color="accent"
                    class="elevation-0 rounded-tl-lg rounded-tr-lg px-2">
                  <v-row>
                    <v-col
                        v-bind="attrs"
                        v-on="on"
                        cols="6"
                    >
                      <div class="d-flex justify-center">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M23 10H9C8.44772 10 8 10.4477 8 11V23C8 23.5523 8.44772 24 9 24H23C23.5523 24 24 23.5523 24 23V11C24 10.4477 23.5523 10 23 10ZM9 8C7.34315 8 6 9.34315 6 11V23C6 24.6569 7.34315 26 9 26H23C24.6569 26 26 24.6569 26 23V11C26 9.34315 24.6569 8 23 8H9Z" fill="#777E90"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 16C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18H21C21.5523 18 22 17.5523 22 17C22 16.4477 21.5523 16 21 16H14ZM11 20C10.4477 20 10 20.4477 10 21C10 21.5523 10.4477 22 11 22H17C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20H11Z" fill="#777E90"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6C10.4477 6 10 6.44771 10 7V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V7C12 6.44771 11.5523 6 11 6ZM21 6C20.4477 6 20 6.44771 20 7V11C20 11.5523 20.4477 12 21 12C21.5523 12 22 11.5523 22 11V7C22 6.44771 21.5523 6 21 6Z" fill="#777E90"/>
                        </svg>

                        <div class="d-flex flex-column black--text">
                          <small class="grey--text">Прибытие</small>
                          {{ $store.state.header.range.start | date }}
                        </div>
                      </div>
                    </v-col>
                    <v-col
                        v-bind="attrs"
                        v-on="on"
                        cols="6"
                    >
                      <div class="d-flex justify-center">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M23 10H9C8.44772 10 8 10.4477 8 11V23C8 23.5523 8.44772 24 9 24H23C23.5523 24 24 23.5523 24 23V11C24 10.4477 23.5523 10 23 10ZM9 8C7.34315 8 6 9.34315 6 11V23C6 24.6569 7.34315 26 9 26H23C24.6569 26 26 24.6569 26 23V11C26 9.34315 24.6569 8 23 8H9Z" fill="#777E90"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 16C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18H21C21.5523 18 22 17.5523 22 17C22 16.4477 21.5523 16 21 16H14ZM11 20C10.4477 20 10 20.4477 10 21C10 21.5523 10.4477 22 11 22H17C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20H11Z" fill="#777E90"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6C10.4477 6 10 6.44771 10 7V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V7C12 6.44771 11.5523 6 11 6ZM21 6C20.4477 6 20 6.44771 20 7V11C20 11.5523 20.4477 12 21 12C21.5523 12 22 11.5523 22 11V7C22 6.44771 21.5523 6 21 6Z" fill="#777E90"/>
                        </svg>

                        <div class="d-flex flex-column">
                          <small class="grey--text">Выезд</small>
                          {{ $store.state.header.range.end | date }}
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </template>
            </v-menu>
          </v-col>
          <v-col cols="12" class="pt-0">
            <div class="accent rounded-bl-lg rounded-br-lg">
              <v-row>
                <v-col cols="6" class="d-flex justify-center">
                  <v-menu
                      offset-y
                      nudge-left="100"
                      transition="slide-y-transition"
                      :close-on-content-click="false"
                      bottom
                      rounded="xl"
                      v-model="people"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          text
                          class="text-none pl-2"
                          v-on="on"
                      >
                        <svg class="mr-2" width="33" height="32" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.6099 12.0699C8.85611 12.0699 6.62372 14.3272 6.62372 17.1117V18.5523C6.62372 18.9501 6.3048 19.2725 5.91141 19.2725C5.51801 19.2725 5.1991 18.9501 5.1991 18.5523V17.1117C5.1991 13.5316 8.06931 10.6293 11.6099 10.6293C15.1505 10.6293 18.0207 13.5316 18.0207 17.1117V18.5523C18.0207 18.9501 17.7018 19.2725 17.3084 19.2725C16.915 19.2725 16.5961 18.9501 16.5961 18.5523V17.1117C16.5961 14.3272 14.3637 12.0699 11.6099 12.0699Z"
                                fill="#B1B5C3"/>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.4667 10.6293C13.0051 10.6293 14.2523 9.38219 14.2523 7.84374C14.2523 6.30529 13.0051 5.05814 11.4667 5.05814C9.92823 5.05814 8.68107 6.30529 8.68107 7.84374C8.68107 9.38219 9.92823 10.6293 11.4667 10.6293ZM11.4667 12.0222C13.7744 12.0222 15.6451 10.1514 15.6451 7.84375C15.6451 5.53608 13.7744 3.66534 11.4667 3.66534C9.15907 3.66534 7.28833 5.53608 7.28833 7.84375C7.28833 10.1514 9.15907 12.0222 11.4667 12.0222Z"
                                fill="#B1B5C3"/>
                        </svg>
                        <div class="d-flex flex-column text-left">
                          <small class="font-weight-light grey--text" >Для кого</small>
                          Гости
                        </div>
                      </v-btn>
                    </template>
                    <div>
                    </div>
                  </v-menu>
                </v-col>
                <v-col cols="6" class="d-flex justify-center">
                  <v-menu
                      offset-y
                      transition="slide-y-transition"
                      :close-on-content-click="false"
                      bottom
                      rounded="xl"
                      v-model="people2"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          text
                          class="text-none pl-0"
                          v-on="on"
                      >
                        <svg class="mr-2" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.13281 20.0579V12.5788C7.13281 12.0829 7.31011 11.6073 7.6257 11.2566C7.94129 10.906 8.36932 10.709 8.81562 10.709H22.2781C22.7244 10.709 23.1525 10.906 23.4681 11.2566C23.7836 11.6073 23.9609 12.0829 23.9609 12.5788V20.0579" stroke="#6A717F" stroke-width="1.40234" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M8.81567 10.709V6.9694C8.81567 6.4735 8.99297 5.99791 9.30856 5.64726C9.62415 5.2966 10.0522 5.09961 10.4985 5.09961H20.5954C21.0417 5.09961 21.4697 5.2966 21.7853 5.64726C22.1009 5.99791 22.2782 6.4735 22.2782 6.9694V10.709" stroke="#6A717F" stroke-width="1.40234" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M15.5469 5.09961V10.709" stroke="#6A717F" stroke-width="1.40234" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M7.13281 18.1885H23.9609" stroke="#6A717F" stroke-width="1.40234" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <div class="d-flex flex-column text-left">
                          <small class="font-weight-light grey--text">Тип</small>
                          Комната
                        </div>
                      </v-btn>
                    </template>
                    <div>
                      <BookCardRoomItems/>
                    </div>
                  </v-menu>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="12" class="d-flex">
            <v-btn outlined rounded class="text-capitalize" style="border: thin solid #E6E8EC">Сохранить
            </v-btn>
            <v-btn color="primary" @click="book()" class="ml-3 w-100 text-capitalize" style="max-width: 205px" rounded>
              Бронировать
              <svg width="17" class="ml-2" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3281 5.33333H4.6719C3.90281 5.33333 3.29319 5.98224 3.34117 6.74984L3.6745 12.0832C3.71842 12.7859 4.30115 13.3333 5.00524 13.3333H11.9948C12.6989 13.3333 13.2816 12.7859 13.3255 12.0832L13.6589 6.74984C13.7068 5.98224 13.0972 5.33333 12.3281 5.33333ZM4.6719 4C3.13371 4 1.91448 5.29781 2.01043 6.83301L2.34376 12.1663C2.4316 13.5718 3.59707 14.6667 5.00524 14.6667H11.9948C13.403 14.6667 14.5684 13.5718 14.6563 12.1663L14.9896 6.83301C15.0856 5.29781 13.8663 4 12.3281 4H4.6719Z" fill="#FCFCFD"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.16675 4.66664C5.16675 2.82569 6.65913 1.33331 8.50008 1.33331C10.341 1.33331 11.8334 2.82569 11.8334 4.66664V5.99999C11.8334 6.36818 11.5349 6.66665 11.1667 6.66665C10.7986 6.66665 10.5001 6.36818 10.5001 5.99999V4.66664C10.5001 3.56207 9.60465 2.66664 8.50008 2.66664C7.39551 2.66664 6.50008 3.56207 6.50008 4.66664V5.99999C6.50008 6.36818 6.20161 6.66665 5.83341 6.66665C5.46522 6.66665 5.16675 6.36818 5.16675 5.99999V4.66664Z" fill="#FCFCFD"/>
              </svg>

            </v-btn>
          </v-col>
          <v-col cols="12">
            <div>
              <v-list disabled >
                <v-list-item-group
                    v-model="selectedItem"
                    class="result"
                >
                  <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      link
                      class="poppins"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="black--text rounded-lg count" v-if="selectedItem === i"
                                         v-text="item.text"></v-list-item-title>
                      <v-list-item-title class="grey--text" style="font-size: 14px" v-else v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon v-if="selectedItem === i" class="font-weight-bold">
                      {{ item.count }} сом
                    </v-list-item-icon>
                    <v-list-item-icon v-else>
                      {{ item.count }} сом
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import BookCardRoomItems from "@/modules/DetailPageComponents/BookCardDetailPage/BookCardRoomItems";
import {mapGetters} from "vuex";

export default {
  name: "BookCardDetailPage",
  components: {
    BookCardRoomItems
  },
  data: () => ({
    rating: 1,
    people: false,
    people2: false,
    dates: {
      start: new Date(2023, 3, 1),
      end: new Date(2023, 3, 5)
    },
    menu1: false,
    selectedItem: 2,
    items: [
      {text: '800  x  7 ночей', count: '77'},
      {text: 'За обслуживание Bulbal', count: 10},
      {text: 'Итог', count: '87$'},
    ],
    pricer: ''
  }),
  computed: {
    ...mapGetters(['priceForBooking', 'getQuantityPersons']),
    price() {
      return this.$store.state.postDetail.createObject.price
    }
  },
  watch: {
    '$store.state.header.range'(v) {
      if (v) {
        this.$store.commit('changeRange', v)
        this.menu1 = false
        this.calculator()

      }
    },
    priceForBooking(v) {
      this.pricer = v
    },
    getQuantityPersons(v) {
      if (v) {
        this.$store.commit('setPerson', v)
        this.calculator()
      }
    },
  },
  mounted() {
    this.calculator()
  },

  methods: {
    book() {
      this.$router.push({name: "confirm"})
    },
    rangeDate() {
      const timeDiff = Math.abs(this.$store.state.header.range.end.getTime() - this.$store.state.header.range.start.getTime());
      return Math.ceil(timeDiff / (1000 * 3600 * 24))
    },
    calculator(price) {
      const p = price ? price : this.priceForBooking
      this.items[0].text = `${p} x ${this.rangeDate()} ночей на ${this.$store.state.header.countItemList[0].people} человек`
      this.items[0].count = this.$store.state.postDetail.createObject.price * this.rangeDate() * this.$store.state.header.countItemList[0].people
      this.items[2].count = this.items[0].count + this.items[1].count
      return this.priceForBooking
    }
  }
}
</script>

<style scoped>
.accent, .count .v-list-item__content {
  background-color: #F4F5F6;
  border-radius: 8px;
}
.result .theme--light.v-list-item--active:hover::before, .theme--light.v-list-item--active::before {
  border-radius: 8px;
}
.card_block {
  max-width: 390px;
  filter: drop-shadow(0px 64px 64px rgba(15, 15, 15, 0.08));
  border: 1px solid #e3e2e2;
}
</style>
