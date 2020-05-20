import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 1000
    },
    mutations: {
        //方法，参数默认是state对象,以后如果要修改state里面的数据大多是需要mutations进行修改
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--;
        }
    },
    actions: {},
    modules: {}
})