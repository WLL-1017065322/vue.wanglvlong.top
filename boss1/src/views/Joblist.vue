<template>
  <div>
    <header>
      <div class="top">
        <span>web前端</span>
        <div>
          <a href>+</a> |
          <a href>icon</a>
        </div>
      </div>
      <nav>
        <ul>
          <li>推荐</li>
          <li>上海</li>
          <li>公司</li>
          <li>要求</li>
        </ul>
      </nav>
    </header>

    <section>
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
      </ul>
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
    .top {
      display: flex;
      justify-content: space-between;
      padding: 15.33333px 10px;
      background-color: #53cac3;
      color: #fff;
      a {
        color: #fff;
        padding: 0 10px;
      }
    }
    nav {
      width: 100%;
      height: 41.39px;
      background: #fff;
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        li {
          width: 25%;
          line-height: 41.39px;
          text-align: center;
          position: relative;
          color: #8d8d8d;
          font-size: 12px;
          // cursor: pointer;
        }
        li:nth-child(1)::after,
        li:nth-child(2)::after,
        li:nth-child(3)::after {
          content: "";
          border: 0.5px solid #8d8d8d;
          height: 20px;
          position: absolute;
          top: 25%;
          left: 100%;
        }
      }
    }
  }

  section {
    padding: 20px 15px;
    ul {
      list-style: none;
      li {
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
</style>
