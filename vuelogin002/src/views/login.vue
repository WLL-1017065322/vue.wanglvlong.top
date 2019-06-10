<template>
  <div class="login" id="login">
    denglu
    <a href="javascript:;" class="log-close">
      <i class="icons close"></i>
    </a>
    <div class="log-bg">
      <div class="log-cloud cloud1"></div>
      <div class="log-cloud cloud2"></div>
      <div class="log-cloud cloud3"></div>
      <div class="log-cloud cloud4"></div>

      <div class="log-logo">Welcome!</div>
      <div class="log-text">@doterlin</div>
    </div>
    <div class="log-email">
      <input
        type="text"
        placeholder="Email"
        :class="'log-input' + (account==''?' log-input-empty':'')"
        v-model="account"
      >
      <input
        type="password"
        placeholder="Password"
        :class="'log-input' + (password==''?' log-input-empty':'')"
        v-model="password"
      >
      <a href="javascript:;" class="log-btn" @click="login">Login</a>
    </div>
    <Loading v-if="isLoging" marginTop="-30%"></Loading>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
export default {
  name: "Login",
  data() {
    return {
      isLoging: false,
      account: "",
      password: ""
    };
  },
  components: {
    // Loading
  },
  methods: {

    login(){
      if(this.account!=''&&this.password!=''){
        this.toLogin();
      }
    },
    toLogin(){
      //一般要跟后端了解密码的加密规则
  		//这里例子用的哈希算法来自./js/sha1.min.js
  		// let password_sha = hex_sha1(hex_sha1( this.password ));
  		// //需要想后端发送的登录参数
  		// let loginParam = {
  		// 	account: this.account,
  		// 	password_sha
    // }
     //设置在登录状态
      this.isLoging = true;

      //演示用
  		setTimeout(()=>{
        //登录状态15天后过期
        let expireDays = 1000 * 60 * 60 * 24 * 15;
  			this.setCookie('session','blablablablabla...', expireDays);
        this.isLoging = false;
        //登录成功后
  			this.$router.push('/user_info/');
  		},0)
  	}
  }
};
</script>

<style scoped lang="scss">
</style>
