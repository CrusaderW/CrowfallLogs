import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import ElementUI from "element-plus";
import 'element-plus/lib/theme-chalk/index.css';

const charachterPlannerModule = {
    namespaced: true,
    state() {
        return {
            selectedClass: "",
            selectedRace: "Race",
            selectedDomain: "Domain"
        }
    },
    mutations: {
        changeClass(state, payload) {// "state" => vuex gives us latest state + "payload" => second argument 'payload' i.e. data package that can be appended
            state.selectedClass = payload;
        }
    },
    actions: { // BEST PRACTICE to use actions to run between component and mutations (are allowed to run asynchronous code)
        changeClass(context, payload) { // action can be named the same as mutation (often makes sense) + receive "context"
            context.commit('changeClass', payload.classname); // this action commits the mutation changeClass. Here you can also pass a payload 
        }
    },
    getters: {
        finalClass(state) { // state provided, and can also pass 'getters' if want to have other getters available here
            return state.selectedClass; // a getter NEEDS to RETURN a value
        }
    }
}

const store = createStore({
    modules: {
        charPlanner: charachterPlannerModule // as if the code was directly in the store
    },
    state() {
        return {
        }
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    },
})

createApp(App).use(store).use(router).use(ElementUI).mount('#app')
