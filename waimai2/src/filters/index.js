//   需要在main.js加载
import Vue from 'vue';
import moment from 'moment';
// import format from 'date-fns/format'
// 自定义过滤器
Vue.filter(
  'date-format',
  (value, formatStr = 'YYYY-MM-DD HH:mm:ss') => moment(value).format(formatStr),
  //   return format(value, formatStr)
);
