<template>
	<view>
		<view class="header">
			<!-- 预留状态栏高度 -->
			<view :style="{height:systemData.statusBarHeight+'px',backgroundColor:'#FA7298'}" ></view>
			<view class="header-title">
				<text>关注</text>
				<view class="header-icon">
					<IconfontView iconheight="50rpx" iconwidth="50rpx" icon="t-icon-more-2"></IconfontView>
				</view>
			</view>
			<view class="space-model">
				<button class="space-buton">全部</button>
				<button class="space-buton">视频</button>
			</view>
		</view>
		<view style="height:200rpx">
		</view>
		<view class="content">
			<scroll-view class="space-scroll" scroll-y="true">

				<view class="frequent-visits-nav">
					<view class="frequent-visits-content">
						<text>最常访问</text>
						<view class="frequent-visits-right">
							<text>更多</text>
							<IconfontView iconheight="32rpx" iconwidth="32rpx" icon="t-icon-more-2"></IconfontView>
						</view>
					</view>
					<FrequentVisits></FrequentVisits>
				</view>
				<SpaceList></SpaceList>

			</scroll-view>
		</view>
	</view>
</template>

<script>
	import FrequentVisits from './FrequentVisits'
	import SpaceList from './SpaceList.vue'
	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				systemData: {
					// 状态栏高度
					statusBarHeight: uni.getStorageSync('menuInfo').statusBarHeight,
				}
			}
		},
		components: {
			FrequentVisits,
			SpaceList
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		
		.header-title {
			position: relative;
			top: 0;
			left: 0;
			width: 750rpx;
			height: 120rpx;
			text-align: center;
			line-height: 120rpx;
			background-color: #FA7298;

			text {
				font-weight: bold;
				color: #ffffff;
				padding-bottom: 8rpx;
				border-bottom: 8rpx solid #ffffff;
			}

			.header-icon {
				position: absolute;
				top: 46rpx;
				right: 40rpx;
				background-color: #ffffff;
			}
		}
		
		.space-model {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 40rpx;
			box-sizing: border-box;
			background-color: #fff;
			.space-buton {
				overflow: hidden;
				width: 330rpx;
				height: 50rpx;
				font-size: 24rpx;
				line-height: 50rpx;
				text-align: center;
				background-color: #f6f6f6;
			}
		}
		
	}

	.content {
		height: 100%;
		width: 100%;
		background-color: #ffffff;
		padding-bottom: 100rpx;

		.space-scroll {


			

		}

		.frequent-visits-nav {

			.frequent-visits-content {
				display: flex;
				justify-content: space-between;
				margin: 0 40rpx;
				padding: 20rpx 0;
				font-size: 28rpx;
				font-weight: 700;

				.frequent-visits-right {
					display: flex;
					justify-content: space-between;
					align-items: center;
					color: #888888;
					font-weight: 400;
				}
			}
		}
	}
</style>