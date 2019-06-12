import Vue from 'vue';
// 引入mintui全部组件   的tabbar
import Mint from 'mint-ui';
import Vuex from 'vuex';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuex);
Vue.use(Mint);

Vue.config.productionTip = false;

// 设置cookie,增加到vue实例方便全局调用
// vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
// 当然，如果session保存到vuex的话除外
Vue.prototype.setCookie = (c_name, value, expiredays) => {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = `${c_name}=${escape(value)}${expiredays == null ? '' : `;expires=${exdate.toGMTString()}`}`;
};

// 获取cookie、
function getCookie(name) {
  let arr;
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  if ((arr = document.cookie.match(reg))) return arr[2];
  return null;
}
Vue.prototype.getCookie = getCookie;

// 删除cookie
Vue.prototype.delCookie = (name) => {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(name);
  if (cval != null) document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`;
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
