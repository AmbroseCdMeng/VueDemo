<template>
  <div id="example">
    <p>Original message:"{{message}}"</p>
    <p>Computed reversed message:"{{reversedMessage}}"</p>

    <hr>

    <div id="demo">{{fullname}}</div>
  </div>
</template>
<script>
  var vm = new Vue({
    el: '#example',
    data: {
      message: "Hello",
    },

    computed: {
      //a computed getter
      reversedMessage: function () {
        return this.message.split('').reverse().join('');
      }
    }
  });

  var vm2 = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
    },

    /*监控的效果与计算属性相同*/
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName;
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val;
      }
    },
    /*计算属性*/
    computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName;
      }
    }
  });
</script>

<style scoped>

</style>
