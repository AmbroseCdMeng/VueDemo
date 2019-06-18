 <template>
  <div>
    <span>Hello{{name}}</span>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ".vue"
    };
  }
};
</script>

<style scoped>
div {
  color: #f60;
  font-size: 24px;
}
</style>
