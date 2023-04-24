<template>
    <v-row style="width: 100%;">
      <v-col cols="12" class="py-0 px-0" v-if="$vuetify.breakpoint.mobile">
        <div>
          <GalleryForDetailPageMobile/>
        </div>
      </v-col>
      <div :class="$vuetify.breakpoint.mobile ? 'container' : ''">
        <v-col cols="12" :class="!$vuetify.breakpoint.mobile ? 'mt-10' : ''">
          <v-row class="d-flex justify-space-between">
            <v-col cols="12" sm="9">
              <TitleForDetailPage/>
            </v-col>
            <v-col cols="3" class="d-flex justify-end">
              <v-btn text small>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_240_2946)">
                    <rect x="1" y="1" width="38" height="38" rx="19" stroke="#E6E8EC" stroke-width="2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9986 18.0399C17.028 18.5914 16.6047 19.0623 16.0532 19.0917C15.3005 19.1318 14.7044 19.1809 14.2385 19.23C13.6129 19.296 13.2328 19.6803 13.1696 20.2331C13.0789 21.0267 13 22.2278 13 24C13 25.7723 13.0789 26.9733 13.1696 27.767C13.2329 28.3207 13.6121 28.7039 14.2367 28.7698C15.3308 28.8853 17.1392 29 20 29C22.8608 29 24.6692 28.8853 25.7632 28.7698C26.3879 28.7039 26.7671 28.3207 26.8304 27.767C26.9211 26.9733 27 25.7723 27 24C27 22.2278 26.9211 21.0267 26.8304 20.2331C26.7672 19.6803 26.3871 19.296 25.7615 19.23C25.2956 19.1809 24.6995 19.1318 23.9468 19.0917C23.3953 19.0623 22.972 18.5914 23.0014 18.0399C23.0308 17.4884 23.5017 17.0651 24.0532 17.0945C24.8361 17.1363 25.4669 17.1879 25.9712 17.2411C27.4556 17.3976 28.6397 18.4507 28.8175 20.0059C28.9188 20.8923 29 22.1715 29 24C29 25.8285 28.9188 27.1078 28.8175 27.9941C28.6398 29.5484 27.4585 30.602 25.9732 30.7588C24.7919 30.8834 22.9108 31 20 31C17.0892 31 15.2081 30.8834 14.0268 30.7588C12.5415 30.602 11.3602 29.5484 11.1825 27.9941C11.0812 27.1078 11 25.8285 11 24C11 22.1715 11.0812 20.8923 11.1825 20.0059C11.3603 18.4507 12.5444 17.3976 14.0288 17.2411C14.5331 17.1879 15.1639 17.1363 15.9468 17.0945C16.4983 17.0651 16.9692 17.4884 16.9986 18.0399Z" fill="#777E90"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2071 14.2071C16.8166 14.5976 16.1834 14.5976 15.7929 14.2071C15.4024 13.8166 15.4024 13.1834 15.7929 12.7929L19.2929 9.29289C19.6834 8.90237 20.3166 8.90237 20.7071 9.29289L24.2071 12.7929C24.5976 13.1834 24.5976 13.8166 24.2071 14.2071C23.8166 14.5976 23.1834 14.5976 22.7929 14.2071L21 12.4142L21 22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22L19 12.4142L17.2071 14.2071Z" fill="#777E90"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_240_2946">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" v-if="!$vuetify.breakpoint.mobile">
          <div>
            <GalleryForDetailPage :id="$route.params.id"/>
          </div>
        </v-col>
        <v-col  cols="12" class="mt-15">
          <v-row>
            <v-col  cols="12" sm="7" class="mr-16">
              <v-row>
                <v-col cols="12">
                  <div>
                    <NameTitleDetailPage/>
                  </div>
                  <hr>
                </v-col>
                <v-col cols="12">
                  <RoomCountDetailPage/>
                </v-col>
                <v-col cols="12">
                  <DescriptionDetailPage/>
                </v-col>
                <v-col cols="12">
                  <FacilitiesDetailPage/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </div>
      <v-col cols="12">
        <div class="d-flex justify-space-around">
          <v-btn v-if="$store.getters.status === 'Опубликовано'" color="error" :disabled="$store.state.done" @click="$store.dispatch('actionPost', {id: $route.params.id, approve: 'На рассмотрении'})">Отклонить</v-btn>
          <v-btn v-else color="info" :disabled="$store.state.done" @click="$store.dispatch('actionPost', {id: $route.params.id, approve: 'Опубликовано'})">Одобрить</v-btn>
        </div>
      </v-col>
    </v-row>
</template>

<script>
import TitleForDetailPage
  from '@/modules/DetailPageComponents/TitleForDetailPage/TitleForDetailPage'
import GalleryForDetailPage
  from '@/modules/DetailPageComponents/GalleryForDetailPage/GalleryForDetailPage'
import GalleryForDetailPageMobile
  from '@/modules/DetailPageComponents/GalleryForDetailPage/GalleryForDetailPageMobile'
import titleCard from '@/components/titleCard/titleCard'
import NameTitleDetailPage
  from '@/modules/DetailPageComponents/NameTitleDetailPage/NameTitleDetailPage'
import RoomCountDetailPage
  from '@/modules/DetailPageComponents/RoomCountDetailPage/RoomCountDetailPage'
import DescriptionDetailPage
  from '@/modules/DetailPageComponents/DescriptionDetailPage/DescriptionDetailPage'
import FacilitiesDetailPage
  from '@/modules/DetailPageComponents/FacilitiesDetailPage/FacilitiesDetailPage'
import BookCardDetailPage
  from '@/modules/DetailPageComponents/BookCardDetailPage/BookCardDetailPage'
import OwnerInfoDetailPage
  from '@/modules/DetailPageComponents/OwnerInfoDetailPage/OwnerInfoDetailPage'
import CommentDetailPage from '@/modules/DetailPageComponents/CommentDetailPage/CommentDetailPage'

export default {
  name: 'ApproveDetail',
  components: {
    titleCard,
    TitleForDetailPage,
    GalleryForDetailPage,
    GalleryForDetailPageMobile,
    NameTitleDetailPage,
    RoomCountDetailPage,
    DescriptionDetailPage,
    FacilitiesDetailPage,
    BookCardDetailPage,
  },
  mounted() {
    this.$store.dispatch('getAccommodationById', this.$route.params.id)
  },
}
</script>

<style scoped>

</style>
