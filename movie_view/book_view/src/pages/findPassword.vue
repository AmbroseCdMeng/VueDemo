<template>
    <div>
        <div>
            <div v-show="showUserInfo">
                <div class="box">
                    <label for="">用户名：</label>
                    <input v-model="username" type="text" placeholder="请输入用户名">
                </div>
                <div class="box">
                    <label for="">输入邮箱：</label>
                    <input v-model="userMail" type="email" placeholder="请输入邮箱">
                </div>
                <div class="box">
                    <label for="">输入手机：</label>
                    <input v-model="userPhone" type="tel" placeholder="请输入手机">
                </div>
                <div class="box">
                    <button @click="checkUser()">找回密码</button>
                </div>
            </div>


            <div v-show="showRepassword">
                <div class="box">
                    <label for="">新密码：</label>
                    <input v-model="repassword" type="password" placeholder="请输入新密码">
                </div>
                <div class="box">
                    <button @click="changeUserPassword()">修改密码</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "findPassword",
        data() {
            return {
                username: '',
                userMail: '',
                userPhone: '',
                repassoword: '',
                showRepassword: false,
                showUserInfo: true,
            }
        },
        methods: {
            checkUser(event) {
                this.$http.post('http://localhost:3000/users/findPassword', {
                    username: this.username,
                    userMail: this.userMail,
                    userPhone: this.userPhone
                }).then((data) => {
                    if (data.body.status === 1) {
                        alert(data.body.message);
                    } else {
                        alert(data.body.message);
                        this.showRepassword = true;
                        this.showUserInfo = false;
                    }
                })
            },
            changeUserPassword(event) {
                this.$http.post('http:localhost:3000/users/findPassword', {
                    username: this.username,
                    userMail: this.userMail,
                    userPhone: this.userPhone
                }).then((data) =>{
                    if(data.body.status === 1){
                        alert(data.body.message);
                    } else {
                        alert(data.body.message);
                        this.$router.go(-1);
                    }
                })
            },
        }
    }
</script>

<style scoped>
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
</style>
