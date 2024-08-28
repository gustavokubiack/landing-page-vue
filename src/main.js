import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import api from './services/axiosConfig';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.$axios = api; 

app.mount('#app')
