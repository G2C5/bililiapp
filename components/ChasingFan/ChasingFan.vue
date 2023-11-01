<template>
	<view class="fan-box">
		<!-- 追番 -->
		<view class="fan-header">
			<view class="fan-header-left">
				<view class="t-icon t-icon-fenlei-2"></view>
				<text class="fan-left-word">正在追</text>
			</view>
			<view class="fan-header-right">
				<text class="fan-right-word">我的追番</text>
				<view class="t-icon t-icon-fenlei-2"></view>
			</view>
		</view>
		<view class="fan-content">
			<scroll-view class="fan-scroll" scroll-x="true">
				<view class="fan-item">
					<image class="fan-item-img" src="../../static/logo.png"></image>
					<view class="fan-item-info">
						<text class="fan-title">Re:从零开始的异世界生活</text>
						<text class="fan-progress">看到第1话 41%</text>
					</view>
				</view>
				<view class="fan-item">
					<image class="fan-item-img" src="../../static/logo.png"></image>
					<view class="fan-item-info">
						<text class="fan-title">Re:从零开始的异世界生活</text>
						<text class="fan-progress">看到第1话 41%</text>
					</view>
				</view>
				<view class="fan-item">
					<image class="fan-item-img" src="../../static/logo.png"></image>
					<view class="fan-item-info">
						<text class="fan-title">Re:从零开始的异世界生活</text>
						<text class="fan-progress">看到第1话 41%</text>
					</view>
				</view>
				<view class="fan-item">
					<image class="fan-item-img" src="../../static/logo.png"></image>
					<view class="fan-item-info">
						<text class="fan-title">Re:从零开始的异世界生活</text>
						<text class="fan-progress">看到第1话 41%</text>
					</view>
				</view>
				<view class="fan-item">
					<image class="fan-item-img" src="../../static/logo.png"></image>
					<view class="fan-item-info">
						<text class="fan-title">Re:从零开始的异世界生活</text>
						<text class="fan-progress">看到第1话 41%</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ChasingFan",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.fan-box {
		width: 750rpx;
		height: 350rpx;
		display: flex;
		flex-direction: column;
		background-color: #fff;
	}

	.fan-header {
		display: flex;
		justify-content: space-between;
		padding: 10rpx;
		background-color: #fff;
	}
	.fan-header-left,
	.fan-header-right{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.fan-header-left{
		font-size: 28rpx;
		font-weight: 700;
	}
	.fan-header-right{
		font-size: 24rpx;
		color: #9f9f9f;
	}
	.fan-left-word,
	.fan-right-word{
		padding: 0 10rpx;
	}
	
	/*图片 */
	.fan-content{
		height:100rpx;
	}
	.fan-scroll{
		padding-right: 10rpx;
		box-sizing: border-box;
		white-space: nowrap;
	}
		
	.fan-item{
		display: inline-block;
		width: 280rpx;
		padding: 10rpx;
	}
	.fan-item-img{
		width: 280rpx;
		height: 160rpx;
	}
	
	.fan-item-info{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.fan-title,
	.fan-progress{
		width: 100%;
		padding-top: 8rpx;
		font-size: 28rpx;
		box-sizing: border-box;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.fan-progress{
		font-size: 24rpx;
		color: #FA7298;
	}
</style>