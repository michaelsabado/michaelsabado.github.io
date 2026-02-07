import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { initializeTheme } from './composables/useTheme'

initializeTheme()

createApp(App).mount('#app')
