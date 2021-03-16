import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag-next";
import ElementUI from "element-plus";


const app = createApp(App);

app.use(router).use(ElementUI);
app.use(VueGtag, {
  property: {
    id: "G-15KE9R6Y9R"
  }
});

app.mount('#app');