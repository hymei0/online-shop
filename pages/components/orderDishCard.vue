<template>
	<view class="container">
		 <view class="order-dish">
		    
			  <text>这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
		
		  </view>
		  <view class="score-card">
			  <text>这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
		  </view>
	</view>
</template>

<script>
	export default {
		name: 'OrderDishCard',
		data() {
			return { 
				image: "/static/announcement/announcement.png"
			};
		},
		methods: {}
	};
</script>

<style>
	.container{
		display: flex;
		justify-content: center;                                            
		align-items: center;
	}
	.score-card {
		width: 300rpx;
		height: 250rpx;
		margin-left: 80rpx;
	    background-color: #ffebd9;
		color: #e5b267;
	    border-radius: 10px;
	    box-shadow: 0 2px 6px 0 rgba(229, 178, 103, 0.2);
	  }
	.order-dish {
		width: 300rpx;
		height: 250rpx;
		margin-left: 0rpx;
		color: #e5b267;
		background-color: #ffefd3;
		border-radius: 10px;
		box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.16);
	}
</style>