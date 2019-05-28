import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueResource from 'vue-resource'

import vueResource from 'vue-router';
import axios from 'axios';

import IndexPage from '../pages/index';
import ShowText from '../components/ShowText';
import ShowHtml from "../pages/ShowHtml";
import JSExpression from "../pages/JSExpression";
import Directives from "../pages/Directives";
//import Computed from '../pages/Computed';

import RobotTest from '@/components/RobotTest';

Vue.use(Router);
Vue.use(VueResource);
Vue.use(vueResource);
// Vue.use(axios);  //这样引用不晓得为嘛报错，下面这样就好了
Vue.prototype.$ajax = axios;

/*定义路由*/
const routes = [
  {
    path: '/',
    meta: {
      title: 'home'
    },
    component: IndexPage
  },
  /*纯文本显示*/
  {
    path: '/ShowText',
    component: ShowText,
  },
  /*HTML显示*/
  {
    path: '/ShowHtml',
    component: ShowHtml
  },
  /*JavaScript 表达式*/
  {
    path: '/JSExpression',
    component: JSExpression
  },
  /*指令参数*/
  {
    path: '/Directives',
    component: Directives,
  },
  /*计算属性*/
  {
    path: '/Computed',
    //component: Computed,
  },
  /*API 机器人聊天*/
  {
    path:'/RobotTest',
    component:RobotTest,
  },
];

export default new Router({
  routes: routes
})
