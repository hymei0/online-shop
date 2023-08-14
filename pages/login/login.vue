<template>
	<view>

		
		<view class="form">
			<view class="title">登 录</view>
			<uni-forms ref="form" :modelValue="loginForm" :rules="rules">

				<uni-forms-item name="phone">
					<uni-easyinput prefixIcon="person" v-model="loginForm.phone" focus
						placeholder="请输入手机号"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="password">
					<uni-easyinput prefixIcon="locked" type="password" v-model="loginForm.password" focus
						placeholder="请输入密码"></uni-easyinput>
				</uni-forms-item>
			</uni-forms>

			<view style="margin:40rpx 0">
				<button type="primary" @click="login">登 录</button>
			</view>
			<navigator url="pages/homepage/index" style="margin:40rpx 0; color:deepskyblue">首页</navigator>

		</view>
	</view>
</template>
			 

 <script>
import { request } from '@/utils/request.js'
	export default {
		data() {
			return {
				loginForm: {},
				rules: {
					// 对phone字段进行必填验证
					phone: {
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
					request({url:'/user/login',method:"POST",data:this.loginForm}).then(res=>{
						if(res.code === 200){
							uni.showToast({
								title: res.msg
							})
							//存储用户的数据到 storage
							uni.setStorage(
							{
								key: 'user',
								data: res.data,
								success: function () {
									console.log('success');
								}
							})
							
							//1.跳转页面
							uni.switchTab({
								url: '/pages/homepage/index'
							})
						}
						if(res.code === 2001){
							uni.showToast({
								title: res.msg
							})
						}
						
					})
					
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