<template>
	<view class="big-box">
		<view class="big-item">
			<image class="big-img" src="../../static/images/xCityAndNight.jpg"></image>
			<view class="big-info">
				<view class="info-header">
					<text class="big-title">城市下狸猫、天狗、人类的纠缠</text>
					<view class="vip-icon">
						<text class="vip-left">大</text>
						<text class="vip-right">会员</text>
					</view>
				</view>
				<view class="info-footer">
					<view class="big-info-left">
						<view class="">
							<text class="small-title">有顶家族</text>
							<text class="small-score">9.5分</text>
						</view>
						<view class="">
							<text class="vedio-type2">番剧·奇幻</text>
							<text >“</text>
							<text class="small-type">隐藏在城市下的狸猫</text>
						</view>
					</view>
					<view class="big-info-right">
						<button class="add-fan">+追番</button>
						<view class="icon t-icon-more-2"></view>
					</view>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		name: "BigImageCard",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.big-box {
		width: 750rpx;
		/* 	display: flex;
		flex-wrap: nowrap; */
		box-sizing: border-box;

	}

	.big-item {
		position: relative;
		margin: 0 10rpx 10rpx;
		border-radius: 30rpx;
		overflow: hidden;
		background-color: #e88;
	}

	.big-img {
		display: block;
		width: 100%;
		height: 400rpx;
	}

	.big-info {
		width: 100%;
		height: 130rpx;
	}

	.info-header {
		width: 100%;
		height: 60rpx;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20rpx;
		box-sizing: border-box;
		color: #fff;
		box-shadow: 0 30rpx 40rpx 5rpx #444 inset;
	}
	.vip-icon{
		/* background-color: #e71b5c; */
	}
	.vip-left,
	.vip-right {
		padding: 0 20rpx;
		font-size: 24rpx;
		background-color: #e71b5c;
		color: #fff;
	}

	.vip-left {
		position: relative;
		left: 12rpx;
		padding: 4rpx;
		border-radius: 50%;
		border: 4rpx solid #fff;
	}
	.info-footer{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx; 
		background-color: #bbb;
		box-sizing: border-box;
	}
	.big-info-left{
		display: flex;
		flex-direction: column;
	}
	.small-title{
		font-size: 36rpx;
		font-weight: bold;
	}
	.small-score{
		font-size: 24rpx;
		color: #ff3e04;
		margin-left: 10rpx;
	}
	.small-type{
		font-size: 28rpx;
	}
	.big-info-right{
		display: flex;
		align-items: center;
	}
	.add-fan{
		width: 130rpx;
		font-size: 24rpx;
		line-height: 50rpx;
		text-align: center;
	}
	.vedio-type2 {
		display: inline-block;
		padding: 0 6rpx;
		color: #ff3e04;
		border: 2rpx solid #ffefe2;
		background-color: #ffefe2;
		border-radius: 10%;
		font-size: 20rpx;
	}
</style>