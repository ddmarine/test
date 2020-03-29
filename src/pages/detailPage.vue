<template>
  <div class="detailPage">
      <div class="detailaTop w100">
          <i class="disb abs iconfont icon-jiantou" @click="goHome()"></i>
          <p class="texc">返回上级</p>
      </div> 
      <div class="swiperBox w100">
        <section class="swiper-container">
            <section class="swiper-wrapper">
                <section class="swiper-slide" v-for="(item,key,index) in detailData[cate_name][key].spe_img">
                    <img :src="item">
                </section> 
            </section>
            <section class="swiper-pagination"></section>
        </section>  
      </div>
      <div class="detailMain">
          <div class="priceBox w100 oveh">
              <p class="price">￥{{detailData[cate_name][key].price}}</p>
              <p class="msg">{{detailData[cate_name][key].msg}}</p> 
              <div class="priceOther disf">
                    <p>快递：15元</p>
                    <p>月销量：100件</p>
                    <p>杭州</p>
              </div> 
          </div> 
          <div class="postBox w100 oveh">
              <div class="promotionBox disf">
                  <p>促销</p>
                  <p class="proRed">促销</p>
                  <p>满500享部分地区包邮</p>
              </div>
              <div class="pointBox disf">
                  <p class="pointRed">积分</p>
                  <p>购买可得399积分</p>
              </div>
              <div class="serviceBox disf">
                  <p class="servictRed">服务</p>
                  <p v-for="(item,key,index) in serviceList" class="servicOne">{{item}}</p>
              </div> 
          </div>
          <div class="detialDesBox w100">
              <div class="chooserSize disf">
                  <p class="chooseGrey">选择</p>
                  <p class="chooseSize">请选择颜色分类/鞋码</p>
              </div> 
             <div class="parameBox disf">
                  <p class="parameText">参数</p>
                  <p class="parameList">品牌，功能</p>
              </div>
              <p class="shopName">店铺名：{{detailData[cate_name][key].shop_name}}</p> 
              <div class="enterSpecialBox">
                  <div class="enterSpecial texc rig">
                      <p>进入专场></p>
                  </div>
              </div>
              <div class="detialImgBox w100 disf">
                  <img v-for="(item,index) in detailData[cate_name][key].spe_img" 
                  :src="item" :class="index<4? 'detialImgOne':'detialImgOne disn'"> 
              </div> 
              <p class="showAll texc">查看店铺所有商品</p>
              <div class="mainBottom">
                  <div class="detailBotList mar disf">
                      <div  v-for="(item,index) in detailBotList"
                      :class="index==2? 'detailBotListOne detaLas texc':'detailBotListOne detaFro texc'">
                        <p>{{item}}</p>
                      </div> 
                  </div>
              </div>  
          </div>
      </div> -
      <div class="detailFooter w100 disf">
            <div class="footerLe disf">
                <div class="footerLeOne texc" v-for="(item,index) in footerLeList">
                    <i :class="item.icon"></i>
                    <p>{{item.text}}</p>
                </div>
            </div>
            <div class="footerRi disf texc">
                <div class="addCarButton" @click="addCar()">
                    <p>加入购物车</p>
                </div>
                <div class="buyNowButton">
                  <p>立即购买</p>
              </div>
            </div>
      </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="60%"
            top="45%"
            style="text-align: center;"
            :before-close="handleClose">
            <span>已加入购物车</span>
        </el-dialog>
  </div> 
</template>

<script>
import Swiper from "../../static/swiper-4.3.5.min.js"

export default {
    data(){
        return{
            dialogVisible: false,
            a11:[],
            swiImg:[],
            cate_name:"",
            key:"",
            serviceList:[
                "极速退款",
                "正品保证",
                "7天退款",
                "赠运费险"
            ],
            detailBotList:[
                "图文详情",
                "商品参数",
                "咨询与售后"
            ],
            detailBotListLi:3,
            footerLeList:[
                {
                    icon:"iconfont icon-dianpu disb",
                    text:"店铺"
                },
                {
                    icon:"iconfont icon-kefu disb",
                    text:"客服"
                },
                {
                    icon:"iconfont icon-shoucang disb",
                    text:"收藏"
                },
            ],
            thisDetailGood:{}
        }
    },
    created() {
      this.$store.dispatch('getdata1');
      console.log(this.$store.dispatch('getdata1'));
    },
    computed:{
        detailData(){
            console.log(this.$route.params);
            console.log(this.$store.state.datas.goods);
            this.key = this.$route.params.key;
            this.cate_name = this.$route.params.cate_name;
            var goods = this.$store.state.datas.goods;
            for(var i in goods){
                console.log(i);
                if(i == this.$route.params.cate_name){
                    for(var i2 in goods[i]){
                        if(i2 == this.$route.params.key){
                            console.log(i2);
                            console.log(this.$store.state.datas.goods[i][i2]);
                            this.thisDetailGood=this.$store.state.datas.goods[i][i2];
                            console.log(this.$store.state.datas.goods[i][i2].swi_img);
                            this.swiImg=this.$store.state.datas.goods[i][i2].spe_img;
                        }
                    }
                }
                console.log(goods[i]);
            }
            console.log(this.swiImg);
            return this.$store.state.datas.goods;
        }
    },
    methods:{
        goHome(){
            this.$router.go(-1);
        },
        addCar(){
            this.dialogVisible = true
            console.log(this.thisDetailGood);
            var carArray = [];
            var oldCar = localStorage.getItem("car");
            console.log(oldCar);
            var ifPush = 1;
             var setCarOne = {
                msg:this.thisDetailGood.msg,
                card:this.thisDetailGood.card,
                price:this.thisDetailGood.price,
                listimg:this.thisDetailGood.listimg,
                count:1
            }
            if(oldCar==null){
                carArray.push(setCarOne);
                localStorage.setItem("car", JSON.stringify(carArray));
            }else{         
                var oldCar = JSON.parse(localStorage.getItem("car"));
                for(var i =0;i<oldCar.length;i++){
                    if(oldCar[i].card==this.thisDetailGood.card){
                        oldCar[i].count++;
                        ifPush=2;
                        break
                    }
                }
                if(ifPush==1){
                    oldCar.push(setCarOne);
                }
                console.log(ifPush);
                localStorage.setItem("car", JSON.stringify(oldCar));
            };
            var lastname = localStorage.getItem("car");
            console.log(JSON.parse(lastname));
            console.log(lastname);
        }
    },
    mounted() {
        var mySwiper = new Swiper(".swiper-container", {
            loop: true,
            autoplay: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                
            },
            autoplay:{
                disableOnInteraction: false
            }
        });
    },
}
</script>

