import { createApp } from 'vue'

import router from '@/routers'

import '@/styles'
import App from '@/App'

console.log(process.env.NODE_ENV)
console.log(process.env.BASE_ENV)

createApp(App)
.use(router)
.mount('#root')