<template>
    <div id="box">
        <div class="title">
            <div class="dlogo">
                <img src="../../assets/Dlogo.png" alt="">
            </div>
            <div class="dtitle">
                叮咚办公后台管理系统
            </div>
        </div>
        <div class="center">
            <div class="img">
                <img src="../../assets/denglu.jpg" alt="">
            </div>
            <el-form :model="form" :rules="rules">
                <div class="userDenglu">
                    <div class="Dimg">

                    </div>
                </div>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" placeholder="Username" clearable>
                        <i slot="suffix" class="el-input__icon el-icon-user-solid"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" placeholder="Password" clearable show-password>
                        <i slot="suffix" class="el-input__icon el-icon-unlock"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="角色" prop="role">
                    <el-radio-group v-model="form.identity"  >
                        <el-radio :label="item" v-for="(item,index) in roles" :key="index" ></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit()">登录</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    import {api} from "../../config/api"
    import {HOSTNAME,SUCCESS,FAIL} from "../../config/base";
    export default {
        name: "login",
        data: function () {
            return {
                form: {
                    username: '',
                    password: '',
                    identity: '',
                },
                avatar:'',
                roles: ['领导', '超级管理员'],
                rules: {
                    username: [
                        {required: true, message: '用户名必填', trigger: 'blur'},
                        {min: 2, max: 12, message: '长度在 2 到 12个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码必填', trigger: 'blur'},
                        {min: 5, max: 20, message: '长度在 6 到 20个字符', trigger: 'blur'}
                    ],
                    identity: [
                        {required: true, message: '角色必填', trigger: 'change'}
                    ],
                },
            };
        },
        methods:{
            submit(){
                // login('api/login',this.form).then(res=>{
                //     if(res.data.code==SUCCESS){
                //         sessionStorage.names=JSON.stringify(res.data.data);
                //         this.$message.success(res.data.msg);
                //         let identity=res.data.data.identity;
                //         if(identity=='管理员'){
                //             this.$router.push({name:'adminindex'})
                //         }else if (identity=='教师'){
                //             this.$router.push({name:'teacherindex'})
                //         } else {
                //             this.$router.push({name:'studentindex'})
                //         }
                //     }else {
                //         this.$message.error(res.data.msg)
                //     }
                // })
                fetch(HOSTNAME+'/admin/login/index',{
                    method:'POST',
                    body:JSON.stringify(this.form),
                    headers:new Headers({
                        'Content-Type':'application/json'
                    })
                })
                    .then(res=>res.json())
                    .then(data=>{
                        if (data.code==SUCCESS){
                            let identity=data.data.identity;
                            if(identity=='超级管理员'){
                                this.$router.push({name:'adminindex'})
                            }else {
                                this.$router.push({name:'adminindex'})
                            }
                            this.$message.success(data.msg);
                            sessionStorage.token=data.data.token;
                            sessionStorage.names=data.data.names;

                            // this.$router.push({name:redirect});
                        } else if (data.code==FAIL){
                            this.$message.error(data.msg);
                        }
                    })
            }
        }
    }
</script>
<style scoped>
    form {
        width: 50%;
        height: 100%;
        float: right;
        padding: 20px 20px 0;
        box-sizing: border-box;
    }
    form > .el-form-item {
        margin-bottom: 20px;
    }

    .el-form-item__content>.el-button{
        border-radius: 8px;
        width: 350px;
        height: 40px;
    }
    .el-form-item__content>.el-button--primary{
        background-color: #7ed181;
        border-color: #7ed181;
    }


</style>
<style>
    .el-input>input{
        border-color: #c9eda9;
    }
    .el-input__suffix>.el-input__suffix-inner{
        color: #69c88d;
    }
    .el-radio__input.is-checked> .el-radio__inner{
        background-color: #69c88d;
        border-color:#69c88d ;
    }
    .el-radio__input.is-checked> .el-radio__inner:hover{
        background-color: #69c88d;
        border-color:#69c88d ;
    }
    .el-radio.is-checked>.el-radio__label{
        color:#359659;
    }
    html, body {
        width: 100%;
        height: 100%;
    }

    #box {
        position: relative;
        width: 100%;
        height: 100%;
        color: white;
        background: url("../../assets/Debeijing.png") center center/ cover;
        background-repeat: no-repeat;
    }
    #box>.title{
        width: 800px;
        height: 100px;
        position: absolute;
        left: calc(50% - 400px);
        top: 70px;
    }
    .title>.dlogo{
        float: left;
        width: 77px;
        height: 60px;
    }
    .title>.dlogo>img{
        width: 100%;
        height: 100%;
    }
    .title>.dtitle{
        float: left;
        width: 380px;
        height: 60px;
        color: white;
        font-size: 26px;
        padding-left: 20px;
        line-height: 80px;
    }
    #box>.center{

        width: 800px;
        height: 350px;
        background-color: #f7fff2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #box>.center>.img{
        /*position: absolute;*/
        /*left: 0;*/
        /*top: 0;*/
        /*padding: 10px;*/
        /*box-sizing: border-box;*/
        width: 50%;
        height: 100%;
        float: left;
    }
    #box>.center>.img>img{
        width: 100%;
        height: 100%;
        border: 10px solid white;
        box-sizing: border-box;
    }
</style>