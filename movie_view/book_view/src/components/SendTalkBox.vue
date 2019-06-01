<template>
    <!--发送邮件的对话框组件-->
    <div>
        <div>
            <input v-model="toUserName" type="text" placeholder="TO 用户名">
        </div>
        <div style="padding: 10px;">
            <input v-model="title" type="text" placeholder="邮件标题">
        </div>
        <div style="padding: 5px;">
            <textarea v-model="context" name="" id="" cols="30" rows="10" style="width: 80%; height: 50px;"
                      placeholder="内容"></textarea>
        </div>
        <div style="padding-top: 10px;">
            <button @click="send_mail">发送站内信</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SendTalkBox",
        data() {
            return {
                toUserName: '',
                context: '',
                title: '',
            }
        },
        methods: {
            send_mail(event) {
                let send_data = {
                    token: localStorage.token,
                    user_id: localStorage._id,
                    toUserName: this.toUserName,
                    title: this.title,
                    context: this.context,
                };
                this.$http.post('http://localhost:3000/users/sendEmail', send_data).then((data) => {
                    if(data.body.status === 1){
                        alert(data.body.message);
                    }else{
                        alert('发送成功');
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
