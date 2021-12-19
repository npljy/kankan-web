import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import store from './store'
import routes from './routes/routes'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
const app = createApp(App)


app.config.productionTip = false
app.use(store).use(routes).use(Antd).mount('#app')
