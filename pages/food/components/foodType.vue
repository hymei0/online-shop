<template>
	<view class="menu-container">
		<scroll-view class="sidebar" scroll-y="true">
			<view v-for="(category, index) in categories" :key="index" class="category-item"
				:class="{ active: selectedCategoryId === category.id }" @click="selectCategory(category.id)">

				<image :src="category.icon" class="category-image" />
				<text>{{ category.name }}</text>
			</view>
		</scroll-view>

		<view class="menu-list">
			<view v-for="(dish, index) in filteredDishes" :key="index" class="dish-item" @onclick="addToShaopCar(dishId)">
				<image :src="dish.picture1" class="dish-image" />
				<view class="content">
					<text class="dish-name">{{ dish.pname }}</text>
					<text class="description" v-if="dish.description!=null">{{dish.description}}</text>
					<view style="margin-top: 20rpx;display: flex;">
						<text style="font: 20rpx; text-align: left;">￥{{dish.price}}</text>
						<text v-if="dish.hasSnack===true" class="add-shop-car-button"  >+</text>
						<view v-if="dish.hasSnack===false">
							<button class="plus-btn" @click="addToCart">加入购物车</button>
							      <text class="quantity">{{ quantity }}</text>
						</view>
						 
					</view>
					
				</view>
				
			</view>
			<view v-if="filteredDishes.length === 0" class="no-dishes">
				暂无可展示的数据
			</view>
		</view>
	</view>
</template>

<script>
	import {
		request
	} from '@/utils/request.js'
	export default {
		name: 'FoodType',
		data() {
			return {
				quantity:0,
				dishId: "",
				disIds: [],
				selectedCategoryId: "", // 当前选中的菜品类别
				categories: ["热菜", "凉菜", "主食"], // 菜品类别列表
				dishes: [
					// 菜品数据
					{
						name: "宫保鸡丁",
						image: "https://i.postimg.cc/JnGyZL7N/image.png",
						price: "28元",
						category: "热菜"
					},
					{
						name: "凉拌黄瓜",
						image: "https://i.postimg.cc/JnGyZL7N/image.png",
						price: "12元",
						category: "凉菜"
					},
					{
						name: "米饭",
						image: "https://i.postimg.cc/JnGyZL7N/image.png",
						price: "5元",
						category: "主食"
					}
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
			}
		},
		methods: {
			selectCategory(categoryId) {
				// 选中菜品类别
				this.selectedCategoryId = categoryId;
			},
			addToShaopCar(dishId) {
				rhis.dishId = dishId;
				this.dishIds.add(dishId);
				console.log(this.dishIds);
			},
			getCategory() {
				request({
					url: '/food/food-category/tree',
					method: "GET"
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
		display:grid;
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

	.add-shop-car-button {	  
		    width: 30rpx;
		    height: 30rpx;
		    border-radius: 50%;
		    background-color: #FFDEAD;
		    color: white;
		    font-size: 20rpx;
		    justify-content: right;
		    align-items: center;
			text-align: center;
			margin-left: 200rpx;
	}

/* 	.dish-add-shop-car.active {
		color: #FFDEAD;
	}
 */
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
	.price{
		
	}
	
	.plus-btn {
	  width: 30rpx;
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