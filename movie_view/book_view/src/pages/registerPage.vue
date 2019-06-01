<template>
    <div>
        <div>
            <div>
                <div class="box">
                    <label for="">用户名：</label>
                    <input v-model="username" type="text" placeholder="请输入用户名">
                </div>
                <div class="box">
                    <label for="">输入密码：</label>
                    <input v-model="password" type="password" placeholder="请输入密码">
                </div>
                <div class="box">
                    <label for="">再次输入密码：</label>
                    <input v-model="repassword" type="password" placeholder="请再次输入密码">
                </div>
                <div class="box">
                    <label for="">输入邮箱：</label>
                    <input v-model="userMail" type="email" placeholder="请输入邮箱">
                </div>
                <div class="box">
                    <label for="">输入手机</label>
                    <input v-model="userPhone" type="tel" placeholder="请输入手机">
                </div>
                <div class="box">
                    <button @click="userRegister()">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "registerPage",
        data() {
            return {
                username: '',
                password: '',
                repassword: '',
                userMail: '',
                userPhone: '',
            }
        },
        methods: {
            userRegister(event) {
                if(this.password != this.repassword){
                    alert('两次密码不一致');
                }else{
                    let sendData = {
                        username:this.usernmae,
                        password:this.password,
                        userMail:this.userMail,
                        userPhone:this.userPhone,
                    };
                    this.$http.post('http://localhost:3000/users/register', sendData).then((data) =>{
                        if(data.body.status === 1){
                            alert(data.body.message);
                        }else {
                            alert(data.body.message);
                            this.$router.go(-1);
                        }
                    })
                }
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
