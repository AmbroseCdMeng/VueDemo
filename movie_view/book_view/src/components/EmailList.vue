<template>
    <!--发送站内邮件组件-->
    <div class="message">
        <div>{{title}}</div>
        <div>{{fromUser}}</div>
        <div>{{context}}</div>
    </div>
</template>

<script>
    export default {
        name: "EmailList",
        data() {
            return {
                title: '',
                fromUser: '',
                context: '',
            }
        },
        props:['title', 'fromUser', 'context'],
    }
</script>

<style scoped>
    .message {
        border: 1px solid;
    }
</style>
