const BASE_URL = 'https://hym.mhyt.fun'

export const request = ((options) => { //options是json对象
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			header: {
				token: uni.getStorageSync('user') ? uni.getStorageSync('user').username : ''
			},
			data: options.data || {},
			success: (res) => {
				const data = res.data;
				if (data.code === 401) { //401无权限
					uni.navigateTo({
						url: '/pages/login/login'
					})
					return
				}else if (data.code !== 200) {
					uni.showToast({
						icon: 'error',
						title: '操作错误'
					})
				}
				resolve(data)
			},
			fail: (error) => {
				uni.showToast({
					icon: "error",
					title: "系统错误"
				})
				reject(error)
			}
		})

	})

})