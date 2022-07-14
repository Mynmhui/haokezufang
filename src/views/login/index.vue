<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="账号登录" left-arrow>
      <template></template>
    </van-nav-bar>
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        name="username"
        placeholder="请输入账号"
        :rules="userFormRules.username"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="userFormRules.password"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
      <div class="van-cell-item">
        <a href="#">还没有账号，去注册~</a>
      </div>
    </van-form>
  </div>
</template>

<script>
// import { Toast } from 'vant'

import { login } from '@/api/user'

export default {
  data () {
    return {
      user: {
        username: 'hzhmqd',
        password: '123456'
      },
      userFormRules: {
        username: [
          { required: true, message: '账号不能为空' },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: '账号格式错误，请输入不低于四位并且不超出十六位的账号'
          }
        ],
        password: [
          { required: true, message: '密码不能为空' },
          { pattern: /^\d{6}$/, message: '密码格式错误,请输入六位数的密码' }
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
    // 获取表单数据
      const user = this.user
      // 表单验证
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      // 提交表单请求登录
      try {
        const { data } = await login(user)
        // console.log(res)
        // console.log('登录成功', res)
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response.status === 401) {
          console.log('账号密码错误', err)
        } else {
          console.log('登录失败', err)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .page-nav-bar {
    background-color: #21b97a;
    :deep(.van-nav-bar__title) {
      color: #fff;
    }
    :deep(.van-icon) {
      color: #fff;
    }
  }
  .van-button {
    background-color: #1cb676;
  }
}
.van-cell-item {
  text-align: center;
  font-size: 14px;
  color: #666;
}
</style>
