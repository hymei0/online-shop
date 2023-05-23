<template>
  <view class="login-container">
    <image class="logo" src="~@/assets/logo.png"></image>
    <form class="login-form" @submit.prevent="onSubmit">
      <Input v-model="username" type="text" placeholder="请输入用户名"></Input>
      <Input v-model="password" type="password" placeholder="请输入密码"></Input>
      <view class="btn-group">
        <button class="btn btn-primary" type="submit">登录</button>
        <button class="btn btn-default" type="reset">重置</button>
      </view>
    </form>
  </view>
</template>

<script>
export default {
  name: 'LoginPage',

  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    onSubmit() {
      // 处理表单提交逻辑
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #F8D040;
}

.logo {
  width: 150px;
  margin-bottom: 20px;
}

.login-form {
  width: 80%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
}

.btn-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn {
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
}

.btn-primary {
  background-color: #F8D040;
  color: #fff;
}

.btn-default {
  background-color: #fff;
  color: #333;
  border: 1px solid #333;
}
</style>
