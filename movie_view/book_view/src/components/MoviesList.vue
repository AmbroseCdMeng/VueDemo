<template>
    <!--电影列表展示组件-->
  <div class="movieList">
    <div>
      <router-link :to="url" class="goods-list-link">movie name</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MoviesList"
    }
</script>

<style scoped>
.movieList{
  padding: 5px;
  border-bottom: 1px solid #ababab;
}
</style>
