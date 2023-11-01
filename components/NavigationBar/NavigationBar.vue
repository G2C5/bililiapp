<template>
	<view class="nav">
		<!-- 顶部导航 :style="{'background-color': hhh ? '#FA7298':'#0ee'}"  -->
		<view class="navlist" :style="[navlistStyle]">
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
			<view class="icon t-icon-mailbox-1" @click="hhh=!hhh"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "NavigationBar",
		data() {
			return {
				// 系统信息
				navData: {
				
				},
			};
		},
		props: {
			navTitle: {
				default: '首页',
				type: String
			},
			leftIcon: {
				default: 'icon-game-1',
				type: String
			},
			rightIcon: {
				default: 'icon-game-1',
				type: String
			},
			isHeaderHidden: {
				// default: false,
				type: Boolean
			}
		},
		computed: {
			// 设置自定义导航样式
			navlistStyle() {
				return {
					// 让导航内容距离屏幕左边距离 = 微信胶囊距离屏幕右边距离
					paddingLeft: this.navData.menuRight || '10px',
					// 让导航内容距离屏幕左边距离 = 2*微信胶囊距离屏幕右边距离 + 微信胶囊宽
					paddingRight: this.navData.navWidth || '10px',
				}
			},
			// 顶部自定义导航占位高度：避免遮挡、此高度（+44）需要同.navlist样式一致
			navHeight() {
				return this.navData.statusBarHeight + 44
			},
		},
		methods: {
			// 左侧字体图标点击事件
			goSearch() {
				uni.navigateTo({
					url: '../search/search',
					animationDuration: 200,
					animationType: 'pop-in'
				})
			}
		},
	}
</script>

<style scoped>
	.nav {
		width: 750rpx;
		z-index: 999;
		height: 88rpx;
		background-color: #FA7298;
		/* overflow: hidden; */
	}

	.navlist {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 88rpx;
	}


	.user-img {
		display: inline-block;
		height: 88rpx;
		width: 88rpx;
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

	/* 导航栏动画 */

	.hh-enter-active,
	.hh-leave-active {
		transition: 0.5s linear;
	}

	/* 进入起点，离开终点 */
	.hh-enter,
	.hh-leave-to {
		transform: translateY(-100%);
	}

	/* 进入终点，离开起点 */
	.hh-enter-to,
	.hh-leave {
		transform: translateY(0);
	}
</style>