import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/bootstrap.min.css'
import './assets/styles/style.css'

createApp(App).use(router).mount('#app')
