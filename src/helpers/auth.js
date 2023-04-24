import { getToken, removeToken } from '@/helpers/helpers'
import router from '@/router'
export function logOut() {
  removeToken()
  router.push({ name: 'pages-login' })
}

export function decodeJWT() {
  const base64Url = getToken().split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''))

  return JSON.parse(jsonPayload)
}
