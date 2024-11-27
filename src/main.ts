import { createApp } from 'vue'
import './assets/main.less'
import App from './App.vue'
import VueDeviceDetect from '@basitcodeenv/vue3-device-detect'

const app = createApp(App)
app.use(VueDeviceDetect)
app.mount('#app')
