<template>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
            <el-card shadow="always">
                <h2>欢迎注册实验室管理平台</h2>
            </el-card>
        </el-col>
        <el-col :span="1">
            <el-divider direction="vertical" />
        </el-col>
        <el-col :span="6">
            <el-card shadow="always">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model.number="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model.number="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
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
    },
}

</script>

<style scoped>
.el-divider {
    height: 200px;
}
.row-bg {
    background-color: (250, 250, 250);
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
}
</style>
