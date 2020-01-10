<template>
    <div>
        <header>
            <header-bar class="header"></header-bar>
        </header>
        <div class="register-box">
            <el-form ref="registerFormRef" :model="registerForm" :rules="registerFormRules"  status-icon>
                <el-form-item label="手机号码" prop="phone">
                    <el-input v-model="registerForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="创建密码" prop="password">
                    <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input type="password" v-model="registerForm.password2" autocomplete="off"></el-input>
                </el-form-item>
                <el-form>
                    <el-button class="register-btn" @click="register">确认注册</el-button>
                </el-form>
            </el-form>
        </div>
        <footer>

        </footer>
    </div>
</template>

<script>
    import HeaderBar from "components/headerBar/HeaderBar";

    export default {
        name: "Register",
        components: {HeaderBar},
        data() {
            //自定义验证规则
            let validPhone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号码'));
                    return
                }
                const reg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
                if (!reg.test(value)) {
                    callback(new Error('请填写正确的手机号码'));
                    return
                }
                //提交post请求验证改手机号是否已经被注册
                this.$api.personal.validPhone(value)
                    .then(res => {
                        console.log(res);
                    })
            };

            let validPassword2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                    return
                }
                if (value !== this.registerForm.password) {
                    callback(new Error('两次输入的密码不一致，请重新输入'));
                    return
                }
                callback();
            };
            return {
                //注册表单对象
                registerForm: {
                    phone: '',
                    password: '',
                    password2: ''
                },
                //注册表单验证规则对象
                registerFormRules: {
                    phone: [
                        {required: true, validator: validPhone, trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                    ],
                    password2: [
                        {required: true, validator: validPassword2, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            register() {
                this.$refs.registerFormRef.validate(valid => {
                    if (!valid) return
                    this.$api.personal.register({
                        phone:this.registerForm.phone,
                        password:this.registerForm.password
                    })
                })
            }
        }
    }
</script>

<style scoped>
    header {
        border-bottom: 3px solid var(--color-high-text);
    }

    .header {
        margin: 0 auto;
        padding: 5px 0;
        width: 980px;
    }

    .register-box {
        width: 400px;
        margin: 0 auto;
    }

    .register-btn {
        width: 100%;
        background-color: var(--color-high-text);
        color: white;
        font-weight: bold;
    }
</style>