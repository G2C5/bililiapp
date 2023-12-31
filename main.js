import App from './App'
import Mock from './mock/mock.js'


// #ifndef VUE3
import Vue from 'vue'
import store from './store/index.js'
import './uni.promisify.adaptor'
import uView from "uview-ui"

Vue.config.productionTip = false

Vue.use(uView);
App.mpType = 'app' 
const app = new Vue({
  ...App,
  store
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