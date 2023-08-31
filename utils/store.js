// store.js
import Vue from 'vue';
import Vuex from 'vuex';
import {
	request
} from '@/utils/request.js'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		shopCarData: null, // 初始化为 null
		isLogin: false
	},
	mutations: {
		setshopCarData(state, data) {
			state.shopCarData = data;
		},
		login(state) {
			state.isLogin = true
		},
		logout(state) {
			state.isLogin = false
		}
	},
	getters: {
		isLogin: state => state.isLogin
	},
	actions: {
		fetchshopCarData({
			commit
		}) {
			// 发起异步请求获取后端数据
			request({
				url: '/food/shop-car',
				method: "GET",
				data: {
					phone: uni.getStorageSync('user')?.phone
				}
			}).then(res => {
				if (res.code === 200) {
					commit('setshopCarData', res.data);
				}
				if (res.code === 500) {
					uni.showToast({
						title: "服务器出错"
					})
				}
			})
		}
	}
});

export default store;