import Vue from 'vue';
// 引入mintui全部组件   的tabbar
import Mint from 'mint-ui';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Mint);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
