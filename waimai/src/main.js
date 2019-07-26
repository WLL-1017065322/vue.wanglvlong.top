import Vue from 'vue';
import axios from 'axios';
import { Button } from 'mint-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App';
import router from './router';
// 引入 vuex的store
import store from './store/index';
// import fetch from './api/ajax';

// 引入mockserver
import './mock/mockServer';

// require styles
import 'swiper/dist/css/swiper.css'; // <mt-button>

// FastClick.attach(document.body)
// Vue.config.productionTip = false

// Vue.use(VueLazyload, { // 内部自定义一个指令lazy
//   loading
// })

// Vue.config.productionTip = false;
// import ajax from './api/ajax';

Vue.use(VueAwesomeSwiper /* { default global options } */);

// 引入VueLazyload插件
// import VueLazyload from 'vue-lazyload'
// 将一张loading图片加载进来
// import loading from './common/imgs/loading.gif'

// 引入fastclick并绑定到body 解决移动端点击响应延迟0.3s的问题
// import FastClick from 'fastclick'
// import './filters'
// 加载mockServer
// import './mock/mockServer.js'
// 注冊全局组件标签

Vue.component(Button.name, Button);
// Vue.prototype.$ajax = ajax;
// Vue.prototype.$abcde = 123;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
