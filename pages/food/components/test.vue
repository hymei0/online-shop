<template>
  <view class="menu-container">
    <view class="sidebar">
      <view
        v-for="(category, index) in categories"
        :key="index"
        class="category-item"
        :class="{ active: selectedCategory === category }"
        @click="selectCategory(category)"
      >
        {{ category }}
      </view>
    </view>
    <view class="menu-list">
      <view
        v-for="(dish, index) in filteredDishes"
        :key="index"
        class="dish-item"
      >
        <image class="dish-image" :src="dish.image" />
        <text class="dish-name">{{ dish.name }}</text>
        <text class="dish-price">{{ dish.price }}</text>
      </view>
      <view v-if="filteredDishes.length === 0" class="no-dishes">
        暂无可展示的菜品
      </view>
    </view>
  </view>
</template>

<script>
export default {
	name:'FoodList',
  data() {
    return {
      selectedCategory: "", // 当前选中的菜品类别
      categories: ["热菜", "凉菜", "主食"], // 菜品类别列表
      dishes: [
        // 菜品数据
        {
          name: "宫保鸡丁",
          image: "/static/images/gongbaoji.png",
          price: "28元",
          category: "热菜"
        },
        {
          name: "凉拌黄瓜",
          image: "/static/images/liangbanhuanggua.png",
          price: "12元",
          category: "凉菜"
        },
        {
          name: "米饭",
          image: "/static/images/mifan.png",
          price: "5元",
          category: "主食"
        }
      ]
    };
  },
  computed: {
    filteredDishes() {
      // 根据选中的菜品类别过滤菜品数据
      if (this.selectedCategory) {
        return this.dishes.filter(dish => dish.category === this.selectedCategory);
      } else {
        return this.dishes;
      }
    }
  },
  methods: {
    selectCategory(category) {
      // 选中菜品类别
      this.selectedCategory = category;
    }
  }
};
</script>

<style>
.menu-container {
  display: flex;
}

.sidebar {
  width: 25%;
  background-color: #f2f2f2;
}

.category-item {
  padding: 10px;
  cursor: pointer;
}

.category-item.active {
  background-color: #ccc;
}

.menu-list {
  flex: 1;
  padding: 20px;
}

.dish-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.dish-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 10px;
}

.dish-name {
  font-size: 16px;
  font-weight: bold;
}

.dish-price {
  margin-left: auto;
  font-size: 14px;
  color: #999;
}

.no-dishes {
  text-align: center;
  color: #999;
  margin-top: 20px;
}
</style>
