var demo = new Vue({
    el: '#demo',
    data: {
        username: '',
        message: '',
        list: []
    },
    methods: {
        handleSend() {
            if (this.username === '' || this.message === '') {
                alert('不能为空');
                return;
            }
            this.list.push({
                username: this.username,
                message: this.message,
            });
            this.message = '';
        },
        handleReply(index) {
            var name = this.list[index].username;
            this.message = "回复@" + name + '：';
            this.$refs.message.focus();
        }
    },
})