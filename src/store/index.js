import Vue from "vue"
import Vuex from "vuex"

import axios from "axios"
Vue.use(Vuex)

let store = new Vuex.Store({
    state:{//this.$store.state.数据相当于data
		datas:[],//json数据
		car:[]//购物车
		//{id:ID,count:数量,price价格,selected:false选中与否}
	},
    mutations:{//this.$store.commit.方法
        getdata(state,res1){
			console.log(state)
			console.log(res1)
			state.datas = res1.data;
			console.log(state.datas)
		},

    },
    actions:{//this.$store.dispatch.调用
		getdata1(context){
			axios.get("../../static/data.json").then((res) =>{
				console.log(res);
				context.commit("getdata",res)//context.commit就是mutations
			})
		}
	},

})

export default store