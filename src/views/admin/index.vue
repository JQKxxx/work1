<template>
    <el-container>
        <el-aside width="200px">
            <el-row class="tac">
                <el-col class="box">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item index="0">
                            <template slot="title">
                                <img src="../../assets/logo.png" alt="">
                                <!--<span style="font-size: 16px">dingdong后台管理</span>-->
                            </template>

                        </el-menu-item>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-s-custom"></i>
                                <span>用户管理</span>
                            </template>
                            <el-menu-item index="1-1"><router-link to="userquery">用户查询</router-link></el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-postcard"></i>
                                <span>日志管理</span>
                            </template>
                            <el-menu-item index="2-1"><router-link to="goodsadd">查看日志</router-link></el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-star-on"></i>
                                <span>任务管理</span>
                            </template>
                            <el-menu-item index="3-1"><router-link to="users" style="color: white">查看任务</router-link></el-menu-item>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">
                                <i class="el-icon-user-solid"></i>
                                <span>人事管理</span>
                            </template>
                            <el-menu-item index="5-1"><router-link to="orders" style="color: white">查看人员</router-link></el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-place"></i>
                                <span>考勤管理</span>
                            </template>
                            <el-menu-item index="4-1" ><router-link to="vcharts" style="color: white">查看考勤</router-link></el-menu-item>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title">
                                <i class="el-icon-news"></i>
                                <span>公告管理</span>
                            </template>
                            <el-menu-item index="6-1" ><router-link to="vcharts" style="color: white">查看公告</router-link></el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-container>
            <el-header>
                <el-menu></el-menu>
                <el-menu mode="horizontal" style="float: right">
                    <el-menu-item index="110">{{names}}</el-menu-item>
                    <el-button>退出</el-button>
                </el-menu>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "index",
        data(){
        return{
            names:''
        }
        },
        methods:{
            getNames(){
                this.names=sessionStorage.getItem('names');
            }
        },
        beforeMount() {
            this.getNames();
        }
    }
</script>
<style>
    .el-breadcrumb{
        line-height: 5;
    }
</style>
<style scoped>

    .el-submenu__title{
        color: white;
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-header{
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
    .el-menu--horizontal>.el-menu-item{
        color: white;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
        color:white;
    }
    .el-menu--horizontal{
        border: 0;
        background: rgba(0,0,0,0.1);
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        /*height: 625px;*/
        min-height: 100vh;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
        padding: 0;
        height: 100%;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
    .router-link-exact-active{
        color: #4094fe;
    }
    .tac{
        height: 100%;
    }
    .box{
        height: 100%;
    }
    .el-menu{
        height: 100%;
    }
    .el-breadcrumb{

    }

</style>