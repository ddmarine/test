<template>
  <div class="myFooter disf w100">
    <div v-for="(item,index) in myFooterList" :key=index
        :class="index==footerAct ? 'footerOne oveh  footerAct':'footerOne oveh footerDef'"
        @click="changeFooter(index,item.path)">
        <i :class="item.icon"></i>
        <p class="footerTex texc disb">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            footerAct:0,
            myFooterList:[
                {
                    name:"首页",
                    icon:"iconfont icon-shouye disb texc",
                    path:"/",
                },
                {
                    name:"分类",
                    icon:"iconfont icon-fenlei disb texc",
                    path:"/category",
                },
                {
                    name:"购物车",
                    icon:"iconfont icon-gouwuchekong disb texc",
                    path:"/car",
                },
                {
                    name:"会员中心",
                    icon:"iconfont icon-huiyuan disb texc",
                    path:"/memCen",
                },
            ]
        }
    },
    props:{
        footerAct:{
            default:0
        }
    },
    mounted(){

    },
    methods:{
        changeFooter(index,path){
            this.footerAct=index;
            console.log(index);
            this.$router.push({path:path});
        }
    }
}
</script>

<style scoped>
.myFooter{
    background: #fff;
}
.footerAct{
    color: #F14A3D;
}
.footerDef{
    color: black;
}
.footerOne{
    width: 25%;
    margin-top: 10px;
    cursor: pointer;
}
.footerOne>i{
    font-size: 20px;
}
.footerTex{
    font-size: 16px;
    padding: 5px 0 5px 0;
}

</style>