<style scoped>
.detailPage{
    background: #f5f5f5;
}
.detailaTop{
    height: 30px;;
    background:lightsalmon;
}
.detailaTop>i{
    line-height: 30px;
    left: 20px;
    z-index: 1;
}
.detailaTop>p{
    line-height: 30px;
    font-size: 16px;
}
.swiperBox{
    height: 200px;
}
.swiper-container{
  background: #fff;
}
.swiper-container .swiper-slide img {
  width: 100%;
  height: 200px;
}
.detailMain{
    margin-top: 30px;
}
.priceBox{
    background: #fff;
}
.price{
    margin-left: 20px;
    margin-top: 10px;
    font-size: 15px;
    color: #d81e06;
}
.msg{
    margin-left: 20px;
    margin-top: 10px;
    font-size: 14px;
}
.priceOther{
    margin-left: 20px;
    margin-top: 10px;
    margin-right: 20px;
    font-size: 13px;
    color: gray;
    justify-content: space-between;
}
.postBox{
    box-sizing: border-box;
    margin-top: 20px;
    padding:0 10px 0 0px;
    background: #fff;
    font-size: 12px;
}
.promotionBox{
    padding-left: 20px;
    padding-top: 10px;
}
.proRed{
    margin-left: 10px;
    margin-right: 20px;
    color: #d81e06;
}
.pointBox{
    margin-top: 10px;
    padding-left: 20px;
    font-size: 12px;
}
.pointRed{
    margin-right: 15px;
    color: #d81e06;
}
.serviceBox{
    margin-top: 20px;
    padding-left: 20px;
    font-size: 12px;   
}
.servictRed{
    color: #d81e06;
}
.servicOne{
    margin: 0 5px 0 5px;
}
.detialDesBox{
    background: #fff;
    margin-top: 10px;
}
.chooserSize{
    font-size: 13px;
    padding: 10px 10px 0 10px;
}
.chooseGrey{
    color: gray;
}
.chooseSize{
    margin-left: 10px;
}
.parameBox{
    padding: 10px 10px 0 10px;
    font-size: 13px;
}
.parameText{
    color: gray;
}
.parameList{
    margin-left: 10px;
}
.shopName{
    padding: 10px 10px 0 10px;
    font-size: 14px;
}
.enterSpecialBox{
    height: 40px;
    margin-top: 15px;
}
.enterSpecial{
    width: 100px;
    height: 40px;
    margin-right: 15px;
    border: 1px solid black;
    line-height: 40px;
    font-size: 14px;
}
.detialImgBox{
    margin-top: 20px;
}
.detialImgOne{
    width: 25%;
}


.showAll{
    padding: 15px 0 15px 0;
    border-top: 1px solid gray;
    font-size: 14px;
}
.mainBottom{
    margin-top: 10xp;
    padding: 10px;
}
.detailBotList{
    width: 80%;
    height: 30px;
    border: 1px solid black;
}
.detailBotListOne{
    width: 33.33%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
}
.detaFro{
    border-right: 1px solid black;
} 
.detailFooter{
    height: 40px;
    background: #fff;
    border-top: 1px solid lightgray;
    position: fixed;
    bottom: 0;
}
.footerLe{
    width: 50%;
}
.footerLeOne{
    width: 33.33%;
    font-size: 13px;
}
.icon-kefu{
    color: #4A90E2;
}
.footerRi{
    width: 50%;
    line-height: 40px;
    font-size: 15px;
    color: #fff;
}
.footerRi>div{
    width: 50%;
    height: 40px;
}
.addCarButton{
    background: #FF9500;
}
.buyNowButton{
    background: #FF0036;  
}
.el-dialog__body{
    text-align: center;
}
</style>