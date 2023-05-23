<template>
	<view>

		<!-- 200rpx=100px -->
		<view class="form">
			<view class="title">登 录</view>
			<uni-forms ref="form" :model="form" :rules="rules">

				<uni-forms-item name="userphone">
					<uni-easyinput prefixIcon="person" v-model="form.userphone" focus
						placeholder="请输入手机号"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="password">
					<uni-easyinput prefixIcon="locked" type="password" v-model="form.password" focus
						placeholder="请输入密码"></uni-easyinput>
				</uni-forms-item>
			</uni-forms>

			<view style="margin:40rpx 0">
				<button type="primary" @click="login">登 录</button>
			</view>
			<navigator url="/pages/index/index" style="margin:40rpx 0; color:deepskyblue">首页</navigator>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {},
				rules: {
					// 对userphone字段进行必填验证
					userphone: {
						rules: [{
							required: true,
							errorMessage: '请输入电话',
						}],
						// 当前表单域的字段中文名，可不填写
						// label: '姓名',
						validateTrigger: 'submit'
					},
					// 对password字段进行必填验证
					password: {
						rules: [{
							required: true,
							errorMessage: '请输入密码',
						}],
						validateTrigger: 'submit'
					},
				}

			}
		},


		methods: {
			login() {
				this.$refs.form.validate().then(res => {
					this.request({url:'/user/login',method:"POST",data:this.form}).then(res=>{
						if(res.code === '200'){
							uni.showToast({
								title: "登录成功"
							})
							//存储用户的数据到 storage
							uni.setStorage('user', data.data)
							//1.跳转页面
							uni.navigateTo({
								url: '/pages/index/index'
							})
						}
						
					})
					// const baseUrl = "http://localhost:9090/"
					// uni.request({
					// 	url: baseUrl + 'user/login',
					// 	method: "POST",
					// 	data: this.form,
					// 	success: (res) => {
					// 		console.log('login success:', res.code);
					// 		// 在这里处理登录成功后的逻辑
					// 		// ...
					// 		const data = res.data;
					// 		if (data.code !== 200) {
					// 			uni.showToast({
					// 				icon: "none",
					// 				title: data.msg
					// 			})
					// 		} else {
					// 			uni.showToast({
					// 				title: "登录成功"
					// 			})
					// 			//存储用户的数据到 storage
					// 			uni.setStorage('user', data.data)
					// 			//1.跳转页面
					// 			uni.navigateTo({
					// 				url: '/pages/index/index'
					// 			})
					// 			// //2.跳转tarbar页面
					// 			// uni.switchTab({
					// 			// 	url:'/pages/index/index'
					// 			// })
					// 		}
					// 	},
					// 	fail: (err) => {
					// 		console.log('login failed:', err);
					// 	}
					// });

				}).catch(err => {
					console.log('表单错误信息：', err);
				});
			}

		},
	}
</script>

<style>
	.form {
		width: 80%;
		margin: 200rpx auto;
	}

	.title {
		margin-top: 200rpx;
		margin-bottom: 50rpx;
		font-size: 50rpx;
		color: royalblue;
		text-align: center;
	}
</style>