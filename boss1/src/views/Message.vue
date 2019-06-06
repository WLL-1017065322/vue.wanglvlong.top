<template>
  <div>
    <header>
      <div class="center">
        <div class="left">聊天</div>
        <div class="right">互动</div>
      </div>
    </header>

    <section>
      <div class="chat">
        <div class="chat-top">
          <div class="left">联系人</div>
          <div class="right">极速处理</div>
        </div>

        <ul class="chat-content">
          <li>
            <div class="left">
              <img src="../assets/images/mayun.jpg" alt>
            </div>
            <div class="right">
              <h4>
                <span>李大</span>
                <span class="time">时间</span>
              </h4>
              <span class="company">美团|经理</span>
              <span class="message">抱歉</span>
            </div>
          </li>

          <li>
            <div class="left">
              <img src="../assets/images/mayun.jpg" alt>
            </div>
            <div class="right">
              <h4>
                <span>李大</span>
                <span class="time">时间</span>
              </h4>
              <span class="company">美团|经理</span>
              <span class="message">抱歉</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="hudong">
        <ul class="hudong-nav">
          <li>对我感兴趣</li>
          <li>看过我</li>
          <li>新职位</li>
        </ul>

        <div class="hudong-content">
          <ul>
            <li>
              <a href="#/detail/0" class>
                <img src="../assets/images/mayun.jpg" alt>
                <div class="text">
                  <div class="title">
                    <h4>web前端</h4>
                    <span>7-8k</span>
                  </div>
                  <div class="name">文鹏系统研发中心</div>
                  <div class="msg">
                    <span>上海</span>
                    <span>应届生</span>
                    <span>大专</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#/detail/0" class>
                <img src="../assets/images/mayun.jpg" alt>
                <div class="text">
                  <div class="title">
                    <h4>web前端</h4>
                    <span>7-8k</span>
                  </div>
                  <div class="name">文鹏系统研发中心</div>
                  <div class="msg">
                    <span>上海</span>
                    <span>应届生</span>
                    <span>大专</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
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
  header {
    width: 100%;
    height: 50px;
    background: #53cac3;
    position: fixed;
    .center {
      width: 33.333%;
      height: 70%;
      border-radius: 10%;
      display: flex;
      margin: 7.5px auto;
      div {
        border: 1px solid #fff;
        width: 50%;
        line-height: 35px;
        text-align: center;
        color: #fff;
      }
    }
  }

  section {
    padding-top: 50px;
    padding-bottom: 10px;
    // background: #fff;
    .chat {
      display: none;
      background: #fff;
      .chat-top {
        width: 100%;
        height: 50px;
        padding: 10px 20px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        .left {
        }
        .right {
          margin: 5px 0;
          line-height: 20px;
          border: 1px solid #8d8d8d;
          color: #8d8d8d;
          border-radius: 8px;
          padding: 0 10px;
          font-size: 12px;
          letter-spacing: 2px;
        }
      }
      .chat-content {
        padding: 0 20px;
        list-style: none;

        li {
          margin: 10px 0px;
          display: flex;
          border-bottom: 1px solid #eee;
          .left {
            height: 57.5px;
            width: 57.5px;
            border-radius: 50%;
            overflow: hidden;
            margin: 10px 10px;
            img {
              width: 100%;
            }
          }
          .right {
            width: 100%;

            padding: 10px 20px;
            h4 {
              display: flex;
              justify-content: space-between;
              font-size: 16px;
              color: #333;
              .time {
                font-size: 12px;
                color: #999;
              }
            }
            .company {
              font-size: 12px;
              color: #999;
            }

            .message {
              display: block;
              font-size: 12px;
              color: #ccc;
            }
          }
        }
      }
    }

    .hudong {
      // display: none;
      .hudong-nav {
        background: #fff;
        padding: 0 20px;
        width: 100%;
        height: 40px;
        display: flex;
        list-style: none;
        // justify-content: space-around;
        // align-items: center;
        border-bottom: 1px solid #eee;
        color: #aaa;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
        li {
          height: 100%;
          width: 33%;
        }
      }

      .hudong-content {
        background: #fff;
        // padding: 15px 20px;
        padding: 0 20px;
        width: 100%;
        ul {
          list-style: none;
          li {
            border-bottom: 1px solid #eee;
            background: #fff;

            a {
              display: flex;

              img {
                width: 59px;
                height: 59px;
                margin: 16px 0 0 18px;
              }
              .text {
                width: 100%;
                padding: 18px 0;
                margin: 0 20px;
                .title {
                  color: #414a60;
                  display: flex;
                  justify-content: space-between;
                  h4 {
                    font-size: 15px;
                  }
                  span {
                    font-size: 12px;
                  }
                }
                .name {
                  font-size: 12px;
                  color: #414a60;
                }
                .msg {
                  font-size: 12px;
                  color: #8892ac;
                  span {
                    margin-right: 14px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
