<template>
  <div class="container">
    <div>
      <movie-index-header></movie-index-header>
    </div>
    <div class="userMessage">
      <user-message></user-message>
    </div>

    <div>
      <div class="box">用户名：Username</div>
    </div>
    <div>
      <div class="box">用户邮箱：Email</div>
    </div>
    <div>
      <div class="box">用户电话：Tel</div>
    </div>
    <div>
      <div class="box">用户状态：IsStop</div>
    </div>
    <div>
      <button>修改密码</button>
    </div>

    <div>
      <div class="box">
        <label for="">输入旧密码：</label>
        <input type="password" placeholder="请输入旧密码">
      </div>
      <div class="box">
        <label for="">输入新密码：</label>
        <input type="password" placeholder="请输入新密码">
      </div>
      <div class="box">
        <label for="">确认新密码</label>
        <input type="password" placeholder="请确认新密码">
      </div>
      <div class="box">
        <button>修改密码</button>
      </div>
    </div>
    <div style="padding-top: 10px;">
      <router-link to="/sendMail">
        <button>发送站内信息</button>
      </router-link>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import MovieIndexHeader from '../components/MovieIndexHeader';
  import CommenFooter from '../components/CommonFooter';
  import UserMessage from '../components/UserMessage';

  export default {
    name: "userInfo",
    data() {
      return {}
    },
    components: {
      MovieIndexHeader,
      CommenFooter,
      UserMessage,
    }
  }
</script>

<style scoped>
  .box {
    display: inline-flex;
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }

  .userMessage {
    padding-top: 60px;
    margin-top: -10px;
    margin-left: -10px;
  }
</style>
