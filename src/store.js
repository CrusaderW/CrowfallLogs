import { createStore } from 'vuex'

const charachterPlannerModule = {
    namespaced: true,
    state() {
        return {
            selectedClass: "",
            selectedRace: "",
            selectedDomain: "",
            filteredDisciplines: []
        }
    },
    mutations: {
        changeClass(state, payload) {// "state" => vuex gives us latest state + "payload" => second argument 'payload' i.e. data package that can be appended
            state.selectedClass = payload;
        },
        changeRace(state, payload) {
            state.selectedRace = payload;
        },
        changeDomain(state, payload) {
            state.selectedDomain = payload;
        },
        changeFilteredDisciplines(state, payload) {
            state.filteredDisciplines = payload;
        }
    },
    actions: { // BEST PRACTICE to use actions to run between component and mutations (are allowed to run asynchronous code)
        changeClass(context, payload) { // action can be named the same as mutation (often makes sense) + receive "context"
            context.commit('changeClass', payload.classname); // this action commits the mutation changeClass. Here you can also pass a payload 
        },
        changeRace(context, payload) {
            context.commit('changeRace', payload.racename);
        },
        changeDomain(context, payload) {
            context.commit('changeDomain', payload.domainname);
        },
        changeFilteredDisciplines(context, payload) {
            context.commit('changeFilteredDisciplines', payload.newarray);
        }
        
    },
    getters: {
        finalClass(state) { // state provided, and can also pass 'getters' if want to have other getters available here
            return state.selectedClass; // a getter NEEDS to RETURN a value
        },
        finalRace(state) {
            return state.selectedRace;
        },
        finalDomain(state) {
            return state.selectedDomain;
        },
        finalDisciplines(state) {
            return state.filteredDisciplines;
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

export default store;