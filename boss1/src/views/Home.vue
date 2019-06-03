<template>
  <div class="home">
    <router-view></router-view>
    <div class="banner">
      <router-link to="/joblist">
        <span>职位</span>
      </router-link>
      <router-link to="/company">
        <span>公司</span>
      </router-link>
      <router-link to="/message">
        <span>消息</span>
      </router-link>
      <router-link to="/aboutme">
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: "home",
  components: {}
};
</script>

<style scoped lang="scss">
.banner {
  position: absolute;
  bottom: 0;
}
</style>