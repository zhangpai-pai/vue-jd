import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
//mint-UI 组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
