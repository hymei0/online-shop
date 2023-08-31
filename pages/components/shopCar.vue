<template>
	<view class="container">
		<view class="shop-cart-view">
			<uni-popup v-model="popupVisible" class="custom-popup">34242</uni-popup>
			<view class="shop-cart-card">
				<image @click="open" src="../../static/food/购物车.png" class="shop-cart-image"></image>
				<uni-badge @click="open" class="uni-badge-left-margin" :text="dishShopSum" absolute="rightTop"
					:offset="[-3, -3]" size="small" position="right top"></uni-badge>
				<text class="shop-cart-sum-price">合计￥</text>
				<text class="shop-cart-price">12228.88</text>
				<button class="shop-cart-computbtu">下单预定</button>
			</view>
			<uni-popup ref="popup" background-color="#fff" class="custom-popup">
				<text>
					底部弹出 Popup
				</text>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'ShopCar',
		props: ['dishShopSum'],
		data() {
			return {
				// dishShopSum:1,

			};
		},
		methods: {
			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open("bottom")
				// this.popupVisible=true;
			},
		},
	};
</script>

<style>
	.shop-cart-view {
		background-color: white;
		position: absolute;
		bottom: 0;
		width: 100%;
		/* border-top: 3rpx solid; */
		/* border-top-color: aliceblue; */
	}

	.shop-cart-card {
		display: flex;
		padding-top: 10rpx;
		width: 100%;
	}

	.shop-cart-image {
		width: 80rpx;
		height: 80rpx;
		padding-left: 10rpx;
		padding-bottom: 10rpx;
	}

	.shop-cart-sum-price {
		margin-left: 200rpx;
		padding-top: 20rpx;
		font-size: 30rpx;
	}

	.shop-cart-price {
		margin-left: 5rpx;
		padding-top: 20rpx;
		font-size: 35rpx;
		color: #FA8072;
		font-weight: bold;
	}

	.shop-cart-computbtu {
		width: 26%;
		height: 40%;
		font-size: 30rpx;
		/* color: #f9b653; */
		background-color: #FFDEAD;
		font-weight: bold;
	}

	.uni-badge-left-margin {
		margin-left: 10rpx;
	}

	.custom-popup {
		/* 自定义样式 */

		bottom: 50rpx;
		/* 设置弹出位置距离顶部的距离 */
		right: 20rpx;
		/* 设置弹出位置距离右边的距离 */
	}
</style>