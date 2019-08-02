import Vue from 'vue';

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
  // receive_info(state, { info }) {
  //   state.info = info;
  // },
  // mock模拟数据
  receive_goods(state, { goods }) {
    state.goods = goods;
  },
  receive_ratings(state, { ratings }) {
    state.ratings = ratings;
  },
  receive_info(state, { info }) {
    state.info = info;
  },
  increment_food_count(state, { food }) {
    if (!food.count) {
      // 对象,属性名,属性值
      // food.count = 1 新增属性没有数据绑定
      Vue.set(food, 'count', 1);
      // shopcart 相关 ,(点击+ 添加food给cartFoods)
      state.cartFoods.push(food);
    } else {
      food.count += 1;
    }
  },
  decrement_food_count(state, { food }) {
    if (food.count) {
      food.count -= 1;
      if (food.count === 0) {
        // 将food从cartFoods移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
      }
    }
  },
  // 清除购物车数据
  clearShopCartGoods(state) {
    // 清除food的count
    state.cartFoods.forEach((food) => {
      food.count = 0;
    });
    state.cartFoods = [];
  },

  // 搜素
  receive_searchShops(state, { searchShops }) {
    state.searchShops = searchShops;
  },
};
