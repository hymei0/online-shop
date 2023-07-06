<template>
	<view>
		<Carousel />
		<tabbar :list="tabList"></tabbar>
		<Announcement />
		<OrderDishCard />

	</view>

</template>

<script>
	import Carousel from '../components/carousel.vue'
	import ShopCart from '../components/shopCar.vue'
	import Announcement from '../components/announcement.vue'
	import OrderDishCard from '../components/orderDishCard.vue'

	export default {
		name: 'HomePage',
		components: {
			Carousel,
			ShopCart,
			Announcement,
			OrderDishCard
		},
		data() {
			return {
				// tabList: [{
				// 		index: 0,
				// 		pagePath: '/pages/homepage/index',
				// 		iconPath: '/static/tabbar/home.png',
				// 		selectedIconPath: '/static/tabbar/home(1).png',
				// 		text: '首页'
				// 	},
				// 	{
				// 		index: 1,
				// 		pagePath: '/pages/food/food',
				// 		iconPath: '/static/tabbar/food.png',
				// 		selectedIconPath: '/static/tabbar/food(1).png',
				// 		text: '点餐'
				// 	},
				// 	{
				// 		index: 2,
				// 		pagePath: '/pages/order/order',
				// 		iconPath: '/static/tabbar/order.png',
				// 		selectedIconPath: '/static/tabbar/order(1).png',
				// 		text: '订单'
				// 	},
				// 	{
				// 		index: 3,
				// 		pagePath: '/pages/my/my',
				// 		iconPath: '/static/tabbar/my.png',
				// 		selectedIconPath: '/static/tabbar/my(1).png',
				// 		text: '我的'
				// 	}
				// ]
			}
		},
		onLoad() {},
		methods: {
			onTabClick(event) {
				const {
					index
				} = event.currentTarget.dataset
				console.log(event)
				this.selectedIndex = index
			}

		},
	}
</script>


<style lang="scss">

</style>