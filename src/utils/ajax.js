import axios from 'axios'

const _ajax = axios.create({
  timeout: 15000
})

// 注册请求拦截器
_ajax.interceptors.request.use(
  config => {
      return config
  },
  error => {
      // 对请求错误做些什么
      return error
  }
)

// 注册响应拦截器
_ajax.interceptors.response.use(
  response => {
      // 对响应数据做点什么
    console.log('response.status:', response.status)
    if (response.status !== 200) {
      throw new Error('未知错误，请重试或者稍后重试')
    }
    return response
  },
  error => {
      // 对响应错误做点什么
      return error
  }
)

export default _ajax