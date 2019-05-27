//引入相关代码包
import Vue from 'vue'
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import User from "@/components/User";
import VIP from "@/components/VIP";

//使用引入的包
Vue.use(Router);

//定义路由
export default new Router({
  //mode: 'history',
  mode: 'hash',//Vue 默认的模式是 hash。其特点是 URL 后会有一个 #，目的是在访问地址中传参。方便对浏览器前进、后退、跳转功能使用
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/user/:id',
      component: User,
      /*命名路由，方便标识*/
      name: 'user',
      /*嵌套路由*/
      children: [
        {
          path: 'vip',
          component: VIP,
        }
      ]
    }
  ],
})
