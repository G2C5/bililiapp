<template>
	<view>
		<scroll-view class="scroll-content" scroll-x="true">
			<view class="nav-item">
				<view class="nav-content">
					<text class="updata">直播中</text>
					<image class="nav-img" src="../../static/logo.png" mode=""></image>
					<text class="nav-title">排行榜</text>
				</view>
			</view>
			<view class="nav-item">
				<view class="nav-content">
					<image class="nav-img" src="../../static/logo.png" mode=""></image>
					<text class="nav-title">热点日报</text>
				</view>
			</view>
			<view class="nav-item">
				<view class="nav-content">
					<image class="nav-img" src="../../static/logo.png" mode=""></image>
					<text class="nav-title">每周必看</text>
				</view>
			</view>
			<view class="nav-item">
				<view class="nav-content">
					<image class="nav-img" src="../../static/logo.png" mode=""></image>
					<text class="nav-title">黑马榜</text>
				</view>
			</view>
			<view class="nav-item">
				<view class="nav-content">
					<image class="nav-img" src="../../static/logo.png" mode=""></image>
					<text class="nav-title">音乐榜</text>
				</view>
			</view>
			<view class="nav-item">
				<view class="nav-content">
					<image class="nav-img" src="../../static/logo.png" mode=""></image>
					<text class="nav-title">音乐榜</text>
				</view>
			</view>
			<view class="nav-item">
				<view class="nav-content">
					<image class="nav-img" src="../../static/logo.png" mode=""></image>
					<text class="nav-title">音乐榜</text>
				</view>
			</view>
			<view class="nav-item">
				<view class="nav-content">
					<image class="nav-img" src="../../static/logo.png" mode=""></image>
					<text class="nav-title">音乐榜</text>
				</view>
			</view>


		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "ImageNav",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.scroll-content {
		
		white-space: nowrap;
		height: 180rpx;
		width: 100%;
	}

	.nav-item {
		margin-left: 40rpx;
		display: inline-block;
	}

	.nav-content {
		width: 88rpx;
		height: 180rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-right: 60rpx;
	}

	.nav-img {
		height: 88rpx;
		width: 88rpx;
		border-radius: 50%;
	}

	.nav-title {
		margin-top: 16rpx;
		color: #261515;
		font-size: 26rpx;
	}
	.updata{
		z-index: 999;
		position: absolute;
		top: 10rpx;
		left: 50rpx;
		font-size: 24rpx;
		color: #fff;
		background-color: #ff007f;
		padding: 2rpx 12rpx;
		border: 4rpx solid #fff;
		border-radius: 24rpx;
		word-spacing: 4rpx;
	}
</style>