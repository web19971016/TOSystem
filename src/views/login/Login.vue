<template>
    <div>
        <header-bar class="header"></header-bar>
        <div class="login-box">
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
                <el-form-item label="账号登录" prop="phone">
                    <el-input v-model="loginForm.phone" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <el-form-item prop="password" style="margin-bottom: 0">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item>
                    <a href="#" class="forget-btn" @click="toAlterPwd">忘记密码?</a>
                    <el-button class="login-btn">登录</el-button>
                    <p>还没有账号？<a href="#" @click="toRegister">免费注册</a></p>
                </el-form-item>
            </el-form>
        </div>
        <footer></footer>
    </div>
</template>

<script>
    import HeaderBar from "components/headerBar/HeaderBar";
    export default {
        name: "Login",
        components: {HeaderBar},
        data() {
            return {
                //登录表单对象
                loginForm: {
                    phone: '',
                    password: ''
                },
                //登录表单验证规则对象
                loginFormRules: {
                    phone: [],
                    password: []
                }
            }
        },
        methods: {
            //点击忘记密码跳转到重置密码页面
            toAlterPwd(event) {
                event.preventDefault()
                this.$router.push('/home')
            },
            //点击免费注册跳转到注册页面
            toRegister(event){
                event.preventDefault()
                this.$router.push('/register')
            }
        }
    }
</script>

<style scoped>
    .header {
        width: 980px;
        height: auto;
        margin: 40px auto 30px;
    }

    .login-box {
        width: 400px;
        margin: 0 auto;
    }

    .login-btn {
        width: 100%;
        background-color: var(--color-high-text);
        color: white;
        font-weight: bold;
    }

    .forget-btn {
        float: right;
    }
</style>