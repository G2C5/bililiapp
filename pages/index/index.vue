<template>
	<view class="content">
		<!-- 顶部导航 -->
		<view :style="{height:hiddenNavHight}" class="hearder" :class="showTopNav.isHeaderHidden?'top':''">
			<!-- 预留状态栏高度 -->
			<view :style="{height:systemData.statusBarHeight+'px',backgroundColor:'#FA7298'}"></view>
			<!-- 头部 -->
			<view class="nav">
				<view :class="showTopNav.isHeaderHidden?'topOpacity':''" class="navlist hearder"
					:style="[navlistStyle]">
					<!-- 用户头像 -->
					<image class="user-img" src="../../static/logo.png"></image>
					<!-- 搜索框 -->
					<view class="user-input">
						<view class="icon hh t-icon-sousuo "></view>
						<input type="text" placeholder="猴子居然吃番薯？">
					</view>
					<!-- 热点 -->
					<image class="hot-img" src="../../static/logo.png"></image>
					<!-- 游戏中心 -->
					<view class="icon t-icon-game-1"></view>
					<!-- 用户消息 -->
					<view class="icon t-icon-mailbox-1"></view>
				</view>
			</view>
			<!-- 导航 -->
			<view class="bar">
				<view class="bar-content">
					<scroll-view class="scroll-content"
						:scroll-into-view="'nav' + (swiperIndex > 0 ? swiperIndex - 1 : 0)" scroll-x="true">
						<view class="bar-item" :class="index===swiperIndex?'bar-item-active':''"
							v-for="(navitem,index) in navList" :id="'nav'+index">
							<text @click="swiperIndex =index" class="bar-item-title">{{navitem}}</text>
						</view>
					</scroll-view>
				</view>
				<view class="bar-icon">
					<view class="icon t-icon-liebiao-1"></view>
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="swiper-container">
			<swiper @change="onChangeTap" :current="swiperIndex" :style="[{height:otherHeight}]">
				<swiper-item class="swiper-item" v-for="(item,index) in navData" :id="index">
					<scroll-view @scroll="onScrollViewScroll" scroll-y="true" :style="{height:otherHeight}">
						<!-- 推荐 -->
						
						<template v-if="item.type == 'recommend'">
							<SwiperPage></SwiperPage>
							<VideoListY></VideoListY>
						</template>
						<!-- 热门 -->
						<template v-if="item.type == 'hot'">
							<ImageNav></ImageNav>
							<vedioListX></vedioListX>
						</template>
						<!-- 动画 -->
						<template v-if="item.type == 'animation'">
							<SwiperPage></SwiperPage>
							<ImageNav></ImageNav>
							<VipJoin></VipJoin>
							<ChasingFan></ChasingFan>
							<NavTitle></NavTitle>
							<VideoListY></VideoListY>
							<BigImageCard></BigImageCard>
						</template>
						<!-- 影视 -->
					</scroll-view>

				</swiper-item>
			</swiper>
		</view>
		<!-- 
		<SwiperPage></SwiperPage>
		<VideoList></VideoList> -->
	</view>
</template>

