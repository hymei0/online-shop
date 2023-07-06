<template>
	<view class="container">
		<view class="order-dish" @click="onOrderDish">
			<view class="content" >
				<text>点餐</text>
				<text class="clamp-text">在线点餐免排队</text>
				<image class="order_image" src="/static/home/order.png"  /> 
			</view>
		</view>
		<view class="score-card">
			<view class="content">
				<text>积分兑换</text>
				<text class="clamp-text">1积分=1￥<br /></text>
				<text class="clamp-text">免费兑换手抓饼</text>
				<image class="integral_image" src="/static/home/兑换.png"  /> 
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'OrderDishCard',
		data() {
			return {
				
			};
		},
		methods: {
			onOrderDish(){
				//跳转到点餐页面
				uni.switchTab({
					url: '/pages/food/food'
				})
			}
		}
	};
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.score-card {
		width: 300rpx;
		height: 250rpx;
		margin-left: 80rpx;
		/* background-color: #ffebd9; */
		color: #f9b653;
		border-radius: 10px;
		border-color: #e5b267;
		font-size: 30rpx;
		box-shadow: 0 2px 6px 0 rgba(229, 178, 103, 0.2);
	}

	.order-dish {
		width: 300rpx;
		height: 250rpx;
		margin-left: 0rpx;
		color: #f9b653;
		/* background-color: #ffefd3; */
		border-radius: 10px;
		border-color: #e5b267;
		font-size: 30rpx;
		box-shadow: 0 6rpx 24rpx 0 rgba(229, 178, 103, 0.2);
	}

	.content {
		margin-left: 30rpx;
		margin-top: 20rpx;
	}

	.clamp-text {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 25rpx;
		margin-top: 10rpx;
	}
	.order_image {
		width: 80rpx;
		height: 70rpx;
		padding-left: 150rpx;
		padding-top: 60rpx;
	}
	.integral_image {
		display: flex;
		width: 70rpx;
		height: 70rpx;
		margin-left: 170rpx;
		/* margin-top: 50rpx; */
		padding-top: 30rpx;
		
	}
</style>