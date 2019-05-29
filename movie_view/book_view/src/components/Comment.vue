<template>
  <!--评论组件-->
  <div>
    <label for="">评论</label>
    <hr>
    <div>
      <li v-for="item in items">XXX 评论：XXX</li>
    </div>
    <div style="padding: 5px;">
      <textarea name="" id="" cols="30" rows="10" v-model="content" style="width: 80%; height: 50px;"
                placeholder="内容"></textarea>
    </div>
    <div style="padding-top: 10px">
      <button v-on:click="send_comment">评论</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Comment"
    }
</script>

<style scoped>

</style>
