import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        currentYear:2020,
        currentMonth:9,
        clientX:0,
        clientY:0,
        activeFormEvent:false
    },
    mutations:{
        setCurrentMonth(state,payload){
            state.currentMonth = payload
        },
        setCurrentYear(state,payload){
                state.currentYear = payload
        },
        eventFormPos(state,payload){
            state.clientX = payload.x;
            state.clientY = payload.y;
        },
        toggleFormEvent(state,payload){
            state.activeFormEvent = payload
        }
    }
})
