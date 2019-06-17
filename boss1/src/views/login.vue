<template>
  <div class="login-bg">
    <div id="login">
      <h3>登录BOSS直聘</h3>
      <form action>
        <div class="login-btn">
          <span class="login-btn1 cur">密码登录</span>
          <span class="login-btn2">短信登录</span>
        </div>
        <div class="info-login">
          <input type="text" placeholder="手机号" v-model="phoneNumber">
          <input type="password" placeholder="密码" v-model="password">
          <input type="button" value="请向右滑动组件">
          <input type="button" value="登录" @click="login">
        </div>

        <!-- <div class="info-login">
          <input type="text" value="手机号">
          <input type="text" value="密码">
          <input type="button" value="请向右滑动组件">
          <input type="button" value="登录">
        </div>-->
      </form>

      <!-- 底部 -->

      <div class="login-footer">
        <span>
          没有账号？
          <!-- <a href>立即注册</a> -->
          <router-link to="/register">立即注册</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { setTimeout } from "timers";
export default {
  name: "",
  data() {
    return {
      isLogin: false,
      phoneNumber: "",
      password: "",
      accounts: [],
      swiperList: [],

      apiAhoneNumber: "",
      apiPassword: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    login() {
      //登录请求
      // 登陆时与api里的账号密码比较
      for (let i = 0; i < this.accounts.length; i++) {
        if (
          this.accounts[i].phoneNumber == this.phoneNumber &&
          this.accounts[i].password == this.password
        ) {
          // 设置登录状态
          this.isLogin = true;
          // return this.$router.push('/joblist')
          setTimeout(() => {
            let expireDays = 1000*60*60*24;//过期
            this.setCookie('session','bababa...',expireDays);
            this.isLogin = false;
            this.$router.push('/joblist');
          },3000);
        }
      }
      // return alert("1");
    },
    getLoginApi() {
      axios
        .get("api/001.json", {
          // params:{
          //   id: this.$route.params.id,
          // }
        })
        .then(this.handleGetLoginApi);
    },
    handleGetLoginApi(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        // this.swiperList = data.swiperList;
        // console.log(JSON.parse(JSON.stringify(this.swiperList)));
        this.accounts = data.account;
        // this.accounts = JSON.parse(JSON.stringify(this.accounts));

        // console.log(JSON.parse(JSON.stringify(this.accounts)));
        // console.log(this.accounts)

        // console.log(typeof res.data.account)
      }
    }
  },

  mounted() {
    console.log("1");
    this.getLoginApi();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background: #fff;
  // background: linear-gradient(to bottom, #a46e92 0%,#27455d 100%)
  h3 {
    color: #5dd5c8;
    text-align: center;
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.5px;
    position: relative;
  }

  form {
    padding-top: 20px;
    margin: 0 15px;
    .login-btn {
      display: flex;
      justify-content: space-between;
      height: 22px;
      margin-bottom: 44px;
      text-align: center;
      padding-bottom: 15px;
      // 处理元素空白
      white-space: nowrap;

      //   @media (max-width: 800px) {
      //     display: table;
      //     width: 100%;
      //     border-bottom-width: 0;
      //   }

      span {
        display: inline-block;
        width: 70px;
        font-size: 14px;
        color: #9fa3b0;
        // margin: 0 28px -2px;
        // padding: 8px 0 15px;
        height: 36px;
        border-bottom: 2px solid #f2f5f9;
        cursor: pointer;
        // width: 50%;

        @media (max-width: 800px) {
          //============
          display: table-cell;
          width: 50%;
          text-align: center;
          padding-top: 8px;
        }
        .cur {
          border-bottom-color: #62d5c8;
          font-size: 16px;
          color: #414a60;
        }
        .login-btn1 {
          margin-left: 0;
        }
        .login-btn2 {
          text-align: center;
        }
      }
      span:hover {
        color: #414a60;

        border-bottom-color: #62d5c8;
      }
    }
    .info-login {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      input {
        margin: 18px 0;
        width: 100%;
        height: 42px;
      }

      input:nth-child(4){
        background: #5dd5c8;
        border: 0;
        color: #fff;
      }
    }
  }

  .login-footer {
    text-align: center;
    span {
      color: #aaa;
      font-size: 14px;
      a {
        color: #5dd5c8;
      }
    }
  }
}
</style>
