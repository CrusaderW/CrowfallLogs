import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from "element-plus";
import 'element-plus/lib/theme-chalk/index.css';
import store from './store.js';



createApp(App).use(store).use(router).use(ElementUI).mount('#app')
