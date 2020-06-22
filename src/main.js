import Vue from 'vue'
import App from './App.vue'
import './scss/common.scss'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

