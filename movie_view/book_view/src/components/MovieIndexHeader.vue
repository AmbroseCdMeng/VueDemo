<template lang="html">
  <!--页面顶部组件-->
  <div class="header">
    <router-link to="/">
      <div class="header_menu">主页</div>
    </router-link>
    <router-link to="/movieList">
      <div class="header_menu">电影</div>
    </router-link>
  </div>

</template>

<script>
  export default {
    name: "MovieIndexHeader"
  }
</script>

<style scoped>
  /*scoped 表示样式应用于当前模块下。即类似于私有化*/
  .header {
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    top: 0;
    color: #000;
    background-color: #a5a5a5;
    border-bottom: 2px solid #000;
  }

  .header_menu {
    padding-left: 60px;
    padding-top: 20px;
    float: left;
    color: #ffffff;
  }
</style>
