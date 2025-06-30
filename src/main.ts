import { createApp } from 'vue'
import App from './App.vue' // ✅ зөв зам
import router from './router' // ✅ зөв бол router/index.ts эсвэл router.ts байх ёстой
import './assets/style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
