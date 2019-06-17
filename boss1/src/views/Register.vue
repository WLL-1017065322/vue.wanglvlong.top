<template>
  <div class="register-bg">
    <div id="register">
      <h3>注册BOSS直聘</h3>
      <form action>
        <div class="info-register">
          <input type="text" placeholder="手机号" v-model="phoneNumber">
          <input type="password" placeholder="密码" v-model="password">
          <input type="button" value="请向右滑动组件">
          <input type="text" placeholder="短信验证码">
          <input type="button" value="注册" @click="register">
        </div>

        <!-- <div class="info-register">
          <input type="text" value="手机号">
          <input type="text" value="密码">
          <input type="button" value="请向右滑动组件">
          <input type="button" value="登录">
        </div>-->
      </form>

      <!-- 底部 -->

      <div class="register-footer">
        <span>
          已有账号？
          <!-- <a href>立即注册</a> -->
          <router-link to="/">直接登录</router-link>
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
    return {};
  },
  props: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.register-bg {
  background: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  #register {
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
      padding-top: 30px;
      margin: 0 15px;
      .info-register {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        input {
          margin: 18px 0;
          width: 100%;
          height: 42px;
        }
        input:nth-child(5){
          background: #5dd5c8;
          color: #fff;
          border: 0;
        }
      }
    }

    .register-footer {
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
}
</style>
