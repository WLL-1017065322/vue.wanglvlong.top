<template>
  <div>
    <header>
      <div class="top">公司</div>
      <nav>
        <ul>
          <li>融资</li>
          <li>规模</li>
          <li>行业</li>
        </ul>
      </nav>

      <section>
        <ul>
          <li class="clear">
            <div class="left">
              <img src="../assets/images/logo_1.jpg" alt>
            </div>
            <div class="right">
              <h4>文思海辉</h4>
              <span class="address">上海市黄浦区</span>
              <p>
                <span>IT软件</span>
                <span>|</span>
                <span>不需要融资</span>
                <span>|</span>
                <span>10000人以上</span>
              </p>
              <div class="rezhao">
                热招:
                <span style="color: rgb(118, 213, 207);">前端工程师</span>等
                <span>2086</span>个职位
                <span class="icon-right pull-right"></span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </header>
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
      width: 100%;
      height: 54.41px;
      background: #53cac3;
      line-height: 54.41px;
      color: #fff;
      text-align: center;
      font-size: 18px;
    }

    nav {
      width: 100%;
      height: 45.41px;
      background-color: #fff;
      ul {
        width: 100%;
        height: 45.41px;
        display: flex;
        list-style: none;
        justify-content: space-around;
        line-height: 45.41px;
        align-items: center;
        text-align: center;

        li {
          width: 33.33%;
          font-size: 12px;
          color: #8d8d8d;
          position: relative;
        }
        li:nth-child(1)::after,
        li:nth-child(2)::after {
          content: "";
          border: 0.5px solid #8d8d8d;
          height: 12px;
          position: absolute;
          top: 35%;
          left: 100%;
        }
      }
    }

    section {

      ul {
        padding: 20px 10px;
        li {
          // padding: 20px 10px;
          background-color: #fff;
          display: flex;
          .left {
            margin: 30px;
            width: 50px;
            height: 50px;
            img{
              width: 100%;
              height: 100%;
            }


          }

          .right {
            h4 {
              margin: 10px 0;
              letter-spacing: 1px;
            }

            .address {
              font-size: 12px;
              color: #8d8d8d;
              margin: 10px 0 20px 0;
            }

            p {
              display: flex;
              font-size: 12px;
              margin-bottom: 20px;
              span {
                margin-right: 5px;
                margin-top: 20px;
              }
            }

            .rezhao {
              font-size: 12px;
              height: 53.75px;
              padding: 18.38px 0;
              letter-spacing: 1px;
              border-top: .5px solid #e5e5e5;

            }



          }

        }
      }

    }
  }
}
</style>
