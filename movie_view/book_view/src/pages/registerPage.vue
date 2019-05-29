<template>
    <div>
      <div>
        <div>
          <div class="box">
            <label for="">用户名：</label>
            <input type="text" placeholder="请输入用户名">
          </div>
          <div class="box">
            <label for="">输入密码：</label>
            <input type="password" placeholder="请输入密码">
          </div>
          <div class="box">
            <label for="">再次输入密码：</label>
            <input type="password" placeholder="请再次输入密码">
          </div>
          <div class="box">
            <label for="">输入邮箱：</label>
            <input type="email" placeholder="请输入邮箱">
          </div>
          <div class="box">
            <label for="">输入手机</label>
            <input type="tel" placeholder="请输入手机">
          </div>
          <div class="box">
            <button>注册</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "registerPage",
      data(){
          return {}
      }
    }
</script>

<style scoped>
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
</style>
