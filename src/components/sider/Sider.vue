<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import _ from 'lodash'
import { PlaySquareOutlined } from '@ant-design/icons-vue'

const store = useStore()
const sites = computed(() => store.getters['video/sites'])
const selectedKeys = computed(() => store.state.video.currentSiteIndex)

const changeSite = (index) => {
  store.commit('video/changeSite', [index])
  store.dispatch('video/getSite')
}
</script>

<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    collapsible
  >
    <div class="logo">
      <img
        class="logo-img"
        src="../../assets/logo.png"
        alt="看看影院"
        title="价值200万的圆角设计"
      >
    </div>

    <a-menu
      theme="dark"
      mode="inline"
      v-model:selectedKeys="selectedKeys"
    >
      <template
        v-for="(site, index) in sites"
        :key="index"
      >
        <template v-if="site.api">
          <a-menu-item
            :key="index"
            :data-index="index"
            @click="changeSite(index)"
          >
            <play-square-outlined />
            <span>{{site.name}}</span>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
}
.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 14px; /* 价值200万的圆角设计 */
}
</style>
