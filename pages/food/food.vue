<template>
	<view>
		<FoodType/>
	</view>
</template>

<script>
	import FoodType from './components/foodType.vue'
	import store from '@/utils/store.js'
	store.dispatch('fetchshopCarData') // 发起异步请求获取后端数据
	
	export default {
		name: 'Food',
		components: {
		  FoodType
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
