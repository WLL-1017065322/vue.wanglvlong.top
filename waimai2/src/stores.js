import Vue from 'vue';
import Vuex from 'vuex';

import reqCategorys from './api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categorys: [], // 食品分类数组
  },
  mutations: {
    // RECEIVE_CATEGORYS = 'receive_categorys' // 接收分类数组
  },
  actions: {},
});
