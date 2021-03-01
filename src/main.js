import App from './App.vue'
import router from './router'
import { createApp } from 'vue'

const instance = createApp(App)
instance.use(router)
instance.mount('#app')
