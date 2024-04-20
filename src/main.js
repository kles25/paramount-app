import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)
app.use(router)
app.use(AOS)
app.use(Toast);
app.mount('#app')