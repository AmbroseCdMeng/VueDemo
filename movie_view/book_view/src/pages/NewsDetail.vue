<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <h1>{{detail.articleTitle}}</h1>
            <div>{{detail.articleTime}}</div>
            <div class="contentText">{{detail.articleContext}}</div>
        </div>
        <comment :movie_id="article_id"></comment>
        <div>
            <common-footer></common-footer>
        </div>
    </div>
</template>

<script>
    import MovieIndexHeader from '../components/MovieIndexHeader';
    import CommonFooter from '../components/CommonFooter';
    import Comment from '../components/Comment';

    export default {
        name: "NewsDetail",
        components: {
            MovieIndexHeader,
            CommonFooter,
            Comment,
        },
        data() {
            return {
                detail: [],
                article_id: ''
            }
        },
        created() {
            this.article_id = this.$route.query.id;
            this.$http.post('http://localhost:3000/articleDetail', {article_id: this.article_id}).then((data) => {
                this.detail = data.body.data[0];
                this.detail.articleTime = new Date(parseInt(this.detail.articleTime)).toLocaleDateString();
            })
        },
        methods:{

        }
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
