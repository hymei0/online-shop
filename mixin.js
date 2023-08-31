export default {
  onLoad() {
    if (!uni.getStorageSync('token')) {
      uni.redirectTo({
        url: '/pages/login/login'
      })
    }
  }
}
