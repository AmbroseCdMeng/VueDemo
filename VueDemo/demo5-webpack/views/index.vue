<template>
  <div>
    <h1>首页</h1>
    <!-- tag 指定渲染成什么表亲啊 -->
    <router-link to="/about" tag="li">跳转到 about</router-link>
    <p>{{$store.state.count}}</p>
    <p>{{count}}</p>
    <button @click="handleIncrement">+1</button>
    <button @click="handleDecrease">-3</button>
    <hr>
    <div>原数组：{{list}}</div>
    <div>数组：{{filteredList}}</div>
    <div>长度：{{listCount}}</div>
    <button @click="handlePushRandom">push random</button>
  </div>
</template>

<script>
export default {
  computed: {
    //访问 Vuex 中的属性，可以直接写在 template 中，也可以通过计算属性来显示
    count() {
      return this.$store.state.count;
    },
    list() {
      return this.$store.state.list;
    },
    filteredList() {
      return this.$store.getters.filteredList;
    },
    listCount() {
      return this.$store.getters.listCount;
    }
  },
  methods: {
    handleIncrement() {
      this.$store.commit("increment");
    },
    handleDecrease() {
      this.$store.commit("decrease");
    },
    handlePushRandom() {
      this.$store.dispatch("pushRandom");
    }
  }
};
</script>
