export const getToken = () => localStorage.getItem('token')

export const setToken = token => {
  localStorage.setItem('token', token)
}
export const removeToken = () => {
  localStorage.removeItem('token')
}
export const getDarkTheme = () => localStorage.getItem('dark_theme')
export const setDarkTheme = theme => {
  localStorage.setItem('dark_theme', theme)
}
export const Role = {
  Admin: 'ROLE_ADMIN',
  User: 'ROLE_USER',
}

export function debounce (fn, delay) {
  let timeoutID = null
  return function () {
    clearTimeout(timeoutID)
    let args = arguments
    let that = this
    timeoutID = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}
