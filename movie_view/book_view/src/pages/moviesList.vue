<template>
  <!--点击 navbar 后跳转的链接-->
  <div class="container">
    <div>
      <movie-index-header></movie-index-header>
    </div>
    <div class="contentMain">
      <div>
        <div class="contentLeft">
          <ul class="cont-ul">
            <movies-list></movies-list>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
  //引入相关包
  import MovieIndexHeader from '../components/MovieIndexHeader';
  import CommonFooter from '../components/CommonFooter';
  import MoviesList from '../components/MoviesList';

  export default {
    name: "moviesList",
    //初始化组件
    components: {
      MovieIndexHeader,
      CommonFooter,
      MoviesList
    },
  }
</script>

<style scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }

  .contentMain {
    padding-top: 150px;
  }

  .contentText {
    font-size: 15px;
    padding-top: 20px;
  }
</style>
