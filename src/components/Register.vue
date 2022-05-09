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
              <span>用户注册</span>
            </div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                    <el-form-item label="邮箱" prop="email" style="width: 355px;">
                        <el-input v-model.number="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name" style="width: 355px;">
                        <el-input v-model.number="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass" style="width: 355px;">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass" style="width: 355px;">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100px; " plain>提交</el-button>
                        <el-button @click="resetForm('ruleForm')" style="width: 100px;" plain>重置</el-button>
                    </el-form-item>
                </el-form>
                <!-- <div class="check">
                        <slide-verify ref="slideblock" @again="onAgain" @fulfilled="onFulfilled" @success="onSuccess" @fail="onFail" @refresh="onRefresh" :accuracy="accuracy" :slider-text="text"></slide-verify>
                        <div>{{msg}}</div>
                        <el-button @click="handleClick">点我刷新</el-button>
                        </div> -->
          </el-card>
        </div>
      </el-main>
      <el-footer>Copyright © 2004-2022 sunrise.com 版权所有</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        var checkEmail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入邮箱'))
            }
            if (!value) {
                return callback(new Error('邮箱不能为空'))
            }

        }
        var checkName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入姓名'))
            }
            if (!value) {
                return callback(new Error('姓名不能为空'))
            }
        }
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass')
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            ruleForm: {
                email: '',
                name: '',
                pass: '',
                checkPass: '',
                msg: '',
            text: '向右滑',
            // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
            accuracy: 1,
            },
            rules: {
                pass: [{ validator: validatePass, trigger: 'blur' }],
                checkPass: [{ validator: validatePass2, trigger: 'blur' }],
                email: [{ validator: checkEmail, trigger: 'blur' }],
                name: [{ validator: checkName, trigger: 'blur' }],
            },
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
        onSuccess(times){
           console.log('验证通过，耗时 +' +times + '毫秒');
            this.msg = 'login success, 耗时${(times / 1000).toFixed(1)}s'
        },
        onFail(){
            console.log('验证不通过');
            this.msg = ''
        },
        onRefresh(){
            console.log('点击了刷新小图标');
            this.msg = ''
        },
        onFulfilled() {
            console.log('刷新成功啦！');
        },
        onAgain() {
            console.log('检测到非人为操作的哦！');
            this.msg = 'try again';
            // 刷新
            this.$refs.slideblock.reset();
        },
        handleClick() {
        	// 父组件直接可以调用刷新方法
            this.$refs.slideblock.reset();
        },
    },
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
  background-repeat:no-repeat;
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
  font-weight: bold;
}
.clearfix {
  height: 25px;
  line-height: 25px;
}
.box-card {
  width: 410px;
  height: 380px;
  min-width: 410px;
  opacity: 0.9;
  min-width: 410px;
}
.el-main {
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
  min-width: 380px;
  background: no-repeat center/80% url('../assets/logo.png');
  opacity: 0.9;
}
.check{
    align-items: center;
    margin-left: 100px;
}
</style>
