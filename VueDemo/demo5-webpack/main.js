console.log("hello");

//import './style.css';


// 导入 Vue 框架
import Vue from 'vue';
// 导入 demo.vue 组件
import App from './app.vue';


// 创建 vue 实例
new Vue({
    el: '#app',
    render: createElement => createElement(App)
    //等同于
    //render:function(createElement){
    //    return createElement(Demo);
    //}

    //等同于
    //render:createElement => {
    //    return createElement(Demo);
    //}
})