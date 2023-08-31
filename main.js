import App from './App'
import store from './utils/store.js'



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
	if (!uni.getStorageSync('token')) {
	  uni.redirectTo({
	    url: '/pages/login/login'
	  })
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif