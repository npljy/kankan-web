import { createStore } from 'vuex'
import modules from './modules'

const store = createStore({
  modules, // 模块

  state: {}, // 全局

  mutations: { }, // 全局

  actions: { }, // 全局

  getters: { } // 全局
})

export default store