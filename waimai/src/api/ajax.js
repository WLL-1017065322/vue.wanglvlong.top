// vue axiosde 初步封装
// import Vue from 'vue'
import axios from 'axios';
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export default function ajax(url = '', data={}, type = 'GET') {
  return new Promise((resolve, reject) => {
    if (type === 'GET') {
      // 处理 data 待定===========
      axios
        .get(url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      axios
        .post(url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

// export default function ajax(url = '', data = {}, type = 'GET') {
//   return new Promise((resolve, reject) => {

// }
