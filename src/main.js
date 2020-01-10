import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/api'
import VueWechatTitle from 'vue-wechat-title'
import './plugins/element.js'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(VueWechatTitle)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
