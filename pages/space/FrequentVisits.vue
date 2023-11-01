<template>
	<view>
		<scroll-view class="scroll-content" scroll-x="true">
			<view class="nav-item">
				<view class="nav-content">
					<text class="living">直播中</text>
					<image class="nav-img" src="../../static/logo.png" mode=""></image>
					<text class="nav-title">排行榜</text>
				</view>
			</view>
			<view class="nav-item">
				<view class="nav-content">
					<text class="living">直播中</text>
					<image class="nav-img" src="../../static/logo.png" mode=""></image>
					<text class="nav-title">热点日报</text>
				</view>
			</view>
			<view class="nav-item">
				<view class="divider"></view>
			</view>
			<view class="nav-item">
				<view class="nav-content">
					<view class="updata"></view>
					<image class="nav-img" src="../../static/logo.png" mode=""></image>
					<text class="nav-title">每周必看</text>
				</view>
			</view>
			<view class="nav-item">
				<view class="nav-content">
					<view class="updata"></view>
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
		name: "FrequentVisits",
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
		background-color: #fff;
	}

	.nav-item {
		position: relative;
		
		display: inline-block;
	}

	.nav-content {
		width: 88rpx;
		height: 180rpx;
		margin-left: 40rpx;
		margin-right: 60rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
	}

	.nav-img {
		height: 112rpx;
		width: 112rpx;
		border-radius: 50%;
	}

	.nav-title {
		margin-top: 16rpx;
		color: #261515;
		font-size: 26rpx;
	}
	.divider{
		width: 2rpx;
		height: 100rpx;
		background-color: #888;
		margin: 0 5rpx;
	}
	.living{
		position: absolute;
		top: 86rpx;
		left: 35rpx;
		font-size: 24rpx;
		color: #fff;
		background-color: #ff007f;
		padding: 2rpx 14rpx;
		border: 2rpx solid #fff;
		border-radius: 22rpx;
		word-spacing: 4rpx;
		z-index: 999;
	}
	
	.updata{
		position: absolute;
		top: 100rpx;
		left: 110rpx;
		width: 20rpx;
		height: 20rpx;
		background-color: #ff007f;
		border: 4rpx solid #fff;
		border-radius: 20rpx;
		z-index: 999;
	}
</style>