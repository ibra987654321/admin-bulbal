import axios from 'axios'
import store from '@/store'
import { getToken } from '@/helpers/helpers'

export const getAxios = url => {
  store.state.loading = true
  store.state.error = false
  return axios({
    method: 'GET',
    url,
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then(r => {
      store.state.loading = false
      return r.data
    })
    .catch(e => {
      store.state.loading = false
      store.commit('setError')
      store.commit('setSnackbars', e.message)
    })
}
export const postAxios = (url, payload, snackbars) => {
  store.state.loading = true
  store.state.error = false
  return axios({
    method: 'POST',
    url,
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    data: payload,
  })
    .then(r => {
      store.state.loading = false
      store.commit('setSnackbars', 'Успешно добавлено')
      return r.data
    })
    .catch(e => {
      store.state.loading = false
      if (snackbars) {
        store.commit('setSnackbars', snackbars)
        return
      }
      if (e.response) {
        store.commit('setSnackbars', e.response.data)
        return
      }
      store.commit('setError')
      store.commit('setSnackbars', e.message)
    })
}
export const postWithoutSnack = (url, payload) => {
  store.state.loading = true
  store.state.error = false
  return axios({
    method: 'POST',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    data: payload,
  })
    .then(r => {
      store.state.loading = false
      return r.data
    })
    .catch(e => {
      store.state.loading = false
      store.commit('setError')
      store.commit('setSnackbars', e.message)
    })
}
export const uploadPostAxios = (url, formData) => {
  store.state.loading = true
  store.state.error = false
  return axios.post(
    url,
    formData,
    {
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      //   Authorization: `Bearer ${getToken()}`,
      // },
    },
  )
    .then(r => {
      store.state.loading = false
      store.commit('setSnackbars', 'Успешно отправлено')
      return r.data
    })
    .catch(e => {
      store.state.loading = false
      store.commit('setError')
      store.commit('setSnackbars', e.message)
    })
}
export const uploadAxios = (url, formData) => {
  store.state.loading = true
  store.state.error = false
  return axios.put(
    url,
    formData,
    {
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      //   Authorization: `Bearer ${getToken()}`,
      // },
    },
  )
    .then(r => {
      store.state.loading = false
      store.commit('setSnackbars', 'Успешно отправлено')
      return r.data
    })
    .catch(e => {
      store.state.loading = false
      store.commit('setError')
      store.commit('setSnackbars', e.message)
    })
}

export const extraAxios = (method, url, payload) => {
  store.state.loading = true
  store.state.error = false
  axios({
    method: method,
    url,
    // headers: {
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${getToken()}`,
    // },
    data: payload,
  }).then(r => {
    store.state.loading = false
    store.commit('setSnackbars', 'Успешно изменено')
    return r.data
  })
    .catch(e => {
      store.state.loading = false
      store.commit('setError')
      store.commit('setSnackbars', e.message)
    })
}

export const putAxios = (url, payload) => {
  store.state.loading = true
  store.state.error = false
  return axios({
    method: 'PUT',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    data: payload,
  })
    .then(r => {
      store.state.loading = false
      store.commit('setSnackbars', 'Успешно изменено')
      return r.data
    })
    .catch(e => {
      store.state.loading = false
      if (e.response) {
        store.commit('setSnackbars', e.response.data)
        return
      }
      store.commit('setError')
      store.commit('setSnackbars', e.message)
    })
}
export const deleteAxios = (url, payload) => {
  store.state.loading = true
  store.state.error = false
  return axios({
    method: 'DELETE',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    data: payload,
  })
    .then(r => {
      r.data
      store.state.loading = false
      store.commit('setSnackbars', 'Успешно удалено')
    })
    .catch(e => {
      store.state.loading = false
      store.commit('setError')
      store.commit('setSnackbars', e.message)
    })
}
