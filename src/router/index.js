import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Login = () => import('views/login/Login')
const Register =() => import('views/register/Register')

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path:'/login',
        name:'login',
        component:Login,
        meta:{title:'登录'}
    },
    {
        path:'/register',
        name:'register',
        component:Register,
        meta:{title:'注册'}
    },
    {
        path:'/home',
        name:'home',
        component:Home,
        meta:{title:'首页'}
    }
]

const router = new VueRouter({
    routes
})

export default router
