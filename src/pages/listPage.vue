<template>
  <div>
      <div class="listPagTop w100 disf">
        <div class="listPagTopLeft disf">
            <i class="disb iconfont icon-jiantou"></i>
            <p>列表</p>
            <p>></p>
            <p>{{cateName}}</p>
        </div>
        <i class="iconfont icon-shouye disb" @click="goHome()"></i>
      </div>
      <div class="goodsListBox w100 disf">
        <div  v-for="(item,key,index) in goodsData" 
        class="goodsOne texc"
        @click="goDetail(key)">
            <img class="w100" :src="item.listimg">
            <p>{{item.msg}}</p>
            <p>{{key}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            thisGoods:{},
            cateName:''
        }
    },
    created() {
      this.$store.dispatch('getdata1');
      console.log(this.$store.dispatch('getdata1'));
    },
    mounted(){
        console.log(this.$route.params.cate_name);
        this.catedata();
    },
    computed:{
        goodsData(){
            console.log(this.$route.params.cate_name);
            var cateName = this.$route.params.cate_name;
            this.cateName=cateName;
            console.log(this.cateName);
            console.log(this.$store.state.datas.goods);
            var thisGoods = this.$store.state.datas.goods;
            console.log(thisGoods[cateName]);
            this.thisGoods=thisGoods[cateName];
            console.log(this.thisGoods);
            return thisGoods[cateName];
        }
    },
    methods:{
        goHome(){
            this.$router.push({path:"/"})
        },
        goDetail(key){
            console.log(this.cateName);
            console.log(key);
            this.$router.push(
                {
                    path:'/detailPage',
                    name:"detailPage",
                    params:{//一定要设置name，才可以传params
                        name:"detailPage",
                        cate_name: this.cateName,
                        key: key,
                    }
                }
            )
        }
    }
}
</script>

<style scoped>
.listPagTop{
    height: 40px;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid lightgray;
    margin-bottom: 20px;
}
.listPagTopLeft{
    height: 40px;
    align-items: center;
}
.listPagTopLeft>i{
    margin-left: 20px;
}
.listPagTopLeft>p{
    margin-left: 20px;
    font-size: 16px;
}
.listPagTop>i{
    font-size: 16px;
}
.goodsListBox{
    justify-content: space-around;
    flex-wrap: wrap;
}
.goodsOne{
    width: 47%;
    border:1px solid #d81e06;
    margin-bottom: 6px;
    font-size: 16px;
}
.goodsOne>p{
    padding:15px 0 15px 0;
}
</style>