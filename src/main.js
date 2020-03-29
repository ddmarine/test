// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'





import store from './store/index.js'

/*elementUI*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入swiper
import vueSwiper from 'vue-awesome-swiper'
import '../static/swiper-4.3.5.min.css'
Vue.use(vueSwiper)

//引入和使用axios
import axios from "axios"




Vue.prototype.axios =axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
