import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 设置cookie,增加到vue实例方便全局调用
// vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
// 当然，如果session保存到vuex的话除外
Vue.prototype.setCookie = (c_name, value, expiredays) => {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = `${c_name}=${escape(value)}${
    expiredays == null ? '' : `;expires=${exdate.toGMTString()}`
  }`;
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
  created() {
    // 打开页面时前端,检查他是否已经登录，不需要用户再次登录 2.0
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      // 检查是否存在session 1.0
      if (!this.getCookie('session')) {
        this.$router.push('/login');
      } else {
        this.$router.push('/user_info');
      }
    },
  },
  // 监听路由检查登录 3.0
  watch: {
    $route: 'checkLogin',
  },
}).$mount('#app');

// h 是 Vue.js 里面的 createElement 函数，
// 这个函数的作用就是生成一个 VNode节点，
// render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，
// 渲染成真实 DOM 节点，并挂载到根节点上
