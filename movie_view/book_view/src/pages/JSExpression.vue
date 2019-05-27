<template>
  <div>
    <label for="">Num 1</label>
    <label>
      <input type="text" v-model="int1">
    </label>
    <br>
    <br>
    <label for="">Num 2</label>
    <label>
      <input type="text" v-model="int2">
    </label>
    <br>
    <br>
    <label for="">Sum = </label>
    {{parseInt(int1) + parseInt(int2)}}
  </div>
</template>

<script>
  export default {
    name: "JSExpression",
    data() {
      return {
        int1: 0,
        int2: 0
      }
    }
  }
</script>

<style scoped>

</style>
