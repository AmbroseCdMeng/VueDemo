// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Routers from './router'
//console.log(Routers);

/*iView 配置文件*/
import iView from 'iview';
import 'iView/dist/styles/iview.css';

Vue.use(VueRouter)
Vue.use(iView)

const RouterConfig = {
  routes:Routers.options.routes
}

const router = new VueRouter(RouterConfig);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router:Routers,
  router:router,
  // router:new VueRouter({
  //       routes: Routers.options.routes
  //     }
  // ),
  components: { App },
  template: '<App/>',
  render :h=>h(App)
})
