export default {
  receive_address(state, { address }) {
    state.address = address;
  },
  receive_categorys(state, { categorys }) {
    state.categorys = categorys;
  },
  receive_shops(state, { shops }) {
    state.shops = shops;
  },
  receive_info(state, { info }) {
    state.info = info;
  },
  // mock模拟数据
  receive_goods(state, { goods }) {
    state.goods = goods;
  },
};
