<template>
  <div id="">
    <p>提问：
      <label>
        <input type="text" v-model="question">
      </label>
    </p>
    <p>{{answer}}</p>
  </div>
</template>

<script>
  export default {
    name: "RobotTest",
    //声明需要的变量
    data() {
      return {
        question: '',
        answer: '你还木有问人家问题呀~'
      }
    },
    watch: {
      //监控 question 的值，如果发生改变就执行方法
      question: function () {
        this.answer = '等待提问...';
        this.getAnswer();
      }
    },

    methods: {
      //获取答案的方法
      getAnswer: function () {
        if (this.question.indexOf('?') !== -1) {
          this.answer = '思考中...';
          let that = this;
          //发送给API
          that.$http.post('http://robottest.uneedzf.com/api/talk2Robot', {
            token: 'b090e361fd69392bbec6c1c0f8ea4bc0',
            message: that.question
          }).then(function(res){
            //返回信息
            if (res.data.code === 0){
              that.answer = res.data.data;
            }else {
              that.answer = res.data.message;
            }
          })
        }else{
          this.answer = '不敲个问号试试看吗?';
          return 0;
        }
      }
    }
  }
</script>

<style scoped>

</style>
