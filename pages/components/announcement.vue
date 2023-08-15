<template>
	<view>
		<uni-card>
			<template v-slot:title>
				<image :src="image" class="announ_image" />
				<view class="my-card">
					<image src="/static/announcement/line.png" class="lineleft_image" />
					<view class="title1">公告</view>
					<image src="/static/announcement/line.png" class="lineright_image" />
				</view>

			</template>
			<view style="justify-content: center;align-items: center;margin-left: 50rpx;">
				<div style="color: #e5b267;" v-html="formattedString"></div>
			</view>
		</uni-card>
	</view>
</template>

<script>
	import {
		request
	} from '@/utils/request.js'
	export default {
		name: 'Announcement',
		data() {
			return {
				image: "/static/announcement/announcement.png",
				announcement: {},
				annoceContent: ""
			};
		},

		methods: {
			getAnnouncementInfo() {
				request({
					url: '/announcement/get-recent-announcement',
					method: "GET"
				}).then(res => {
					if (res.code === 200) {
						this.announcement = res.data;
						// 将后端返回的字符串拆分成数组  
						// this.annoceContent = this.announcement.content.split(";").join('.<br>')
					}
					if (res.code === 500) {
						uni.showToast({
							title: "服务器出错"
						})
					}
				})

			},

		},
		mounted() {
			this.getAnnouncementInfo()
		},

		computed: {
			formattedString() {
				// 将后端返回的字符串按照 ';' 进行拆分，并使用双大括号进行插值和连接
				return this.announcement.content.split(';').map(item => `<span>${item}</span><br>`).join('')
			}

		}

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