import {
  deleteAxios,
  getAxios,
  postAxios,
  putAxios, uploadAxios, uploadPostAxios,
} from '@/helpers/actions'
import { environment } from '@/environments/environment'
import { ADVANTAGE, LOCALITY, REGION } from '@/helpers/endpionts'
import login from '@/views/pages/Login'

export default {
  state: {},
  mutations: { },
  actions: {
    getConfigData(store, payload) {
      return getAxios(`${environment.adminApi + payload.param}/all`)
    },
    postConfigData(store, payload) {
      return postAxios(`${environment.adminApi + payload.param}/save`, payload.data)
    },
    putConfigData(store, payload) {
      return putAxios(`${environment.adminApi + payload.param}/update/${payload.data.id}`, payload.data)
    },
    deleteConfigData(store, payload) {
      return deleteAxios(`${environment.adminApi + payload.param}/delete/${payload.data.id}`)
    },
    getRegion() {
      return getAxios(`${environment.mainApi + REGION}/all`)
    },
    postRegion(store, payload) {
      return postAxios(`${environment.mainApi + REGION}/save`, payload.data)
    },
    putRegion(store, payload) {
      return putAxios(`${environment.mainApi + REGION}/update/${payload.data.id}`, payload.data)
    },
    deleteRegion(store, payload) {
      return deleteAxios(`${environment.mainApi + REGION}/delete/${payload.data.id}`)
    },
    getLocality(_, payload) {
      return getAxios(`${environment.mainApi + LOCALITY}/all/${payload}`)
    },
    postLocality(store, payload) {
      console.log(payload)
      const data = {
        name: payload.data.name,
        regionId: payload.parent.id,
      }
      return postAxios(`${environment.mainApi + LOCALITY}/save`, data)
    },
    putLocality(store, payload) {
      return putAxios(`${environment.mainApi + LOCALITY}/update/${payload.id}`, payload)
    },
    deleteLocality(store, payload) {
      return deleteAxios(`${environment.mainApi + LOCALITY}/delete/${payload.id}`)
    },
    getAdvantage() {
      return getAxios(`${environment.adminApi + ADVANTAGE}/all`)
    },
    postAdvantage(store, payload) {
      const formData = new FormData()
      formData.append('multipartFile', payload.data.formData)
      return uploadPostAxios(`${environment.adminApi + ADVANTAGE}/save?name=${payload.data.name}`, formData)
    },
    putAdvantage(store, payload) {
      const formData = new FormData()
      formData.append('multipartFile', payload.data.formData)
      return uploadAxios(`${environment.adminApi + ADVANTAGE}/update/${payload.data.id}?convenienceName=${payload.data.convenienceName}`, formData)
    },
    deleteAdvantage(store, payload) {
      return deleteAxios(`${environment.adminApi + ADVANTAGE}/delete/${payload.data[0].id}`)
    },
  },
  getters: {},
  modules: {
  },
}
