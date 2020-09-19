import Vue from 'vue'
import moment from 'vue-moment'
import momentT from 'moment-timezone'
import {store} from './store/store'
import App from './App.vue'

Vue.use(moment,{
  momentT
})

new Vue({
  el: '#app',
  store,
  components:{App},
  template:'<App/>'
});
