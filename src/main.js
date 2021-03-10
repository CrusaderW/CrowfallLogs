import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag-next";
import ElementUI from "element-plus";
//import 'element-plus/lib/theme-chalk/index.css';
import store from './store.js';

const app = createApp(App);

app.use(store).use(router).use(ElementUI);
app.use(VueGtag, {
  property: {
    id: "G-15KE9R6Y9R"
  }
});

app.mount('#app');
