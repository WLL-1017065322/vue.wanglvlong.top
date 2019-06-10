<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "name",
  mounted() {
    //组件开始挂载时获取用户信息
    this.getUserInfo();
  },
  methods: {
    //请求用户的一些信息
    getUserInfo() {
      //发送http请求获取，这里写死作演示
      this.userInfo = {
        nick: "Doterlin",
        ulevel: 20,
        uid: "10000"
        // portrait: 'images/profile.png'
      };
    }

    //实例开发中这里会向服务端请求数据
    //如下(用了vue-resource):
    //获取信息请求
    // ts.$http.get(url,{
    //   "params": this.userInfo
    // }).then((response) => {
    //   //success
    //   if(response.data.code == 0){
    //     this.$store.commit('updateUserInfo',this.userInfo);
    //   }
    // },(response) => {
    //   //error
    // })
  }
};
</script>




<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }

    // &父选择器
  }
}
</style>
