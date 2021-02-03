import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import ElementUI from "element-plus";
import 'element-plus/lib/theme-chalk/index.css';

const store = createStore({
    state() {
        return {
            counter: 0
        }
    }
})

createApp(App).use(store).use(router).use(ElementUI).mount('#app')
