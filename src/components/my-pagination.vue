<template>
    <div>
        <ul>
            <li :class="{active:current==i} " v-for="i in pageNumber" :key="i" @click="changePage(i)">{{i}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "my-pagination",
        props:{
          total:{
              required:true,
              type:Number,
          },
            pageSize:{
              type: Number,
                default:3,
            }
        },
        data(){
            return{
                current:1
            }
        },
        methods:{
            changePage(i){
                this.current=i;
                this.$emit('pageChange',i)

            }
        },
        computed:{
            pageNumber(){
               return Math.ceil(this.total/this.pageSize);
            },
        }
    }
</script>

<style scoped>
ul{
    width: 100%;
    height: 30px;
    display: flex;
}
    ul>li{
        margin-left: 5px;
        width: 30px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        border-radius: 3px;
        background-color: #f1f0f0;
        font-size: 13px;
        cursor: pointer;
    }
    li.active{
        background-color: #df7676;
        color: #fff;
    }
</style>