// import state from './state';

// export default {
//   changeAdd() {
//     return `getter(对state的加上一些东西)${state.number}`;
//   },
// };

/*
包含多个基于state的getter计算属性的对象
 */
export default {
  totalCount(state) {
    // reduce 累加
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0);
  },

  totalPrice(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0);
  },

  positiveSize(state) {
    return state.ratings.reduce(
      (preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0),
      0,
    );
  },
};
