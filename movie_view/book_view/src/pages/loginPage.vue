<template>
    <div>
      <div>
        <div>
          <div class="box">
            <label for="">用户名：</label>
            <input type="text" placeholder="请输入用户名">
          </div>
          <div class="box">
            <label for="">密码：</label>
            <input type="password" placeholder="请输入密码">
          </div>
          <div class="box">
            <button>登录</button>
            <button style="margin-left: 10px">注册</button>
            <button style="margin-left: 10px">忘记密码</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "loginPage"
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
