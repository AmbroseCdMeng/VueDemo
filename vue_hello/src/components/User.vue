<template>
  <!--Router 中路由设置 user/:id 。: 为路径的定义参数。匹配到路由时，参数值会被设置到 this.$route.params 中，可以在组件中使用-->
  <div>
    <span>用户页面。Hello {{ $route.params.id}}</span>

    <hr>
    <span>路由名称：{{$router.name}}</span>

    <p>路由跳转</p>
    <router-link :to="{name:'user', params:{id:'Meng'}}">Jump to router named User</router-link>

    <button @click="goHome">Go Home</button>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>

  export default {
    name: "User",

    methods:{
      goBack:function () {
        this.$router.go(-1);
      },
      goHome:function(){
        this.$router.push('/')
      }
    }

  }

</script>

<style scoped>

</style>
