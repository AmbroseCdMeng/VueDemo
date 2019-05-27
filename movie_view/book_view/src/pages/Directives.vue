<template>
  <div>
    <p v-if="seen">Can You See Me ?</p>
    <br>
    <a v-bind:href="url">Click Here</a>
    <a :href="url">Click Here</a>
    <br>
    <a v-on:click="goHome">Go Home</a>
    <a @click="goHome">Go Home</a>

    <!-- 修饰符是以 点 指明的特殊后缀。用于指明一个指令应该以特殊方式绑定 -->
    <!-- 如下。prevent 修饰符告诉 v-on 指定对于触发的事件调用 event.prevent Default(): -->
    <form v-on:submit.prevent="onSubmit"></form>
  </div>
</template>

<script>
  export default {
    name: "Directives",
    data() {
      return {
        seen: true,
        url: './index',
      }
    },
    methods: {
      goHome: function () {
        alert('Go Home')
      }
    }
  }
</script>

<style scoped>

</style>
