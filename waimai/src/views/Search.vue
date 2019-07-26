<template>
 <section class="search">
   <header-top title="搜索"></header-top>
   <form action="" class="search_form">
     <input type="search" placeholder="请输入商家名称" v-model="keyword">
     <input type="submit" class="search_submit">
   </form>
   <section class="list" v-if="!ison">
     <ul class="list_container">
       <router-link :to="{path:'/shop',query:{id:111}}" tag="li" class="list_li">
          <section class="item_left">
            <img src="" class="restaurant_img" alt="" srcset="">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span></span>
              </p>
              <p>月售12单</p>
              <p>19元起送/距离112</p>
            </div>
          </section>

       </router-link>


     </ul>
   </section>
   <div class="search_none" v-else>很抱歉!无搜索结果</div>
 </section>
</template>

<script>
import HeaderTop from '../components/HeaderTop/HeaderTop'
 export default {
   data () {
     return {
       keyword:'',
       ison: false,

     }
   },
   components: {
     HeaderTop
   }
 }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../common/common.styl'
  .search
    width 100%
    height 100%
    overflow hidden
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774

    .list
      .list_container
        background-color: #fff;
        .list_li
          display: flex;
          justify-content: center;
          padding: 10px
          border-bottom: 1px solid $bc;
          .item_left
            margin-right: 10px
            .restaurant_img
              width 50px
              height 50px
              display block
          .item_right
            font-size 12px
            flex 1
            .item_right_text
              p
                line-height 12px
                margin-bottom 6px
                &:last-child
                  margin-bottom 0
    .search_none
      margin: 0 auto
      color: #333
      background-color: #fff
      text-align: center
      margin-top: 0.125rem
</style>