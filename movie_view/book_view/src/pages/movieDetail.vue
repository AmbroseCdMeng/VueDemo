<template>
    <!--详情页-->
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <div class="">
                <h1>{{detail.movieName}}</h1>
                <div class="viewNum">下载次数：{{detail.movieNumDownload}}</div>
            </div>
            <div class="">
                <button @click="movieDownload()">点击下载</button>
            </div>
            <div>
                <img class="headerImg" :src="detail.movieImg" alt="加载失败">
            </div>
            <div class="btnPosition" @click="support()">
                <div class="SupportBtn">点赞
                    <div>{{detail.movieNumSuppose}}</div>
                </div>
            </div>
        </div>
        <div>
            <comment :movie_id="movie_id"></comment>
        </div>
        <div>
            <common-footer></common-footer>
        </div>
    </div>
</template>

<script>
    import MovieIndexHeader from '../components/MovieIndexHeader';
    import CommonFooter from '../components/CommonFooter';
    import Comment from '../components/Comment';

    let movie_id = 0;

    export default {
        name: "movieDetail",
        data() {
            return {
                detail: [],
            }
        },
        components: {
            MovieIndexHeader,
            CommonFooter,
            Comment,
        },
        created() {
            this.movie_id = this.$route.query.id;
            movie_id = this.$route.query.id;
            this.$http.post('http://localhost:3000/movie/detail', {id:movie_id}).then((data) => {
                this.detail = data.body.data;
            })
        },
        methods: {
            support: function (event) {
                this.$http.post('http://localhost:3000/movie/support', {id: movie_id}).then((data) => {
                    let data_temp = data.body;
                    let that = this;
                    console.log(data_temp);
                    if (data_temp.status === 0) {
                        this.$http.post('http://localhost:3000/movie/showNumber', {id: movie_id}).then((data_num) => {
                            that.detail['movieNumSuppose'] = data_num.body.data.movieNumSuppose
                        });
                    } else {
                        alert(data_temp.message);
                    }
                })
            },
            movieDownload: function (event) {
                this.$http.post('http://localhost:3000/movie/download', {movie_id: movie_id}).then((reback) => {
                    if (reback.status === 1) {
                        alert(reback.message)
                    } else {
                        window.location = reback.data;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .headerImg {
        height: 200px;
    }

    .container {
        width: 100%;
        margin: 0 auto;
    }

    .contentMain {
        padding-top: 150px;
    }

    .btnPosition {
        padding-left: 48%;
    }

    .SupportBtn {
        border: solid 1px #000;
        width: 60px;
    }

    .viewNum {
        font-size: 10px;
    }
</style>
