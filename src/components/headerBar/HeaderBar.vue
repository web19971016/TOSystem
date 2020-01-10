<template>
    <div>
        <img src="~assets/logo.png"  class="logo" alt="" @click="toHome">
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {}
        },
        methods: {
            //点击logo跳转到首页
            toHome() {
                this.$router.push('/home')
            },
        }
    }
</script>

<style scoped>
    .logo{
        width: 120px;
        cursor: pointer;
    }
</style>