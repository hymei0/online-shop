<template>
  <view class="container">
    <view class="nav-bar">
      <text class="back-btn" @click="navigateBack">返回</text>
      <text class="title">公告栏</text>
    </view>

    <view class="bulletin-container">
      <scroll-view class="bulletin-scroll" scroll-y>
        <view v-for="(bulletin, index) in bulletins" :key="index" class="card-container">
          <u-card>
            <u-list>
              <u-cell :title="bulletin.title" :value="bulletin.time"></u-cell>
            </u-list>
            <div class="card-content">
              <p>{{ bulletin.content }}</p>
            </div>
            <div class="card-footer">
              <text class="more-btn" @click="goToDetail(index)">查看详情</text>
            </div>
          </u-card>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
	name: 'Announcement',
  data() {
    return {
      bulletins: [
        {
          title: "公告一",
          time: "2023-06-12",
          content: "这是第一条公告的内容。"
        },
        {
          title: "公告二",
          time: "2023-06-11",
          content: "这是第二条公告的内容。"
        },
        {
          title: "公告三",
          time: "2023-06-10",
          content: "这是第三条公告的内容。"
        }
      ]
    };
  },
  methods: {
    navigateBack() {
      uni.navigateBack({
        delta: 1
      });
    },
    goToDetail(index) {
      // 跳转到公告详情页
    }
  }
};
</script>

<style>
.container {
  height: 100%;
  background-color: #F5F5F5;
}

.nav-bar {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.back-btn {
  font-size: 16px;
  color: #333;
}

.title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.bulletin-container {
  margin: 20px;
}

.card-container {
  margin-bottom: 20px;
}

.card-content {
  padding: 10px;
  font-size: 14px;
  color: #666;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}

.more-btn {
  font-size: 14px;
  color: #007AFF;
}
</style>









<!-- <template>
	<view>
		<uni-card >
			<text>这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
		</uni-card>

	</view>
</template>

<script>
	export default {
		name: 'Announcement',
		components: {},
		data() {
			return {
			}
		},
		onLoad() {},
		methods: {
		},
	}
</script>

<style>
</style> -->