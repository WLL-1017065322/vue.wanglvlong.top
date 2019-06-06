<template>
  <div>
    <header>
      <div class="content">
        <div class="erweima">[ - ]</div>
        <div class="name">long</div>
        <div class="shezhi">设置</div>
      </div>
    </header>

    <nav>
      <div class="top">
        <div class="left">
          <div class="name">long</div>
          <div class="home">我的个人主页 ></div>
        </div>
        <div class="right">
          <img src="../assets/images/mayun.jpg" alt srcset>
        </div>
      </div>
      <div class="bottom">
        <div class="item">
          <div>9</div>
          <div class="nav-text">沟通过</div>
        </div>
        <div class="item">
          <div>9</div>
          <div class="nav-text">沟通过</div>
        </div>
        <div class="item">
          <div>9</div>
          <div class="nav-text">沟通过</div>
        </div>
        <div class="item">
          <div>9</div>
          <div class="nav-text">沟通过</div>
        </div>
      </div>
    </nav>

    <section>
      <div class="content">
        <div class="item1">
          <a class="zhushou">
            <span>求职助手</span>
            <span>多种道具助你提升求职成功率</span>
          </a>
          <a href>
            <span>icon</span>
            <span>我的微简历</span>
          </a>
          <a href>
            <span>icon</span>
            <span>附件简历</span>
          </a>
          <a href>
            <span>icon</span>
            <span>管理求职意向</span>
          </a>
        </div>
        <div class="item2">
          <a href>
            <span>icon</span>
            <span>牛人问答</span>
          </a>
          <a href>
            <span>icon</span>
            <span>关注公司</span>
          </a>
          <a href>
            <span>icon</span>
            <span>隐私设置</span>
          </a>
        </div>
        <div class="item3">
          <a href>
            <span>icon</span>
            <span>提升简历排名</span>
          </a>
          <a href>
            <span>icon</span>
            <span>钱包</span>
          </a>
        </div>
        <div class="item4">
          <a href>
            <span>icon</span>
            <span>帮助与反馈</span>
          </a>
          <a href>
            <span>icon</span>
            <span>首都网警</span>
          </a>
        </div>
      </div>
    </section>

    <footer>
      <div class="content">
        <div>
          <span>客服电话：400-065-5799</span>
          <span>工作时间：9.30-18.30</span>
        </div>
        <div>
          <span>用户协议|经营执照|防骗指南|首都网警</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="scss">
div {
  // background-color: #eee;
  header {
    width: 100%;
    height: 40px;
    color: #fff;

    .content {
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      justify-items: center;
      line-height: 40px;
      position: fixed;
      height: 40px;
      width: 100%;
      background-color: #53cac3;
    }
  }

  nav {
    width: 100%;
    height: 200px;

    .top {
      padding: 30px 10px;
      background-color: #53cac3;
      height: 130px;
      width: 100%;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
      }

      .right {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .bottom {
      display: flex;
      background-color: #fff;
      height: 70px;
      width: 100%;
      justify-content: space-around;
      // overflow: hidden;
      border: 10px solid transparent;
      .item {
        // margin:5px -20px;
        // padding: 10px 0;
        width: 25%;
        height: 40px;
        text-align: center;
        .nav-text {
          padding-top: 5px;
          font-size: 12px;
          color: #aaa;
        }
      }
    }
  }

  section {
    // overflow: hidden;
    height: 650px;
    .content {
      // margin: 10px 0;
      background: #fff;
      div::before {
        display: block;
        content: "";
        width: 100%;
        height: 10px;
        background-color: #eee;
      }

      a {
        display: block;
        color: #000;
        // margin: 20px;
        padding: 15px;
      }

      .item1 {
        .zhushou {
          // height: 50px;
          // line-height: 50px;
          display: flex;
          flex-direction: column;
          span:nth-child(1) {
          }
          span:nth-child(2) {
            color: #999;
            font-size: 13px;
          }
        }
        a {
          display: block;
          color: #000;
        }
      }
    }
  }

  footer {
    width: 100%;
    height: 110px;
    // margin-bottom: 70px;
    // background-color: #aaa;

    .content {
      // margin: 20px 20px;
      color: #aaa;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
