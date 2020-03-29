<template>
  <div class="memCen">
    <div class="menCenTop 100w oveh rel">
        <p class="topLe abs"><</p>
        <p class="topCen texc">返回上级</p>
    </div>
    <div class="loginBox oveh">
        <p class="hello texc">您好</p>
        <p class="logout texc">退出登录</p>
        <p class="personCen texc">个人中心</p>
        <div class="loginBott disf">
            <div v-for="(item,index) in loginBottList" class="loginBottOne texc">
                <p>{{item}}</p>
            </div>
        </div>
    </div>
    <div class="userDet">
        <div class="userDetTop disf">
            <p v-for="(item,index) in userDetTopList" :key=index
            :class="index==0?  'userDetTopFi texc':'userDetTopSe texc'">{{item}}</p>
        </div>
        <div class="iconList disf">
            <div v-for="(item,index) in iconList"
            class="iconListOne texc">
                <i :class="item.icon"></i>
                <p>{{item.text}}</p>
            </div>
        </div>
        <div class="youhui">
            <p>我的优惠券</p>
        </div>
    </div>
    <div class="myFooter w100 oveh">
        <myFooter :footerAct="footerAct"></myFooter>
    </div>
  </div>
</template>

<script>
import myFooter from "../components/myFooter"

export default {
    data(){
        return{
            footerAct:3,
            loginBottList:[       
                "登录",
                "注册"
            ],
            userDetTopList:[
                "我的订单","全部订单"
            ],
            iconList:[
                {
                    text:"代付款",
                    icon:"iconfont icon-icon5 disb texc",
                },
                {
                    text:"代团购",
                    icon:"iconfont icon-icon5 disb texc",
                },
                {
                    text:"待收货",
                    icon:"iconfont icon-icon5 disb texc",
                },
                {
                    text:"退款/售后",
                    icon:"iconfont icon-icon5 disb texc",
                }
            ]
         
            
        }
    },
    components:{
        myFooter
    }
}
</script>

<style>
.myFooter{
    position: fixed;
    bottom: 0;
}
.menCenTop{
    height: 1rem;
    line-height: 1rem;
    background: lightcoral;
}
.menCenTop>.topLe{
    font-size: 0.5rem;
    left: 0.3rem;
}
.topCen{
    color: #fff;
    font-size: 0.5rem;
}
.loginBox{
    background:linear-gradient(to right,  #c2c7db ,skyblue,pink);
}
.loginBox>p{
    font-size: 0.4rem;
    margin-top: 1rem;
}
.personCen{
    color: #fff;
}
.loginBott{
    margin-top: 0.8rem;
}
.loginBott>div{
    width: 50%;
    color: #fff;
    font-size: 0.6rem;
    line-height: 2rem;
}
.userDet{
    padding: 0.2rem;
}
.userDetTop{
    margin-top: 0.5rem;
    border-bottom: 1px solid lightgray;
}
.userDetTop>p{
    width: 50%;
    height: 0.7rem;
    color: gray;
    font-size: 0.4rem;
    line-height: 0.7re,;
}
.iconList{
    margin-top: 0.6rem;
}
.iconListOne{
    width: 25%;;
}
.iconListOne>i{
    font-size: 0.6rem;
}
.iconListOne>p{
    font-size: 0.4rem;
}
.youhui{
    font-size: 0.3rem;
}
</style>