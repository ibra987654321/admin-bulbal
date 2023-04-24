import { environment } from '@/environments/environment'
import { getAxios, postAxios, postWithoutSnack, putAxios } from '@/helpers/actions'

export default {
  state: {
    createObject: {
      "ownerId": 1, // id user есть сейчас в БД от 1 до 5
      "region": "", // передаешь название региона
      "locality": "", // передаешь название локации
      "titleOfAccommodation": "", // название дома
      "fullDescriptionOfAccommodation": "", // полное описание
      "conveniences": [],
      price: 0,
    },
    galleryData: [],
    galleryFive: [],
    done: false,
  },
  mutations: {
    setDone(state, bool) {
      state.done = bool
    },
    updateData(state, data) {
      state.createObject = data
    },
    setImages(state, data) {
      state.galleryData = data
    },
    setFiveImage(state, data) {
      state.galleryFive = data
    },
  },
  getters: {
    status(state) {
      return state.createObject.status
    },
    priceForBooking: state => {
      return state.createObject.price
    },
    completedAllImages: state => {
      return state.galleryData
    },
    completedFiveImages: state => {
      return state.galleryFive.slice(1, 5)
    },
    oneImage: state => {
      return state.galleryFive[0]
    },
  },
  actions: {
    getAccommodationById({ commit }, id) {
      getAxios(`${environment.mainApi}/accommodation/${id}`)
        .then(r => commit('updateData', r)).catch(e => console.log(e.message))
    },
    getImagesForDetail(store,id) {
      return postWithoutSnack(`${environment.mainApi}/images/findAllByAccommodationId/${id}`)
        .then(r => {
          store.commit('setImages', r)
          return r
        }).catch(e => console.log(e.message))
    },
    getFiveImagesForDetail(store,id) {
      return postWithoutSnack(`${environment.mainApi}/images/findFiveByAccommodationId/${id}`)
        .then(r => {
          store.commit('setFiveImage', r)
          return r
        }).catch(e => console.log(e.message))
    },
    actionPost(store, payload) {
      return putAxios(`${environment.adminApi}/approve/approveByAccommodationId/${payload.id}/${payload.approve}`)
        .then(() => store.commit('setDone', true))
        .catch(e => console.log(e.message))
    },
  },
}
