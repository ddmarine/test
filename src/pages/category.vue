<template>
  <div class="category disf">
    <div class="sideBar">
        <el-menu
            class="el-menu-vertical-demo"
            >
            <el-menu-item index="1" class="texc" @click="changeCity(0)">
                <span slot="title">杭州</span>
            </el-menu-item>
            <el-menu-item index="2" class="texc" @click="changeCity(1)">
                <span slot="title">广州</span>
            </el-menu-item>
            <el-menu-item index="3" class="texc" @click="changeCity(2)">
                <span slot="title">濮院</span>
            </el-menu-item>
            <el-menu-item index="4" class="texc" @click="changeCity(3)">
                <span slot="title">织里</span>
            </el-menu-item>
        </el-menu>
    </div>
    <div class="cateRi">
        <img class="w100 disb" src="../../static/img/2.jpg">
        <div class="chooseSty disf">
            <div  v-for="(item, key,index) in catedata" 
            v-if="index==chooseCity"
            class="chooseSt w100"> 
                <div class="chooseStTitBox w100 disf">
                    <div v-for="(item2,key2,index2) in item" class="chooseStTitBoxOne"
                    @click="changeStyle(index2)">
                        <p :class="chooseStyle==index2? 'chooseStTitAct texc':'chooseStTit texc'">{{key2}}</p>
                    </div>
                </div>
                <div class="styelListBox w100">
                    <div v-for="(item2,key2,index2) in item" class="styelList disf" v-if="index2==chooseStyle">
                        <div class="styelListOne w100" v-for="(item3,key3,index3) in item2">
                            <p class="fenLeiTit">
                               {{key3}} 
                            </p>
                            <div class="fenLeiBox w100 disf" >
                                <div class="fenLeiOne" v-for="(item4,key4,index4) in item3" @click="toListPage(item4.cate_name)">
                                    <img class="w100" :src="item4.img">
                                    <p class="fenLeiText texc">{{item4.cate_name}}</p>
                                </div>
                            </div>
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
import myFooter from "../components/myFooter"

export default {
    data(){
        return{
            footerAct:1,
            chooseCity:0,
            chooseStyle:0
        }
    },

    methods:{

    },
    created() {
      this.$store.dispatch('getdata1');
      console.log(this.$store.dispatch('getdata1'));
    },
    mounted(){

    },
    computed:{
        catedata(){
            console.log(this.$store.state.datas.category);
            return  this.$store.state.datas.category
        }
    },
    methods:{
        changeCity(index){
            console.log(index);
            this.chooseCity=index;
        },
        changeStyle(index){
            console.log(index);
            this.chooseStyle=index;
        },
        toListPage(cate_name){
            console.log(cate_name);
            this.$router.push(
                {
                    path:'/listPage',
                    name:"listPage",
                    params:{//一定要设置name，才可以传params
                        name:"listPage",
                        cate_name: cate_name,
                    }
                }

            )
        }
    },
    components:{
        myFooter
    }
}
</script>

<style scoped>
.category{
    background: #f5f5f5;
}
.sideBar{
    width: 35%;
    background: #fff;
    border-right: 1px solid #f5f5f5;
    float: left;
}
.cateRi{
    width:100%;
    padding: 0 0 120px 5px;
    background: #f5f5f5;
}
.chooseSty{
    margin-top: 10px;
    background: #fff;
}
.myFooter{
  position: fixed;
  bottom: 0;
}
.el-menu-item{
    border: 1px solid #f5f5f5;
}
.chooseStTitBoxOne{
    width: 33.33%;
} 
.chooseStTit{
    padding: 5px 0 5px 0;
    font-size: 17px;
    color:black;
}
.chooseStTitAct{
    padding: 5px 0 5px 0;
    font-size: 17px;
    color: #d81e06;
}
.styelList{
    flex-wrap:wrap;
    justify-content: space-between;
}
.fenLeiTit{
    padding:15px 0 15px 20px;
    font-size:18px;
    background: #f5f5f5;
}
.fenLeiBox{
    flex-wrap:wrap;
}
.fenLeiOne{
    width: 33.33%;
    padding-bottom: 10px;
}
.fenLeiText{
    font-size:15px;
}
</style>