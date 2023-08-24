<template>
	<view>
		<view class="menu-container">
			<scroll-view class="sidebar" scroll-y="true">
				<view v-for="(category, index) in categories" :key="index" class="category-item"
					:class="{ active: selectedCategoryId === category.id }" @click="selectCategory(category.id)">

					<image :src="category.icon" class="category-image" />
					<text>{{ category.name }}</text>
				</view>
			</scroll-view>

			<view class="menu-list">
				<view v-for="(dish, index) in filteredDishes" :key="index" class="dish-item"
					@onclick="addToShaopCar(dishId)">
					<image :src="dish.picture1" class="dish-image" />
					<view class="content">
						<text class="dish-name">{{ dish.pname }}</text>
						<text class="description" v-if="dish.description!=null">{{dish.description}}</text>
						<view style="margin-top: 20rpx;display: flex;">
							<text style="font: 20rpx; text-align: left;">￥{{dish.price}}</text>
							<view v-if="dish.hasSnack===false">
								<text class="reduce">-</text>
								<text class="quantity">{{ dish.num }}</text>
								<text class="add">+</text>
							</view>
							<view v-if="dish.hasSnack===true">
								<text class="plus-btn" @click="getSnack(dish.id)">选规格</text>
							</view>
						</view>
					</view>
				</view>
				<view v-if="filteredDishes.length === 0" class="no-dishes">
					暂无可展示的数据
				</view>
			</view>
		</view>
		<!--  -->
		<view v-if="shopcarData.length != 0">
			<ShopCar :dishShopSum="dishShopSum"></ShopCar>
		</view>

	</view>
</template>

<script>
	import {
		request
	} from '@/utils/request.js'
	import ShopCar from '../../components/shopCar.vue'
	export default {
		name: 'FoodType',
		components: {
			ShopCar
		},
		data() {
			return {
				shopcarData: [],
				dishShopSum:0,
				dishId: "",
				disIds: [],
				selectedCategoryId: "", // 当前选中的菜品类别
				categories: [], // 菜品类别列表
				dishes: [
					// 菜品数据
				]
			};
		},
		computed: {

			filteredDishes() {
				// 根据选中的菜品类别过滤菜品数据
				if (this.selectedCategoryId) {
					return this.dishes.filter(dish => dish.categoryId === this.selectedCategoryId);
				} else {
					return this.dishes;
				}
			},
			quantity() {
				return this.$store.state.shopCarData.list[0].num;
			}
		},
		methods: {

			selectCategory(categoryId) {
				// 选中菜品类别
				this.selectedCategoryId = categoryId;
			},
			addToShopCar(dishId) {
				rhis.dishId = dishId;
				this.dishIds.add(dishId);
				console.log(this.dishIds);
			},
			getSnack(dishId) {

			},
			getCategory() {
				request({
					url: '/food/food-category/tree',
					method: "GET",
				}).then(res => {
					if (res.code === 200) {
						this.categories = res.data.list;
					}
					if (res.code === 500) {
						uni.showToast({
							title: "服务器出错"
						})
					}
				})

			},
			getDishes() {
				request({
					url: '/food/food-list',
					method: "GET"
				}).then(res => {
					if (res.code === 200) {
						this.dishes = res.data.list;
						//匹配购物车里面各菜品的数量
						this.dishes.forEach((e, index) => {
							this.shopcarData.forEach((es, indexs) => {
								if (e.id === es.productId) {
									e.num = es.num;
									this.dishShopSum=this.dishShopSum+es.num
								} else {
									e.num = 0;
								}
							})
						})
					}
					if (res.code === 500) {
						uni.showToast({
							title: "服务器出错"
						})
					}
				})
			}
		},
		mounted() {
			this.shopcarData = this.$store.state.shopCarData.list
			this.getCategory()
			this.getDishes()
		},
	};
</script>

<style>
	.menu-container {
		display: flex;
		color: #f9b653;
		font-size: 30rpx;
	}

	.sidebar {
		width: 25%;
		background-color: #f2f2f2;
		border-color: #f9b653;
	}

	.category-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20rpx;
		cursor: pointer;
	}

	.category-item.active {
		background-color: #ffffff;
	}

	.menu-list {
		flex: 1;
		padding: 40rpx;
	}

	.dish-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.content {
		display: grid;
		margin-left: 0rpx;
		/* 根据实际需要设置标题和描述文字与图片的间距 */
	}

	.category-image {
		width: 50rpx;
		height: 50rpx;
		/* border-radius: 50%; */
	}

	.dish-image {
		width: 150rpx;
		height: 150rpx;
		/* border-radius: 50%; */
		margin-right: 10px;
	}

	.dish-name {
		font-size: 30rpx;
		font-weight: bold;
	}

	.add {
		width: 100rpx;
		height: 30rpx;
		/* 		border-radius: 50%;
		color: #FFDEAD; */
		font-size: 30rpx;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-left: 10rpx;
	}

	.reduce {
		margin-left: 200rpx;
	}

	.quantity {
		/* color: #000; */
		font-weight: bold;
		margin-left: 10rpx;
		font-size: 25rpx;
	}

	.no-dishes {
		text-align: center;
		color: #999;
		margin-top: 40rpx;
	}

	.description {
		margin-top: 8rpx;
		font-size: 20rpx;
		color: #999;
	}

	.price {}

	.plus-btn {
		width: 80rpx;
		height: 30rpx;
		background-color: #FFDEAD;
		color: white;
		font-size: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 200rpx;
	}

	
</style>