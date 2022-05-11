<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="title">Sunrise实验室管理平台</div>
      </el-header>
      <el-main>
        <div class="content">
          <div class="logo"></div>   
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>账户登录</span>
            </div>
            <div class="text item">
              <el-form :model="Form" :rules="rules" ref="Form">
                <el-form-item prop="name">
                  <el-input placeholder="邮箱/手机号" v-model="Form.name"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    placeholder="请输入密码"
                    v-model="Form.password"
                    show-password
                  ></el-input>
                </el-form-item>
                
                <el-form-item>
                  <el-button @click="onSubmit()" icon="el-icon-upload" type="primary" plain
                    >登录</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
            <div class="option">
            <div class="option1">
              <el-checkbox v-model="checked" class="remeberPwd">记住密码</el-checkbox>
            </div>
            <div class="option2">
              <div>忘记密码|</div>
              <div><a a href="http://localhost:8080/#/register">注册账号</a></div>
              <!-- <el-button @click="myfunction()">注册账号</el-button> -->
            </div>
            </div>
          </el-card>
        </div>
      </el-main>
      <el-footer>Copyright © 2004-2022 sunrise.com 版权所有</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录数据域
      Form:{
        name: '',
        password: ''
      },
      //表单验证规则
      rules:{
        name:[
          {
            required:true,
            trigger:'blur',
            message:'请输入用户名'
          }
        ],
        password:[
          {
            required:true,
            trigger:'blur',
            message:'请输入密码'
          }
        ]
      },
      //记住密码checked
      checked:false
    }
  },
  methods: {
    onSubmit() {
       if (!this.Form.name) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.Form.password) {
        this.$message.error("请输入密码！");
        return;
      }
      else{
        this.$router.push({ path: "/main" });
      }
    // else {
    //     校验用户名和密码是否正确;
    //     this.$router.push({ path: "/主页" });
    //     axios
    //       .post("/login/", {
    //         name: this.Form.name,
    //         password: this.Form.password
    //       })
    //       .then(res => {
    //         console.log("输出response.data.status", res.data.status);
    //         if (res.data.status === 200) {
    //           this.$router.push({ path: "/主页" });
    //         } else {
    //           alert("您输入的用户名或密码错误！");
    //         }
    //       });
    //   }
    },
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app{
  background-image: url(../assets/background.jpg);
  background-size: contain;
}
.el-header,
.el-footer {
  background-color: #e9eef3;
  color: #333;
  text-align: start;
  line-height: 8vh;
}
.el-footer {
  text-align: center;
  font-size: 12px;
}
.title {
  /* border: 1px  solid  black; */
  font-weight: bold;
}
.box-card{
  width: 410px;
  height: 380px;
  min-width: 410px;
  opacity: 0.9;
}
.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 92vh;
  margin: 0;
  padding: 0;
  margin-top: 100px;
}
.content {
  display: flex;
  justify-content: flex-start;
  margin-top: 100px;
}
.clearfix {
  height: 60px;
  line-height: 60px;
}
a{
  text-decoration: none;
}
.option {
  line-height: 20px;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  color: #666666;
}
.option2{
  display: flex;
  justify-content: space-around;
}
.content{
  display: flex;
  justify-content: center;
  gap: 100px;
}
.logo {
  width: 380px;
  height: 380px;
  /* border: 1px solid #333;  */
  min-width: 380px;
  background: no-repeat center/80% url('../assets/logo.png');
  opacity: 0.9;
}
.el-button {
  width: 80%;
}
</style>
