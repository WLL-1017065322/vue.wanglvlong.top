/*
Action:通过操作mutation间接更新state的多个方法的对象
 */
import {
  reqAddress, reqCategorys, reqShops, reqShopInfo, reqShopGoods,
} from '../api';

export default {
  // 首页

  // 获取异步地址
  async getAddress({ commit, state }) {
    const geohash = `${state.latitude},${state.longitude}`; // 地址后的经纬度
    const result = await reqAddress(geohash);
    if (result.code === 0) {
      const address = result.data;
      commit('receive_address', { address });
    }
  },

  // 异步获取食物分类
  async getCategorys({ commit }) {
    const result = await reqCategorys();
    //   提交mutation
    if (result.code === 0) {
      const categorys = result.data;
      commit('receive_categorys', { categorys });
    }
  },

  // shop 详细页
  // 异步获取附近商家
  async getShops({ commit }) {
    // 对象的解构赋值
    // const { longitude, latitude } = state;
    // const result = await reqShops(longitude, latitude);
    const result = await reqShops();
    if (result.code === 0) {
      const shops = result.data;
      commit('receive_shops', { shops });
    }
  },

  // 异步获取商家信息
  async getShopInfo({ commit }) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      commit('receive_info', { info });
    }
  },
  // 异步获取点餐信息(mock模拟数据)
  async getShopGoods({ commit }) {
    const result = await reqShopGoods();
    if (result.code === 0) {
      const goods = result.data;
      commit('receive_goods', { goods });
    }
  },
};
