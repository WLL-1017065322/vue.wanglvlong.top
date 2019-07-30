<template>
 <div class="cartcontrol">
     <transition name="move">
       <!-- 减号 -->
       <!-- 防止事件冒泡 修饰符stop -->
         <div class="iconfont icon-removecircleoutline" v-if="food.count" @click.stop="updateFoodCount(false)"></div>

     </transition>
     <!-- 数字 -->
     <div class="cart-count" v-if="food.count">{{food.count}}</div>
     <!-- 加号 -->
     <div class="iconfont icon-addcircle" @click.stop="updateFoodCount(true)"></div>


 </div>
</template>

<script>
export default {
  data() {
    return {


    };
  },
  components: {

  },
  methods: {
    updateFoodCount(isAdd) {
      this.$store.dispatch('updataFoodCount', { isAdd, food: this.food });
    },
  },
  props: {
    food: Object,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/common.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-removecircleoutline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-addcircle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>