<script>
	import {
		navListData
	} from '../../utils/homedata.js';
	import IndexNav from './indexItem/IndexNav.vue'
	import {
		vShow
	} from "vue"
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				isRefreshing: false, // 是否正在下拉刷新
				// 导航的top值
				showTopNav: {
					// 是否隐藏顶部
					isHeaderHidden: false,
					// 是否固定滑动导航
					isNavFixed: false,
					// 可视区高度
					scrollViewHeight: 0,
					// 上或下滑动判断
					lastScrollTop: 0,
					isScrollingUp: false,
					isScrollingDown: false,
					// 透明度
					isNavOpacity: 1
				},
				// 控制顶部搜索栏显示隐藏
				topNav: true,
				// 当前导航index
				swiperIndex: 1,
				// 系统信息
				systemData: {
					// 可使用窗口高度
					windowHeight: uni.getStorageSync('menuInfo').windowHeight,
					// 屏幕高度
					screenHeight: uni.getStorageSync('menuInfo').screenHeight,
					// 设备系统
					platform: uni.getStorageSync('menuInfo').platform,
					// 安全区底部坐标
					safeAreaBottom: uni.getStorageSync('menuInfo').safeAreaBottom,
					// 状态栏高度
					statusBarHeight: uni.getStorageSync('menuInfo').statusBarHeight,
					// 微信胶囊距离屏幕右侧距离
					menuRight: uni.getStorageSync('menuInfo').menuRight,
					// 导航内容距离屏幕左边距离（微信小程序导航内容距离胶囊右边位置）
					navWidth: uni.getStorageSync('menuInfo').navWidth,
					bottomNavHeight: -1
				},
			}
		},
		components: {
			IndexNav,
		},
		onReady() {
			// 获取home页面节点信息的高度来修改swiper高度
			// 手动计算 
			//platform:              设备系统
			//safeAreaBottom:        安全区底部坐标
			//windowHeight：         可使用窗口高度（ios系统默认不算底部导航，安卓算）
			//screenHeight：         屏幕高度
			//navHeight:             顶部自定义导航区高度
			//topNav:                顶部滑动导航栏高度（和自定义样式保持一致）
			//bottomNavHeight:       底部导航区高度（安全区底部坐标-可视区）
			//contentArea:           内容展示区 = 安全区底部坐标 - 顶部自定义导航区高度 - 顶部滑动导航栏高度 - 底部导航区高度 
			const platform = this.systemData.platform
			const safeAreaBottom = this.systemData.safeAreaBottom
			const navHeight = this.systemData.statusBarHeight + 44
			const windowHeight = this.systemData.windowHeight
			const screenHeight = this.systemData.screenHeight
			const bottomNavHeight = safeAreaBottom - windowHeight
			this.systemData.bottomNavHeight = bottomNavHeight
			const topNav = 44
			let contentArea = safeAreaBottom - navHeight - 44 - 50
			this.showTopNav.scrollViewHeight = contentArea
			// console.log(this.showTopNav.scrollViewHeight)

			// this.$store.dispatch('recommend/reqNavListData')
			// this.$store.dispatch('recommend/reqRecommendData')
		},
		onTabItemTap() {
			// 处理切换页面时的逻辑
			if (this.showTopNav.isHeaderHidden !== false) {
				console.log('11')
				this.showTopNav.isHeaderHidden = false;
			}
		},
		computed: {
			// 设置自定义导航样式（配合微信胶囊左右距离）
			navlistStyle() {
				return {
					// 让导航内容距离屏幕左边距离 = 微信胶囊距离屏幕右边距离
					paddingLeft: this.systemData.menuRight || '10px',
					// 让导航内容距离屏幕左边距离 = 2*微信胶囊距离屏幕右边距离 + 微信胶囊宽
					paddingRight: this.systemData.navWidth || '10px',
				}
			},
			// scroll-view,swiper-view随导航隐藏、显示，动态变化可视高度
			otherHeight() {
				if (this.systemData.isHeaderHidden) {
					return this.showTopNav.scrollViewHeight + 'px'
					// return this.showTopNav.scrollViewHeight + 44 + 'px'
				} else {
					return this.showTopNav.scrollViewHeight + 44 + 'px'
				}
			},
			// 导航隐藏、显示，动态变化顶部占位高度
			hiddenNavHight() {
				if (this.showTopNav.isHeaderHidden) {
					return this.systemData.statusBarHeight + 44 + 'px'
				} else {
					return this.systemData.statusBarHeight + 88 + 'px'
				}
			},
			// ...mapState('recommend', ['navListData.navList', 'navData'])
			navList(){
				return navListData.nav
			},
			navData(){
				return navListData.data
			}
		},
		methods: {
			// 点击导航跳转
			getIndex(value, navLength) {
				this.swiperIndex = value
			},
			// 滑动跳转
			onChangeTap(e) {
				this.getIndex(e.detail.current)
			},
			// scroll-view上下滑动事件
			onScrollViewScroll(event) {
				// 当前滑动的高度
				const currentScrollTop = event.detail.scrollTop;
				if (currentScrollTop > this.showTopNav.lastScrollTop) {
					// 向下滑动，isScrollingUp标记为false，表示不是向上滑动
					this.showTopNav.isScrollingUp = false
					// 向下滑动，isScrollingUp标记为true，表示为向上滑动
					this.showTopNav.isScrollingDown = true
					// 如果向下滑动，isHeaderHidden标记为true，隐藏搜索栏
					if (this.showTopNav.isHeaderHidden !== true) {
						this.showTopNav.isHeaderHidden = true
						console.log('向上滑动', this.showTopNav.isHeaderHidden)
					}

				} else if (currentScrollTop < this.showTopNav.lastScrollTop) {
					// 向上滑动
					this.showTopNav.isScrollingUp = true
					this.showTopNav.isScrollingDown = false
					if (this.showTopNav.isHeaderHidden !== false) {
						this.showTopNav.isHeaderHidden = false
						console.log('向下滑动', this.showTopNav.isHeaderHidden)
					}
				}
				// 更新上次滚动位置
				this.showTopNav.lastScrollTop = currentScrollTop;
			},
			// 下拉刷新事件
			refreshData() {
				if (!this.isRefreshing) {
					this.isRefreshing = true;
					// 在这里执行刷新数据的逻辑
					// 刷新完成后，设置 isRefreshing 为 false
					setTimeout(() => {
						this.isRefreshing = false;
						// 更新数据或其他操作
						// 示例：this.loadData();
					}, 2000); // 模拟2秒后刷新完成
				}
			},
		},
		watch: {

		}
	}
