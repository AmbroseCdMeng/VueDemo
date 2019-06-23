/**
 * 入口文件
 */

//引入 vue 组件
import Vue from 'vue';
//引入 app 入口组件
import App from './app.vue';
//引入 sytle.css
import './style.css';

new Vue({
    el: '#app',
    render: h => {
        return h(App)
    }
})