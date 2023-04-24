import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import configs from "@/views/Configs/store/index"
import dashboard from "@/views/dashboard/store/index"
import { environment } from '@/environments/environment'
import { setToken } from '@/helpers/helpers'
import router from '@/router'
import { postAxios, postWithoutSnack } from '@/helpers/actions'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    start: new Date(),
    end: new Date(Date.now()),
    error: '',
    snackbars: {
      snackbar: false,
      text: '',
      timeout: 10,
    },
    mainPageData: [],
  },
  mutations: {
    setMainData(state, data) {
      state.mainPageData.push(...data)
    },
    setError(state, error) {
      state.error = error
      state.snackbars.snackbar = true
      state.snackbars.text = error
      state.snackbars.timeout = 1000
    },
    setSnackbars(state, text) {
      state.snackbars.snackbar = true
      state.snackbars.text = text
      state.snackbars.timeout = 3000
    },
    setLoading(state, v) {
      state.loading = v
    },
  },
  actions: {
    login({ commit }, payload) {
      return axios(`${environment.mainApi}/login/auth`, {
        method: 'POST',
        data: {
          ...payload,
        },
      })
        .then(res => {
          if (res.data.token) {
            setToken(res.data.token)
            router.push({ name: 'dashboard' })
          }
        })
        .catch(error => {
          commit('setError', error.response.status)
        })
      // eslint-disable-next-line no-unreachable
      router.push({ name: 'dashboard' })
    },
    getMainPageData(store, select) {
      store.commit('setLoading', true)
      const data = {
        start: moment(store.rootState.start).format().slice(0, 19),
        end: moment(store.rootState.end).format().slice(0, 19),
        type: select,
      }
      return postWithoutSnack(`${environment.adminApi}/approve/getAdminApprovePage`, data)
        .then(r => {
          store.commit('setLoading', false)
          return r
        }).catch(e => {
          store.commit('setLoading', false)
          console.log(e.message)
        })
    },
  },
  getters: {
    error: state => state.error,
    createdDate(state) {
      return state.start.setHours(state.start.getHours() - 72)
    },
  },
  modules: {
    dashboard,
    configs,
  },
})
