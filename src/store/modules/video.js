import { computed } from 'vue'
import _ from 'lodash'
import ajax from '../../utils/ajax'
import { Decrypt } from '../../utils/secret'
import config from '../../utils/config'

const configUrl = config.configUrl

export default {
  namespaced: true,
  state: () => ({
    configs: {},
    currentSiteIndex: [0]
  }),
  getters: {
    sites (state) {
      return state.configs.sites || []
    },
    currentSite (state, getters) {
      const index = state.currentSiteIndex
      const site = getters.sites[index]

      return site
    }
  },
  actions: {
    async getConfig ({ commit }) {
      const res = await ajax.get(configUrl)
      const { status, data } = res
      if (status === 200 && data) {
        const deData = Decrypt(data)
        const jsonData = JSON.parse(deData)
        console.log('获取在线配置：', jsonData)
        commit('updateConfigs', jsonData)
      }

    },
    async getSite ({ getters, commit }) {
      const siteUrl = getters.currentSite.api
      const res = await ajax.get(`${siteUrl}?ac=list`)
      console.log('getSite::::', res)
    }
  },
  mutations: {
    updateConfigs (state, payload) {
      state.configs = payload
    },
    changeSite (state, payload) {
      state.currentSiteIndex = payload
    }
  },
}
