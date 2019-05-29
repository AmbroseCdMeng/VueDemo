<template>
  <div class="container">
    <div>
      <movie-index-header></movie-index-header>
    </div>
    <div class="userMessage">
      <user-message></user-message>
    </div>

    <label for="">收件箱</label>
    <div>
      <email-list></email-list>
    </div>
    <label for="">发件箱</label>
    <div>
      <email-list></email-list>
    </div>
    <send-talk-box></send-talk-box>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import MovieIndexHeader from '../components/MovieIndexHeader';
  import CommonFooter from '../components/CommonFooter';
  import UserMessage from '../components/UserMessage';
  import EmailList from '../components/EmailList';
  import SendTalkBox from '../components/SendTalkBox';

  export default {
    name: "sendEmail",
    data() {
      return {}
    },
    components: {
      MovieIndexHeader,
      CommonFooter,
      UserMessage,
      EmailList,
      SendTalkBox,
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
