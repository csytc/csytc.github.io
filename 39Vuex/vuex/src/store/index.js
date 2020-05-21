import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
    //创建module的对象
const moduleA = {
    state: {
        name: "张三"
    },
    mutations: {
        updatename(state, payload) {
            state.name = payload
        }
    },
    getters: {
        fullName(state) {
            return state.name + "111"
        },
        //模块里面可以传入第三个元素
        fullName2(state, getters, rootState) {
            return getters.fullName + rootState.counter
        }
    },
    actions: {
        updateName(context) {
            //模块里面调用commit只会调用自己的mutations
            setTimeout(() => {
                context.commit("updatename", "wangwu")
            })
        }
    }
}





export default new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            { id: 110, name: "aaa", age: 18 },
            { id: 111, name: "bbb", age: 22 },
            { id: 112, name: "ccc", age: 34 },
            { id: 113, name: "ddd", age: 10 }
        ],
        Info: {
            name: "csy",
            age: 18
        }
    },
    mutations: {
        //方法，参数默认是state对象,以后如果要修改state里面的数据大多是需要mutations进行修改
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--;
        },
        incrementCount(state, num) {
            state.counter += num
                //如果说以特殊提交风格的话，那么此时的num传过来的就是一个对象
                //state.counter += num.count
        },
        updateInfo(state) {
            state.Info.name = "abc"
                //响应式添加数据
                // Vue.set(state.Info, "address", "hefei");
                //响应式删除数据
                // Vue.delete(state.Info,"age")
        }
    },
    actions: {
        //默认参数context上下文
        // aUpdateInfo(context, payload) {
        //     setTimeout(() => {
        //         context.commit("updateInfo")
        //         console.log(payload.message);
        //         payload.success()
        //     }, 2000)
        // }

        //使用promise写法
        aUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit("updateInfo")
                    console.log(payload)
                    resolve("111")
                }, 2000)
            })
        }
    },
    modules: {
        a: moduleA,
        b: {
            state: {},
            mutations: {},
            actions: {},
            getters: {}
        }
    },
    getters: {
        //参数默认是state对象,以后如果要修改state里面的数据大多是需要mutations进行修改
        power(state) {
            return state.counter * state.counter
        },
        filters(state) {
            return state.students.filter(s => s.age >= 20)
        },
        //获取年龄大于20的人的个数
        more20length(state, getters) { //第二个参数为getters对象
            return getters.filters.length
        },
        //获取年龄大于任意给定的值
        moreAgestu(state) {
            return function(age) {
                return state.students.filter(s => s.age >= age)
            }
        }
    }
})