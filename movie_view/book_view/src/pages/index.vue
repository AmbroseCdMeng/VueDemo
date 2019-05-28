<template>
  <!--主页-->
  <div class="container">

    <!--引入页面头部组件-->
    <div>
      <movie-index-header></movie-index-header>
    </div>

    <!--引入用户信息组件-->
    <div class="userMessage">
      <user-message></user-message>
    </div>

    <!--引入大图片组件-->
    <div class="contentPic">
      <index-header-pic></index-header-pic>
    </div>


    <!--列表区域-->
    <div class="contentMain">
      <!--引入电影列表组件-->
      <div>
        <div class="contentLeft">
          <ul class="cont-ul">
            <movies-list></movies-list>
          </ul>
        </div>
      </div>

      <!--引入新闻列表组件-->
      <div>
        <div class="contentRight">
          <ul class="cont-ul">
            <news-list></news-list>
          </ul>
        </div>
      </div>
    </div>

    <!--引入页面底部组件-->
    <common-footer></common-footer>
  </div>
</template>

<script>
  /*导入组件*/
  import MovieIndexHeader from '../components/MovieIndexHeader';
  import CommonFooter from '../components/CommonFooter';
  import NewsList from '../components/NewsList';
  import MoviesList from '../components/MoviesList';
  import IndexHeaderPic from '../components/IndexHeaderPic';
  import UserMessage from '../components/UserMessage';

  export default {
    name: "index",

    /*数据*/
    data() {
      return {}
    },

    /*引用组件*/
    components: {
      MovieIndexHeader,
      CommonFooter,
      NewsList,
      MoviesList,
      IndexHeaderPic,
      UserMessage
    },

    /*实例创建时加载数据*/
    created() {
      //获取主页数据
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }

  .contentMain {
    height: 50px;
  }

  。userMessage {
    padding-top: 60px;
    margin-top: -10px;
    margin-left: -10px;
  }

  .contentPic{
    padding-top: 5px;
  }

  .contentLeft{
    width: 60%;
    float: left;
    margin-left: 5px;
    border-top: 1px solid #000000;
  }

  .contentRight{
    width: 38%;
    margin-left: 1%;
    margin-top: 5px;
    float: left;
    border-top: 1px solid #000000;
  }

  .cont-ul{
    padding-top: 0.5rem;
    background-color: #ffffff;
  }

  .cont-ul::after{
    content:'';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
