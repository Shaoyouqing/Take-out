// 路由对象模块
import Vue from "vue"
import Router from "vue-router"
// 引入组件
import Msite from "../pages/Msite/Msite.vue"
import Search from "../pages/Search/Search.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Login from "../pages/Login/Login.vue"
// 申明插件
Vue.use(Router);

export default new Router({
    routes:[
        {path:'/',redirect: '/msite'},
        {path:'/msite',name:'Msite',component:Msite,meta:{showFooter:true}},
        {path:'/search',name:'Search',component:Search,meta:{showFooter:true}},
        {path:'/order',name:'Order',component:Order,meta:{showFooter:true}},
        {path:'/profile',name:'Profile',component:Profile,meta:{showFooter:true}},
        {path:'/login',name:'Login',component:Login}
    ]
})