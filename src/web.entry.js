import Vue from 'vue'
import App from './App.vue'
import moment from 'vue-moment'
import momentT from 'moment-timezone'


Vue.use(moment,{
  momentT
})
new Vue({
  el: '#app',
  components:{App},
  template:'<App/>'
});
