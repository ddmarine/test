<template>
  <div class="header w100">
    <div class="headerMainBox oveh disf">
      <div class="headerLeft disf">
        <i class="iconfont icon-location"></i> 
        <el-select v-model="locvalue"
          style="width:80px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      
      <div class="searchBox disf oveh">
        <input class="searchInput" placeholder="请输入要查找的商品"></input>
        <p>搜索</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      options: [{
          value: '选项1',
          label: '杭州'
        }, {
          value: '选项2',
          label: '广州'
        }, {
          value: '选项3',
          label: '上海'
        }],
      locvalue:"杭州"
    }
  },
  mounted(){
    document.getElementsByClassName("el-input__inner")[0].style.borderRadius="25px";
    document.getElementsByClassName("el-input__inner")[0].style.border="0px";
  }
}
</script>

<style scoped>
.header{
  background: gray;
}
.headerMainBox{
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  background: lightseagreen;
}
.headerLeft{
  align-items: center;
}
.icon-location{
  margin-left: 10px; 
  margin-right: 5px;
  color: #F14A3D;
  font-size: 20px;
}
.searchBox{
  width: 50%;
  height: 30px;
  border-radius: 15px;
  margin-right: 5%;
  align-items: center;
  background: #F4F4F4;
}
.searchBox>p{
  width: 30%;
  height: 30px;
  margin-right: 0;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background: #F14A3D;
}
.searchInput{
  width: 70%;
  display: block;
  border: 0px;
  margin-left: 3px;
  background: #F4F4F4;
}
</style>