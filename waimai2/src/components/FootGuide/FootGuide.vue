<template>
 <footer class="footer_guide">

      <!-- <router-link to="/main">Main</router-link> |
      <router-link to="/search">search</router-link> |
      <router-link to="/order">order</router-link> |
      <router-link to="/aboutme">aboutme</router-link> | -->

      <router-link to="/main" class="guide_item">
          <span class="item_icon">
              <i class="iconfont icon-food"></i>
          </span>
          <span>首页</span>
      </router-link>

      <router-link to="/search" class="guide_item">
          <span class="item_icon">
              <i class="iconfont icon-search"></i>
          </span>
          <span>搜索</span>
      </router-link>

      <router-link to="/order" class="guide_item">
          <span class="item_icon">
              <i class="iconfont icon-single"></i>
          </span>
          <span>订单</span>
      </router-link>

      <router-link to="/aboutme" class="guide_item">
          <span class="item_icon">
              <i class="iconfont icon-user"></i>
          </span>
          <span>我的</span>
      </router-link>


 </footer>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  components: {

  },
};
</script>


<style lang="stylus" rel="stylesheet/stylus">
/*引入公共样式*/
@import "../../common/common.styl"
.footer_guide
  // 顶部有白色的边框
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex

  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    // color #999999
   // &.on
    //  color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom -1px
      .iconfont
        font-size 22px

.router-link-active
   color #02a774


//默认样式改变
a {
    text-decoration none;
    color #999999
}
</style>
