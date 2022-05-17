<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="opacity: 0.7;">
        <div class="user">
          <img :src="userImg" width="100px" height="100px" />
          <div class="userInfo" style="float: right; margin-right: 80px">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div
          style="height: 1px; background-color: blue; margin-top: 10px"
        ></div>
        <div class="loginInfo">
          <p>上次登录时间 <span>2022-5-3</span></p>
          <p>上次登录地点 <span>北京昌平</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 350px ;opacity: 0.7;">
        <div slot="header" class="clearfix">
          <span>公告</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-calendar style="opacity:0.7;">
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template slot="dateCell" slot-scope="{  data }">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split("-").slice(1).join("-") }}
            {{ data.isSelected ? "✔️" : "" }}
          </p>
        </template>
      </el-calendar>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userImg: require("@/assets/logo.jpg"),
      recordData: [],
    };
  },
  methods: {
    addthing() {
      this.value = "yes";
    },
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.is-selected {
  color: #1989fa;
}
</style>