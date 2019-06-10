<template>
  <div>
    <transition name="fade">
      <div class="info">
        <!-- <img class="portrait" :src="$store.state.userInfo.portrait" width="200" height="200"> -->

        <div class="user-info">
          <h1 class="nick" v-text="'Hello, ' + $store.state.userInfo.nick"></h1>
          <a href="javascript:;" class="logout" @click="logout" v-if="!isLogouting">[退出]</a>
        </div>
        <Loading v-if="isLogouting" marginTop="3%"></Loading>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      isLogouting: false
    };
  },
  components: {},
  computed: {
    // levelClass() {
    //   var level = this.level;
    //   if (1 <= level && level <= 7) {
    //     return 1;
    //   } else if (8 <= level && level <= 16) {
    //     return 2;
    //   } else if (16 <= level && level <= 31) {
    //     return 3;
    //   } else if (32 <= level && level <= 63) {
    //     return 4;
    //   } else if (64 <= level && level <= 127) {
    //     return 5;
    //   } else if (128 <= level && level <= 254) {
    //     return 6;
    //   } else {
    //     return 6;
    //   }
    // }
  },
  methods: {
    //注销
    logout() {
      //删除cookie并跳到登录页
      this.isLogouting = true;
      this.delCookie("session");
      //演示
      setTimeout(() => {
        this.$router.push("/login/");
        this.isLogouting = false;
      }, 0);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
