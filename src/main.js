import { createApp } from 'vue'
import App from './App.vue'
import { ElButton } from 'element-plus'
import router from '@/router'

const app = createApp(App)
app.use(router)
app.use(ElButton)
app.mount('#app')
