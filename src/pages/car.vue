<template>
  <div class="car">
      <div class="carTop texc rel">
          <i class="iconfont icon-shouye disb abs" @click="goHome()"></i>
          <p>购物车</p>
      </div>
      <div class="main">
          <div class="finish oveh">
               <p class="edit rig" @click="openEdit()">{{editP}}</p>
          </div>
          <div class="carList">
              <div class="carOne disf" v-for="(item,index) in carData">
                  <input class="carCheckBox" type="checkbox" checked=true @click="sumData()"> 
                  <img class="disb" :src="item.listimg">
                  <div class="carOneRi">
                      <div :class="editP=='编辑'?'carOneDes':'disn'">
                        <p class="name">{{item.msg}}</p>
                        <P class="bh">{{item.card}}</P>
                        <div class="carOneRiBot disf">
                            <div class="price disf">
                                <p>￥</p><p>{{item.price}}</p>
                            </div>
                            <div class="quan disf">
                                <P>数量：</P><p>{{item.count}}</p>
                            </div>
                            <div  class="subtotal disf">
                                <P>小计：</P><p>{{item.price*item.count}}</p>
                            </div>
                        </div>
                      </div>
                      <div :class="editP=='完成'?'carOneEdit disf rel':'disn'">
                          <div class="editBox disf">
                            <p class="editBut add1" @click="add1(index,item.card)">+</p>
                            <input class="countEdit disb texc" :value="item.count" @change="reSetCount(index,item.card)">
                            <p class="editBut red1" @click="red1(index,item.card)">-</p>
                          </div>
                          <p class="delP abs" @click="deOne(index,item.card)">删除</p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
      <div class="sumBox disf">
          <p @click="selectAll()">全选</p>
          <p>总计：</p>
          <p>{{sum}}</p>
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
            footerAct:2,
            carData:[],
            editP:"编辑",
            sum:0
        }
    },
    created() {

    },
    mounted(){
        var carData = JSON.parse(localStorage.getItem("car"));
        this.carData = carData;
        console.log(document.getElementsByClassName("countEdit")[0]);
        this.startSumData();
    },
    methods:{
        goHome(){
            this.$router.push({path:"/"})
        },
        openEdit(){
            if(this.editP=="完成"){
                this.editP="编辑"
            }else{
               this.editP="完成"
            }
        },
        add1(index,card){
            var nowCount = document.getElementsByClassName("countEdit")[index].value;
            console.log(index);
            this.carData[index].count++;
            this.setItemFun();
            this.sumData();
        },
        red1(index,card){
            var nowCount = document.getElementsByClassName("countEdit")[index].value;
            console.log(index);
            if(this.carData[index].count>1){
                this.carData[index].count--;
            }else{
                this.carData.splice(index,1);
            }
            this.setItemFun();
            this.sumData();
        },
        reSetCount(index,card){
            var nowCount = document.getElementsByClassName("countEdit")[index].value;
            console.log(nowCount);   
            if(nowCount>0){
                this.carData[index].count=nowCount;
            }else{
                this.carData.splice(index,1);
            }
            this.setItemFun();
            this.sumData();
        },
        deOne(index,card){
            this.carData.splice(index,1);
            this.setItemFun();
        },
        setItemFun(){
            localStorage.setItem("car", JSON.stringify(this.carData));
        },
        selectAll(){
            var checkNum = 0;
            var checkBoxList = document.getElementsByClassName("carCheckBox");
            for(var i = 0;i<this.carData.length;i++){
                if(checkBoxList[i].checked==true){
                    checkNum++
                }
            }
            console.log(checkNum);
            if(checkNum==this.carData.length){
                for(var i = 0;i<this.carData.length;i++){
                    checkBoxList[i].checked=false;
                }
            }else{
                for(var i = 0;i<this.carData.length;i++){
                    checkBoxList[i].checked=true;
                } 
            }
            this.sumData();
        },
        sumData(){
            var checkBoxList = document.getElementsByClassName("carCheckBox");
            console.log(this.carData);
            var sumCar = 0;
            for(var i=0;i<this.carData.length;i++){
                console.log(111);
                if(checkBoxList[i].checked==true){
                    var subtotal = this.carData[i].count*this.carData[i].price;
                    console.log(subtotal);
                    sumCar += subtotal;
                    console.log(subtotal);
                }
            }
            console.log(sumCar);
            this.sum=sumCar;
        },
        startSumData(){
            var sumCar = 0;
            for(var i=0;i<this.carData.length;i++){
                console.log(111);
                var subtotal = this.carData[i].count*this.carData[i].price;
                console.log(subtotal);
                sumCar += subtotal;
                console.log(subtotal);
            }
            this.sum=sumCar;
        }
    },
    components:{
        myFooter
    }
}
</script>

<style scoped>
.carTop{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    background: rgb(250, 219, 210);
}
.carTop>i{
    left: 10px;
}
.myFooter{
    position: fixed;
    bottom: 0;
}
.main{
    margin-top: 20px;
}
.finish{
    padding:0 10px 10px 0px;
    margin: 0 10px 0 10px;
    border-bottom: 1px solid lightgray;
}
.carOne{
    padding: 0 10px 0 10px;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
}
.carOne>img{
    width: 60px;
    height: 60px;
    margin-left: 10px;
}
.carOneRi{
    width: 200px;
    margin-top: 10px;
    margin-left: 3%;
}
.carOneDes{
    height: 65px;
}
.carOneEdit{
    height: 65px;
    align-items: center;
    justify-content: center;;
}
.editBox{
    border: 1px solid lightgray;
}
.editBox>p{
    margin: 0 15px 0 15px;
    font-size: 15px;
}
.carOneDes>p{
    font-size: 15px;
}
.carOneRiBot{
    margin-top: 5px;
    font-size: 15px;
}
.price{
    color: orangered;
}
.quan{
    margin-left: 10px;
}
.subtotal{
    margin-left: 10px;
}
.edit{
    width: 40px;
    font-size: 14px;
}
.countEdit{
    width: 15px;
    height: 15px;
}
.delP{
    height: 100%;
    line-height: 65px;
    padding: 0 3px 0 3px;
    right: 0;
    color: #fff;
    background: #FF0036;
    font-size: 14px;
}
.sumBox{
    font-size: 15px;
}
.sumBox>p{
    padding: 0 10px 0 10px;
}
</style>