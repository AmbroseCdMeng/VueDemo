<template>
  <!--Router 中路由设置 user/:id 。: 为路径的定义参数。匹配到路由时，参数值会被设置到 this.$route.params 中，可以在组件中使用-->
  <div>
    <span>用户页面。Hello {{ $route.params.id}}</span>

    <p>路由跳转</p>
    <router-link :to="{name:'user', params:{id:'Meng'}}">Jump to router named User</router-link>
  </div>
</template>

<script>
  import router from 'vue-router';

  export default {
    name: "User"
  }

  //router.go(1);
  //router.push('home');
  // router.push({path:'home'});
</script>

<style scoped>

</style>
