<template>
	<view>
		<uni-card  title="公告" extra="2023.06.14" :thumbnail="image">
			<template v-slot:title>
				<image :src="image" class="announ_image" />
				<view class="my-card">
					<image src="/static/announcement/line.png" class="lineleft_image" />
					<view class="title1">公告</view>
					<image src="/static/announcement/line.png" class="lineright_image" />
				</view>
				
			</template>
			<text slot="content">这里是内容</text>
			<text slot="footer">这里是底部</text>
			<text>这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>

		</uni-card>
	</view>
</template>

<script>
	export default {
		name: 'Announcement',
		data() {
			return {
				image: "/static/announcement/announcement.png"
			};
		},
		methods: {}
	};
</script>

<style>
	.my-card {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.announ_image {
		float: left;
		width: 70rpx;
		height: 70rpx;
		margin-left: 0rpx;
		margin-top: 50rpx;
	}

	.lineleft_image {
		width: 150rpx;
		height: 80rpx;
		margin-left: 0rpx;
	}

	.title1 {
		font-size: 16px;
		color: #e5b267;
		text-align: center;
		margin-left: 5rpx;
		width: 100rpx;
		height: 80rpx;
	}

	.lineright_image {
		/* float: right; */
		width: 150rpx;
		height: 80rpx;
		margin-left: 5rpx;
	}
</style>