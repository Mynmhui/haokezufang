<template>
  <div>
    <router-view></router-view>
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/ ">
        <i slot="icon" class="toutiao toutiao-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>

      <van-tabbar-item to="/room">
        <i slot="icon" class="toutiao toutiao-sousuo"></i>
        <span class="text">找房</span>
      </van-tabbar-item>

      <van-tabbar-item to="/information">
        <i slot="icon" class="toutiao toutiao-wenda"></i>
        <span class="text">资讯</span>
      </van-tabbar-item>

      <van-tabbar-item to="/my">
        <i slot="icon" class="toutiao toutiao-wode"></i>
        <span class="text">我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<style lang="less" scoped>
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}

</style>
