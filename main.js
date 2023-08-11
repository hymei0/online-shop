import App from './App'
import store from './utils/store.js'

store.dispatch('fetchshopCarData') // 发起异步请求获取后端数据

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	 el: '#app',
	  store,
	  render: h => h(App)
  // ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif