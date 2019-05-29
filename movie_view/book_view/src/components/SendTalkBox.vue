<template>
    <!--发送邮件的对话框组件-->
  <div>
    <div>
      <input type="text" placeholder="TO 用户名">
    </div>
    <div style="padding: 10px;">
      <input type="text" placeholder="邮件标题">
    </div>
    <div style="padding: 5px;" >
      <textarea name="" id="" cols="30" rows="10" style="width: 80%; height: 50px;" placeholder="内容"></textarea>
      </div>
    <div style="padding-top: 10px;">
      <button>发送站内信</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SendTalkBox"
    }
</script>

<style scoped>

</style>
