<template>
  <div class="homePage">
    <myheader></myheader>
    <div class="homePtop oveh">
      <section class="swiper-container">
				<section class="swiper-wrapper">
					<section class="swiper-slide"><img src="../../static/img/1.png"></section>
					<section class="swiper-slide"><img src="../../static/img/2.jpg"></section>
					<section class="swiper-slide"><img src="../../static/img/3.png"></section>
				</section>
				<section class="swiper-pagination"></section>
			</section> 
      <div class="topIconList disf">
        <div class="topIconListOne" v-for="(item, index) in topIconList" :key=index>
          <img class="topIconListOneimg disb mar" :src="item.imgSrc">
          <p class="topIconListOnep w100">{{item.text}}</p>
        </div>
      </div>
    </div>
    <div class="sellHot">
      <div class="sellHotTit disf ">
        <i class="iconfont icon-fire"></i>
        <p class="sellHotRedText">热卖</p>
        <p>爆款</p>
      </div>
      <div class="sellHotChoose disf">
        <div v-for="(item, key,index) in inddata" 
          :class="index==sellHotChooseAct ? 'sellHotAct oveh':'sellHotDef oveh'"
          @click="changeCellHOtCity(index)">
          <p class="mar">{{key}}</p>
        </div> 
      </div>
      <div class="sellHotList">
        <div class="defCitBox disf" 
          v-for="(item, key,index) in inddata" 
          v-if="index == sellHotChooseAct">
          <div class="sellHotListOne"
            v-for="(item,index) in item"
            :key=index>
            <img class="w100 disb" :src="item.pro_img">
            <div class="sellHotListOneText">
              <p class="sellHotName texc oveh">{{item.pro_name}}</p>
              <p class="sellHotDec texc oveh">{{item.pro_text}}</p>
              <div class="sellHotPri disf">
                <p class="pifa">"批发价"</p>
                <p class="eachPri">￥{{item.pro_price}}</p>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
    <div class="myFooter w100 oveh">
      <myFooter :footerAct="footerAct"></myFooter>
    </div>
  </div>
</template>

<script>
import myheader from  "../components/myheader"
import Swiper from "../../static/swiper-4.3.5.min.js"
import myFooter from "../components/myFooter"

export default {
    data(){
        return{
          footerAct:0,
          sellHotChooseAct:0,
          topIconList:[
            {
              imgSrc:"../../static/img/indexIoc1.png",
              text:"女装货源"
            },
            {
              imgSrc:"../../static/img/indexIoc2.png",
              text:"男装货源"
            },
            {
              imgSrc:"../../static/img/indexIoc3.png",
              text:"童装货源"
            },
            {
              imgSrc:"../../static/img/indexIoc4.png",
              text:"毛衫货源"
            },
            {
              imgSrc:"../../static/img/indexIoc5.png",
              text:"市场导航"
            },
            {
              imgSrc:"../../static/img/indexIoc6.png",
              text:"闪电发货"
            },
            {
              imgSrc:"../../static/img/indexIoc7.png",
              text:"每日新款"
            },
            {
              imgSrc:"../../static/img/indexIoc8.png",
              text:"代理必读"
            }
          ]
        }
    },
    created() {
      this.$store.dispatch('getdata1');
    },
    //需要调用vuex中数据的组件需要先created再computed
		computed:{
//		this.inddata == this.$store.state.datas.index
			inddata(){
        console.log(this.$store.state.datas.index);
				return  this.$store.state.datas.index
			}
    },
    methods:{
      changeCellHOtCity(index){
        console.log(6665);
        this.sellHotChooseAct=index;
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
    
    components:{
        myheader,
        myFooter
    }
}
</script>

<style scoped>
.homePage{

}
.homePtop{
  background: #F4F4F4;
}
.swiper-container{
  background: #fff;
}
.swiper-container .swiper-slide img {
  width: 100%;
  height: 3rem;
}
.topIconList{
  margin-top: 10px;
  flex-wrap:wrap;
  background: #fff;
}
.topIconListOne{
  width: 25%;
  margin-top: 15px;
}
.topIconListOnep{
  margin-top: 5px;
  font-size: 15px;
  text-align: center;
}
.topIconListOneimg{
  width: 50%;
}
.sellHot{
  border-top: 10px solid #F4F4F4;
  background: #fff;
}
.icon-fire{
  font-size: 30px;
  color: #d81e06;
}
.sellHotTit{
  margin-top: 30px;
  justify-content: center;
}
.sellHotTit>p{
  font-size: 20px;
}
.sellHotRedText{
  color: #d81e06;
}
.sellHotChoose{
  border-top: 1px solid lightgrey;
  margin-top: 10px;
}
.sellHotChoose>div{
  width: 25%;
  cursor: pointer;
}
.sellHotChoose>div>p{
  width: 32px;
  font-size: 16px;
  padding: 15px 0 15px 0;
  text-align: center;
}
.sellHotAct>p{
  border-bottom: 1px solid #d81e06;
}
.sellHotDef>p{
  border-bottom:1px solid transparent;
}
.defCitBox{
  flex-wrap:wrap; 
  justify-content: space-between;
}
.sellHotListOne{
  width: 49%;
}
.sellHotListOne>img{
  height: 190px;
}
.sellHotListOneText>p{
  white-space:nowrap; 
  text-overflow:ellipsis;
  padding-left: 5px;
  padding-right: 5px;
}
.sellHotName{
  margin-top: 5px;
  font-size: 16px;
}
.sellHotDec{
  margin-top: 5px;
  padding-bottom: 10px;
  font-size: 13px;
  color: lightgray;
}
.sellHotPri{
  align-items: flex-end;
  padding: 0 5px 10px 5px;
}
.pifa{
  color: lightgray;
  font-size: 13px;
}
.eachPri{
  font-size: 18px;
  color: #d81e06;
}
.myFooter{
  position: fixed;
  bottom: 0;
}
</style>