<template>
    <div>
      <label for="">直接输出的模式：</label>
      <div>{{msg}}</div>
      <hr>
      <label for="">解析输出的模式：</label>
      <div v-html="msg"></div>
    </div>
</template>

<script>
    export default {
        name: "ShowHtml",
      data(){
          return {
            msg:'<div style="font-size: 30px; color: red;">HelloWorld</div>>'
          }
      }
    }
</script>

<style scoped>

</style>
