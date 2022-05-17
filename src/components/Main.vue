<template>
  <el-container id="app">
    <el-aside width="200px">
      <div>
        <common-aside></common-aside>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>



<script>
import commonAside from "./common/commonAside.vue";
import commonHeader from "./common/commonHeader.vue"
export default {
  name: "Main",
  components: {
    commonAside,
    commonHeader
  },
};
</script>

<style scoped>
.el-header {
  background-color: black;
  /* he
  ight: 0px; */
}

#app {
  background-image: url(../assets/background.jpg);
  background-size: contain;
}
</style>
