<template>
    <div>
        <div>
            <div>
                <div class="box">
                    <label for="">用户名：</label>
                    <input v-model="username" type="text" placeholder="请输入用户名">
                </div>
                <div class="box">
                    <label for="">密码：</label>
                    <input v-model="password" type="password" placeholder="请输入密码">
                </div>
                <div class="box">
                    <button @click="userLogin()">登录</button>
                    <button style="margin-left: 10px" @click="userRegister()">注册</button>
                    <button style="margin-left: 10px" @click="findBackPassword()">忘记密码</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loginPage",
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            userLogin: function (event) {
                this.$http.post('http://localhost:3000/users/login', {
                    username: this.username,
                    password: this.password
                }).then((data) => {
                    if (data.body.status === 1) {
                        alert(data.body.message);
                    } else {
                        let save_token = {
                            token: data.body.data.token,
                            username: this.username,
                        };
                        localStorage.setItem('token', data.body.data.token);
                        localStorage.setItem('username', data.body.data.username);
                        localStorage.setItem('_id', data.body.data.user[0]._id);
                        this.$router.go(-1);
                    }
                })
            },
            userRegister:function(event){
                this.$router.push({path:'register'});
            },
            findBackPassword:function (event) {
                this.$router.push({path:'findPassword'});
            }
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
