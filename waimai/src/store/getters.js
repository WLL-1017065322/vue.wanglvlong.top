import state from './state';

export default {
  changeAdd() {
    return `getter(对state的加上一些东西)${state.number}`;
  },
};
