import Vue from 'vue'
import App from './App.vue'
import router from './router'
// rem适配引入
import 'lib-flexible/flexible'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


// new Vue({
//   el: '#app',
//   components: {
//     App
//   },
//   template: '<App/>',
//   // 注册路由器
//   router,
//   //注册仓库对象
//   // store
// })