<template>
    <!--主页大图片组件-->
  <div class="headerPic">
    <div>
      <p class="imgTitle">{{recommendTitle}}</p>
      <a :href="recommendSrc">
        <img class="headerImg" :src="recommendImg" alt="加载失败">
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexHeaderPic",
      props:{
          recommendSrc:{
            type:[String,Object],
          },
        recommendImg:{
            type:String,
        },
        recommendTitle:{
            type:String,
        }
      }
    }
</script>

<style scoped>
.headerPic{
  height: 300px;
  width: 100%;
  background-color: antiquewhite;
}
  .headerImg{
    height: 300px;
    width: 100%;
  }
  .imgTitle{
    z-index: 2;
    padding-left: 45%;
    padding-top: 230px;
    position: absolute;
    color: #ffffff;
    font-size: 20px;
  }
</style>
