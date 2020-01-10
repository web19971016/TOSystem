import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = '';

/**
 * 设置超时时间
 */
axios.defaults.timeout = 10000;


/**
 * 设置请求传输数据的格式
 */
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = data => qs.stringify(data);


/**
 * 设置请求拦截器
 */
axios.interceptors.request.use(config => {

    return config
},error => {
    return Promise.reject(error)
});


/**
 * 设置响应拦截器
 */
axios.interceptors.response.use(response =>{
    return response.data
},error => {
    let {response} = error
    if (response){
        //服务器返回结果了 但不是200系列
    }else {
        //服务器没有返回结果
        if (!window.navigator.onLine){
            //断网处理，跳转至断网页面
            return
        }
        return Promise.reject(error)
    }
});

export default axios;
