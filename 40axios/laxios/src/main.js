import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

//1.基本使用
// axios({
//     url: "http://123.207.32.32:8000/home/multidata",

//     methods: "get" //使用什么方式进行请求
// }).then(res => {
//     console.log(res);
// })


// axios({
//     url: "http://123.207.32.32:8000/home/data",
//     params: { //专门针对get请求的参数拼接:http://123.207.32.32:8000/home/multidata?type=pop&page=1
//         type: "pop",
//         page: 1
//     }

// }).then(res => {
//     console.log(res);
// })


//2.axios发送并发请求
// axios.all([
//         axios({
//             url: "http://123.207.32.32:8000/home/multidata"
//         }),
//         axios({
//             url: "http://123.207.32.32:8000/home/data",
//             params: {
//                 type: "sell",
//                 page: 5
//             }
//         })
//     ]).then(result => {
//         console.log(result)
//     })
/*then(axios.spread((res1,res2)=>{
    spread可以将数组展开，可以分别拿到第一个和第二个结果
}))*/

//3.axios的全局配置信息
// axios.defaults.baseURL = "http://123.207.32.32:8000"
// axios.defaults.timeout = 5000
// axios.all([
//     axios({
//         url: "/home/multidata"
//     }),
//     axios({
//         url: "/home/data",
//         params: {
//             type: "sell",
//             page: 5
//         }
//     })
// ]).then(result => {
//     console.log(result)
// })

//创建对应的axios实例
// const instance1 = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
// })

// instance1({
//     url: "/home/multidata",

// }).then(res => {
//     console.log(res)
// })

// instance1({
//     url: "/home/data",
//     params: {
//         type: "pop",
//         page: 1
//     }
// }).then(res => {
//     console.log(res)
// })

//3.封装request模块
import { request } from "./network/request"
// request({
//     url: "/home/multidata",

// }, res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

//或者：
request({ url: "/home/multidata" }).then(res => {
    // console.log(res)
}).catch(err => {
    //console.log(err)
})