<template>
  <!--新闻列表组件-->
  <div>
    <li class="goods-list"></li>
    <div class="newsList">
      <router-link :to="url" class="goods-list-link">title</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewsList"
  }
</script>

<style scoped>
  .newsList {
    padding: 5px;
    font-size: 10px;
    border-bottom: 1px dashed #ababab;
  }
</style>
