<template>
  <!--用户登录信息组件-->
  <div class="header">
    <router-link to="/loginPage">
      <div class="header_menu">登录</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "UserMessage"
  }
</script>

<style scoped>
.header{
  width:103%;
  height: 30px;
  left: 0;
  top: 0;
  color: #000;
  background-color: #C3BD5C;
}
  .header-menu{
    padding-right: 60px;
    padding-top: 10px;
    float: right;
    color: #ffffff;
    font-size: 8px;
  }
</style>
