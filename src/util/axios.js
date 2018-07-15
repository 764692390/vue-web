import axios from 'axios'

const envConfig = {
  production: '/api/v1',
  development: 'http://localhost:8080/api/v1'
}

export const baseURL = envConfig[process.env.NODE_ENV || 'development']

export const HTTP = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
})

// 请求前的钩子函数
// HTTP.interceptors.request.use(function (config) {
//   config.headers.csrfToken = ''
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

// 请求后的钩子函数
// HTTP.interceptors.response.use(function (config) {

// }, function (error) {
//   return Promise.reject(error)
// })
