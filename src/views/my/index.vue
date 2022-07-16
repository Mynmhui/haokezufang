<template>
  <div>
    <div class="header">
      <!-- 登陆时的页面 -->
      <div v-if="isLogin" class="tup">
        <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
      </div>
      <!-- /登陆时的页面 -->
      <!-- 未登录时的界面 -->
      <div v-else class="tup">
        <img src="@/assets/wode-beijintu.png" alt="" />
      </div>
      <!-- /未登录时的界面 -->
      <div class="grid">
        <van-grid :column-num="3">
          <van-grid-item icon="photo-o" text="我的收藏">
            <template #icon>
              <van-icon name="star-o" />
            </template>
          </van-grid-item>
          <van-grid-item icon="photo-o" text="我的出租">
            <template #icon>
              <van-icon name="wap-home-o" />
            </template>
          </van-grid-item>
          <van-grid-item icon="photo-o" text="看房记录">
            <template #icon>
              <van-icon name="clock-o" />
            </template>
          </van-grid-item>
          <van-grid-item icon="photo-o" text="成为房主">
            <template #icon>
              <van-icon name="peer-pay" />
            </template>
          </van-grid-item>
          <van-grid-item icon="photo-o" text="个人资料">
            <template #icon>
              <van-icon name="contact" />
            </template>
          </van-grid-item>
          <van-grid-item icon="photo-o" text="联系我们">
            <template #icon>
              <van-icon name="service-o" />
            </template>
          </van-grid-item>
        </van-grid>
        <div class="ad">
          <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
        </div>
      </div>
      <!-- 登录时的浮动盒子 -->
      <div v-if="isLogin" class="footer">
        <div class="toux">
          <img src="@/assets/touxiang.png" alt="" />
        </div>
        <div class="text">
          <p>好客_456789</p>
          <span @click="logout">退出</span>
        </div>
        <div class="text">编辑个人资料</div>
      </div>
      <!-- 登录时的浮动盒子 -->
      <!-- 未登录时的浮动盒子 -->
      <div v-else class="footer" @click="goLogin">
        <div class="toux">
          <img src="@/assets/touxiang.png" alt="" />
        </div>
        <div class="wedl">
          <p>游客</p>
          <span>去登陆</span>
        </div>
      </div>
      <!-- /未登录时的浮动盒子 -->

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return !!this.$store.state.user.token
    },
  },
  methods: {
    logout() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "是否确认退出？",
        })
        .then(() => {
          // on confirm
          this.$store.commit("setUser", {})
        })
        .catch(() => {
          // on cancel
        })
    },
    goLogin() {
      this.$router.push("/login")
    },
  },
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  width: 375px;
  background-color: #fff;

  .tup img {
    width: 100%;
    height: 300px;
  }

  .ad {
    text-align: center;
    img {
      width: 92%;
    }
  }
}
.footer {
  position: absolute;
  width: 319px;
  height: 207px;
  bottom: 250px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  text-align: center;
  font-size: 13px;

  .toux img {
    position: absolute;
    width: 60px;
    left: 40%;
    transform: translateY(-50%);
    border: 5px solid #fff;
    border-radius: 50%;
  }

  .text {
    margin: 50px 0;
  }
  .text span {
    color: #fff;
    border-radius: 30px;
    padding: 2px 15px;
    background: #21b97a;
    font-size: 12px;
  }
  .wedl {
    margin: 50px 0;
  }
  .wedl span {
    color: #fff;
    border-radius: 3px;
    padding: 6px 15px;
    background: #21b97a;
    font-size: 12px;
  }
  .grid {
  position: absolute;
    // top: 600px;
    // transform: translateY(-50%);
    height: 600px;
  }
}
</style>