</script>

<style scoped>
	/* 导航区 */
	.nav {
		width: 750rpx;
		z-index: 999;
		height: 88rpx;
		background-color: #FA7298;
	}

	.navlist {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 88rpx;
	}

	.user-img {
		display: inline-block;
		height: 80rpx;
		width: 80rpx;
		border-radius: 50%;
	}

	.user-input {
		display: flex;
		justify-content: space-between;
		/* 侧轴的中间对齐 */
		align-items: center;
		font-size: 0;
		background-color: #fff;
		border-radius: 32rpx;
		padding-left: 10rpx;
	}

	.nav .navlist .user-input input {
		width: 80%;
		padding: 10rpx;
		background-color: #fff;
		border-radius: 32rpx;
		font-size: 24rpx;
	}

	.nav .navlist .hot-img {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50rpx;
	}

	.icon-input {
		padding-left: 20rpx;
		width: 32rpx;
		height: 32rpx;
		fill: currentColor;
		overflow: hidden;
	}

	.hh {
		width: 32rpx;
		height: 32rpx;
	}

	/* 滑动导航区 */
	.bar {
		z-index: 9999;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		height: 80rpx;
		background-color: #FA7298;
	}

	.bar-content {
		padding-left: 50rpx;
		overflow: hidden;
	}

	.scroll-content {
		white-space: nowrap;
		height: 80rpx;
		line-height: 80rpx;
	}

	.bar-item {
		display: inline-block;
		height: 80rpx;
		margin-right: 40rpx;
		color: #efefef;

	}

	.bar-icon {
		z-index: 999;
		padding-right: 40rpx;
		padding-left: 10rpx;
		background-repeat: no-repeat;
		/* 水平居中对齐子元素 */
		box-shadow: -20rpx 0 10rpx rgba(250, 114, 152, 0.6);
		/* 在左侧添加阴影 */
	}

	.bar-item-title {
		display: inline-block;
	}

	.bar-item-active {
		font-size: 36rpx;
		font-weight: bold;
		box-sizing: border-box;
		border-bottom: 4px solid #fff;
	}

	/* 导航栏动画 */
	.top {
		transform: translateY(-88rpx);
	}

	.topOpacity {
		opacity: 0;
	}

	.hearder {
		transition: all 0.5s;
	}

	.swiper-item {
		/* background-color: #0ee; */
	}

	.sticky-nav {
		position: fixed;
		top: 0;
		left: 0;
		/* 根据你的需求设置背景色 */
		z-index: 1;
		/* 确保导航栏在页面上方显示 */
	}
</style>