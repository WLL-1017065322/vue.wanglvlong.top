<template>
  <div id="app">
    <router-view/>

    <!-- 不安全,控制台可以改display -->
    <foot-guide v-show="$route.meta.showFooter"></foot-guide>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide';

export default {
  data() {
    return {

    };
  },
  components: {
    FootGuide,

  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 整个应用组件的样式
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
