<template>
    <!--主页-->
    <div class="container">

        <!--引入页面头部组件-->
        <div>
            <movie-index-header></movie-index-header>
        </div>

        <!--引入用户信息组件-->
        <div>
            <user-message></user-message>
        </div>

        <!--引入大图片组件-->
        <div class="contentPic">
            <index-header-pic v-for="item in headerItems" :key="item.id"
                              :recommendImg="item.recommendImg"
                              :recommendSrc="item.recommendSrc"
                              :recommendTitle="item.recommendTitle"></index-header-pic>
        </div>

        <!--列表区域-->
        <div class="contentMain">
            <!--改写成栅格布局-->
            <Row>
                <!--引入电影列表组件-->
                <i-col span="11" offset="1">
                    <!--使用 card 组件-->
                    <Card>
                        <p slot="title">
                            <Icon type="ios-film-outline"></Icon>电影
                        </p>
                        <ul class="cont-ul">
                            <movies-list v-for="item in movieItems" :key="item.id" :id="item._id"
                                         :movieName="item.movieName"
                                         :movieTime="item.movieTime"></movies-list>
                        </ul>
                    </Card>
                </i-col>
                <!--引入新闻列表组件-->
                <i-col span="10" offset="1">
                    <Card>
                        <p slot="title">
                            <Icon type="edit"></Icon>新闻
                        </p>
                        <ul class="cont-ul">
                            <news-list v-for="item in newsItems" :key="item.id" :id="item._id"
                                       :articleTitle="item.articleTitle"
                                       :articleTime="item.articleTime"></news-list>
                        </ul>
                    </Card>
                </i-col>
            </Row>



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
            return {
                headerItems: [],
                newsItems: [],
                movieItems: [],
            }
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
            //1、主页推荐
            this.$http.get('http://localhost:3000/showIndex').then((data) => {
                console.log(data.body.data);
                this.headerItems = data.body.data;
            });
            //2、获取新闻列表
            this.$http.get('http://localhost:3000/showArticle').then((data) => {
                console.log(data.body.data);
                this.newsItems = data.body.data;
            });
            //3、获取电影列表
            this.$http.get('http://localhost:3000/showRanking').then((data) => {
                console.log(data.body.data);
                this.movieItems = data.body.data;
            });
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        margin: 0 auto;
    }

    .contentMain {
        height: 15px;
    }

    .userMessage {
        padding-top: 60px;
        margin-top: -10px;
        margin-left: -10px;
    }

    .contentPic {
        padding-top: 5px;
    }

    .contentLeft {
        width: 60%;
        float: left;
        margin-left: 5px;
        border-top: 1px solid #000000;
    }

    .contentRight {
        width: 38%;
        margin-left: 1%;
        margin-top: 5px;
        float: left;
        border-top: 1px solid #000000;
    }

    .cont-ul {
        padding-top: 0.5rem;
        background-color: #ffffff;
    }

    .cont-ul::after {
        content: '';
        display: block;
        clear: both;
        width: 0;
        height: 0;
    }
</style>
