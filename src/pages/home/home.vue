<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import Sider from '../../components/sider/Sider.vue'
import Header from '../../components/header/Header.vue'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb.vue'
import Content from '../../components/content/Content.vue'
import Footer from '../../components/footer/Footer.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('video/getConfig')
})

</script>

<template>
  <a-layout class="layout">
    <Sider />
    <a-layout class="layout">
      <Header />
      <Content />
      <Footer />
    </a-layout>
  </a-layout>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}
</style>
