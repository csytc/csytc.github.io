import axios from "axios"
export function request(config, success, fail) {
    // //1.创建axios实例
    // const instance1 = axios.create({
    //         baseURL: "http://123.207.32.32:8000",
    //         timeout: 5000
    //     })
    //     //2发送真正的网络请求
    // instance1(config).then(res => {
    //     // console.log(res);
    //     success(res);
    // }).catch(err => {
    //     // console.log(err)
    //     fail(err);
    // })

    //或者：
    // return new Promise((resolve, reject) => {
    //     const instance1 = axios.create({
    //             baseURL: "http://123.207.32.32:8000",
    //             timeout: 5000
    //         })
    //         //2发送真正的网络请求
    //     instance1(config).then(res => {
    //         // console.log(res);
    //         resolve(res)
    //     }).catch(err => {
    //         // console.log(err)
    //         reject(err)
    //     })
    // })

    //再或者 一：
    const instance1 = axios.create({
            baseURL: "http://123.207.32.32:8000",
            timeout: 5000
        })
        //2.aios的拦截器,请求成功调用第一个函数，失败调用第二个函数
    instance1.interceptors.request.use(config => {
        console.log(config);
        //在这里需要做什么：1.比如config中的信息不符合服务器的要求
        //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        //3.某些网络请求(比如登录(token))，必须携带一些特殊的信息
        // 拦截后需要返回，不然就会报错
        return config
    }, err => {
        console.log(err);
    });
    //二：响应拦截
    instance1.interceptors.response.use(res => {
            console.log(res)
            return res.data;
        }, err => {
            console.log(err);
        })
        //三：发送真正的网络请求
    return instance1(config);
}