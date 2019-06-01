<template>
    <!--评论组件-->
    <div>
        <label for="">评论</label>
        <hr>
        <div>
            <li v-for="item in items">{{item.username}} 评论：{{item.context}}</li>
        </div>
        <div style="padding: 5px;">
      <textarea v-model="context" name="" id="" cols="30" rows="10" style="width: 80%; height: 50px;"
                placeholder="内容"></textarea>
        </div>
        <div style="padding-top: 10px">
            <button v-on:click="send_comment()">评论</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        props: ['movie_id'],
        data() {
            return {
                items: [],
                context: ''
            }
        },
        created() {
            this.$http.post('http://localhost:3000/movie/comment', {id: this.movie_id}).then((data) => {
                if (data.body.status === 0) {
                    this.items = data.body.data;
                } else {
                    alert('获取失败');
                }
            })
        },
        methods: {
            send_comment(event) {
                let send_data;
                if (typeof (localStorage.username) != 'undefined') {
                    send_data = {
                        movie_id: this.movie_id,
                        context: this.context,
                        username: localStorage.username
                    }
                }else {
                    send_data = {
                        movie_id:this.movie_id,
                        context:this.context
                    }
                }
                this.$http.post('http://localhost:3000/users/postComment', send_data).then((data) => {
                    alert(data.body.message);
                })
            }
        }
    }
</script>

<style scoped>

</style>
