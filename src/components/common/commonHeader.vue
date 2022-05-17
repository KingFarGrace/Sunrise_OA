<template>
  <header>
    <div class="l-content">
      <el-button icon="el-icon-menu" size="mini"> </el-button>
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click = "jumpPersonal()">个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: "commonHeader",
  data() {
    return {
      userImg: require("@/assets/logo.jpg"),
    };
  },
  methods:{
    jumpPersonal(){
       this.$router.push({
          name:personal
        })
        alert("hhhh");
    }
  }
};
</script>

<style scoped>
header{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.l-content{
    display:flex;
    align-content: center;
}
.el-button{
    align-content: center;
    margin-left: 20px;  
    margin-right: 10px;
    margin-top: 10px;
    /* size: small; */
    height: 40px;
    width: 40px;
}
.user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 5px;
}
</style>
