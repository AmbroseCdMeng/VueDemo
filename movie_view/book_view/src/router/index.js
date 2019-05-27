import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueResource from 'vue-resource'

import IndexPage from  '../pages/index';
import ShowText from '../components/ShowText';
import ShowHtml from "../pages/ShowHtml";
import JSExpression from "../pages/JSExpression";
import Directives from "../pages/Directives";

Vue.use(Router);
Vue.use(VueResource);

/*定义路由*/
const routes = [
  {
    path: '/',
    meta:{
      title:'home'
    },
    component:IndexPage
  },
  /*纯文本显示*/
  {
    path:'/ShowText',
    component:ShowText,
  },
  /*HTML显示*/
  {
    path:'/ShowHtml',
    component:ShowHtml
  },
  /*JavaScript 表达式*/
  {
    path:'/JSExpression',
    component:JSExpression
  },
  /*指令参数*/
  {
    path:'/Directives',
    component:Directives,
  },
];

export default new Router({
  routes: routes
})
