//import './style.css';

// 导入 Vue 框架
import Vue from "vue";

// 导入 vue-router 路由组件
import VueRouter from "vue-router";

// 导入 demo.vue 组件
import App from "./app.vue";

// 导入 Vuex 组件
import Vuex from 'vuex';

console.log("hello");

//使用路由组件
Vue.use(VueRouter);
//使用 vuex 组件
Vue.use(Vuex);

/**
 * 路由配置
 * 如下webpack 会将每一个路由都打包为一个 js 文件，当请求到该页面时，才去加载这个页面的 js ，也就是异步实现的懒加载
 * 如果需要一次性加载，可以这样写 componect:require('./views/inedex.vue')
 * 
 * 使用异步路由之后，编译出来的每个页面的 js 叫做 chunk，它们默认的命名为 0.main.js、1.main.js ...
 * 该命名可以在 output 中通过设置 chunkFilename 属性进行修改
 * 
 * 有了 chunk 之后，每个 .vue 页面的样式也需要在 web.config.js 配置后才会打包进 main.css，否则仍然会通过 js 动态创建 style 标签写入
 */
const Routers = [{
        //当前匹配的路径
        path: "/index",
        meta: {
            title: "首页",
        },
        //映射的组件
        component: resovle => require(["./views/index.vue"], resovle),
    },
    {
        path: "/about",
        meta: {
            title: "关于",
        },
        component: resolve => require(["./views/about.vue"], resolve),
    },
    {
        path: "*",
        redirect: "/index",
    },
    {
        //带参数的路由
        path: "/user/:id",
        meta: {
            title: "个人主页",
        },
        componect: resolve => require(["./views/user.vue"], resolve),
    },
];

const RouterConfig = {
    //使用 HTML5 的 History 路由模式。vue 默认的是 hash 模式
    //开启 History 路由模式，在生产环境时服务端必须进行配置，将所有的路由都指向同一个 HTML，或者设置 404 页面为该 HTML，否则刷新页面时会出现 404
    //同时 webpack-dev-server 也要配置支持 History 路由，在 package.json 中修改 dev 命令
    mode: "history",
    routes: Routers,
};

const router = new VueRouter(RouterConfig);

/**
 * 导航钩子统一处理路由
 * to: 即将要进入的目标路由对象
 * from: 当前导航即将要离开的路由对象
 * next: 调用该方法后，才能进入下一个钩子
 */
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

/**
 * 滚动某个位置再跳转另一个页面，滚动条返回顶端
 */
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

/**
 * 是否登录校验
 */
// router.beforeEach((to, from, next) => {
//   if (window.localStorage.getItem("token")) {
//     next(); //next 的参数为 false 时取消导航
//   } else {
//     next("./login"); //可以设置具体路径导航到指定页面
//   }
// });



/**
 * vuex 的配置
 * store 包含了应用的数据状态和操作过程。
 * Vuex 里的数据都是响应式的，任何组件使用同一 store 的数据时，只要 store 变化，对应的组件也会立即更新
 */
const store = new Vuex.Store({
    /**
     * 数据保存在 Vuex 的 state 字段中。
     * state 中的数据只能读取，不能手动改变。改变 state 中的数据唯一的途径就是显示的提交 mutations
     * 比如实现一个计数器
     * 在任何组件中，都可以通过 $store.state.count 读取
     */
    state: {
        count: 0,
        list: [1, 12, 23, 34, 45, 56, 67, 78, 89, 90]
    },
    /**
     * mutations 用来直接修改 state 中的数据
     * 在组件中，通过 this.$store.commit 方法来执行 mutations
     * 比如：this.$store.commit('increment')
     * mutations 的第二个参数，可以是数字、字符或对象。
     * 比如：decrease(state, n = 3) //这种设置默认值的语法时 ES6 的
     * 
     * mutation 中尽量避免异步操作
     * 因为异步操作，组件在 commit 之后无法做到立即更新
     */
    mutations: {
        increment(state) {
            state.count++;
        },
        decrease(state, n = 3) {
            state.count -= 3;
        },
        pushRandom(state) {
            state.list.push(Math.random() * 100);
        }
    },
    /**
     * getters 方法
     * getters 方法在这里的作用类似于计算属性
     * getters 方法也可以依赖其他的 getter 方法，把 getter 作为第二个参数
     */
    getters: {
        filteredList: state => {
            return state.list.filter(item => item % 2 == 0);
        },
        listCount: (state, getters) => {
            return getters.filteredList.length;
        }
    },
    /**
     * actions 和 mutations 类似。不同的是 action 里面提交可以进行异步操作业务逻辑
     * actions 通过 commit 方法提交方法，然后组件通过 $store.dispatch 触发（类似于子组件 $emit 传值 父组件on 监听的逻辑）
     */
    actions: {
        pushRandom(context) {
            context.commit('pushRandom');
        }
    }
})

// 创建 vue 实例
new Vue({
    el: "#app",

    //使用路由
    router: router,

    render: createElement => createElement(App),
    //等同于
    //render:function(createElement){
    //    return createElement(Demo);
    //}

    //等同于
    //render:createElement => {
    //    return createElement(Demo);
    //}

    //使用vuex
    store: store,
});