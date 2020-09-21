import Vue from 'vue'
import Vuex from 'vuex'
import momentT from 'moment-timezone'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        currentYear:2020,
        currentMonth:9,
        clientX:0,
        clientY:0,
        activeFormEvent:false,
        eventLists:[],
        eventFormDate:momentT()
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
        },
        createEvent(state,payload){
            state.eventLists.push({
                description: payload,
                date: state.eventFormDate
            })
        },
        eventFormDate(state,payload){
            state.eventFormDate = payload
        }
    }
})
