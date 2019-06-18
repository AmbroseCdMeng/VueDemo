<template>
  <div>{{$router.params.id}}</div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$router.params.id);
    }
}
</script>