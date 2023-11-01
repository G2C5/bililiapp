//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
//引入各个模块化仓库
import recommend from './home/recommend.js'
//创建并暴露store
export default new Vuex.Store({
    modules: {
        recommend
    }
})