import Vue from 'vue'

import userquery from '../views/user/userquery'



import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    meta: {title: '登录'}
  },
  {
    path: '/adminindex',
    name: 'adminindex',
    component: () => import('../views/admin/index.vue'),
    meta:{title:'办公管理系统-超级管理员',auth:true},
    children: [
        {path:'userquery',name:'userquery',component:userquery,meta:{title:'用户查询',auth:true}},
    ]
  }


]

const router = new VueRouter({
    routes
})
router.beforeEach((to,from,next) =>{
    let title=to.meta.title || '叮咚办公管理系统';
    document.title=title;
    if (to.meta.auth) {
        let token=sessionStorage.getItem('token');
        if (token&&token!=''){
            next();
        } else {
            next('/?redirect='+to.name);
        }
    }else {
        next();
    }


} )

export default router
