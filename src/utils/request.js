/**
 * 1.全局配置
 * 2.响应拦截
 * 3.请求方法
 * 4.封装对象
 */
import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',
    timeout: 1000000,
    headers: {
        'Content-Type': 'application/json'
    }
})

const request = {
    get(url, params = {}) {
        return instance.get(url, { params })
    },
    post(url, data = {}) {
        return instance.post(url, data)
    },
    put(url, data = {}) {
        return instance.put(url, data)
    },
    delete(url, params = {}) {
        return instance.delete(url, { params })
    }
}
//请求拦截器
instance.interceptors.request.use(config=>{
    const token = localStorage.getItem('jwt')
    if (token){
        config.headers.Authorization = `Bearer${token}`//将jwt token添加到请求头中
    }
    return config
})

export default request
