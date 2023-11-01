<template>
	<view class="video-content">
		<view class="video-item" @click="goVedioDetailView">
			<image class="vedio-cover" src="../../static/logo.png" mode=""></image>
			<view class="vedio-info">
				<text class="vedio-title">标题是什么啊？的rfhai付好款放大发疯阿德法案发达罚啊打发das</text>
				<view class="vedio-footer">
					<view>
						<text class="vedio-type1">UP</text>
						<text class="vedio-author">一只番薯</text>
					</view>
					<view class="icon hh t-icon-more-2"></view>
				</view>
			</view>
		</view>
		<view class="video-item">
			<image class="vedio-cover" src="../../static/logo.png" mode=""></image>
			<view class="vedio-info">
				<text class="vedio-title">标题是什么啊？的rfhai付好款放大发疯阿德法案发达罚啊打发das</text>
				<view class="vedio-footer">
					<view>
						<text class="vedio-type2">竖屏</text>
						<text class="vedio-author">一只番薯</text>
					</view>
					<view class="icon hh t-icon-more-2"></view>
				</view>
			</view>
		</view>
		<view class="video-item">
			<image class="vedio-cover" src="../../static/logo.png" mode=""></image>
			<view class="vedio-info">
				<text class="vedio-title">标题是什么啊？的rfhai付好款放大发疯阿德法案发达罚啊打发das</text>
				<view class="vedio-footer">
					<view>
						<text class="vedio-type3">直播</text>
						<text class="vedio-author">一只猴子</text>
					</view>
					<view class="icon hh t-icon-more-2"></view>
				</view>
			</view>
		</view>
		<view class="video-item">
			<image class="vedio-cover" src="../../static/logo.png" mode=""></image>
			<view class="vedio-info">
				<text class="vedio-title">标题是什么啊？的rfhai付好款放大发疯阿德法案发达罚啊打发das</text>
				<view class="vedio-footer">
					<view>
						<text class="vedio-type2">已关注</text>
						<text class="vedio-author">一只大番薯</text>
					</view>
					<view class="icon hh t-icon-more-2"></view>
				</view>
			</view>
		</view>
		<view class="video-item">
			<image class="vedio-cover" src="../../static/logo.png" mode=""></image>
			<view class="vedio-info">
				<text class="vedio-title">标题是什么啊？的rfhai付好款放大发疯阿德法案发达罚啊打发das</text>
				<view class="vedio-footer">
					<view>
						<text class="vedio-type2">已关注</text>
						<text class="vedio-author">一只大番薯</text>
					</view>
					<view class="icon hh t-icon-more-2"></view>
				</view>
			</view>
		</view>
		<view class="video-item">
			<image class="vedio-cover" src="../../static/logo.png" mode=""></image>
			<view class="vedio-info">
				<text class="vedio-title">标题是什么啊？的rfhai付好款放大发疯阿德法案发达罚啊打发das</text>
				<view class="vedio-footer">
					<view>
						<text class="vedio-type2">9千点赞</text>
						<text class="vedio-author">一只大番薯</text>
					</view>
					<view class="icon hh t-icon-more-2"></view>
				</view>
			</view>
		</view>
		<view class="video-item">
			<image class="vedio-cover" src="../../static/logo.png" mode=""></image>
			<view class="vedio-info">
				<!-- <text class="vedio-title">标题是什么啊？的rfhai付好款放大发疯阿德法案发达罚啊打发das</text> -->
				<view class="live-info">
					<image class="game-img" src="../../static/logo.png" mode=""></image>
					<view class="live-footer-left">
						<view class="live-state">
							<image class="livegif" src="../../common/uplive.gif" mode=""></image>
						</view>
						<text class="vedio-author">一只大dddddddddddddddddddddd番薯</text>
					</view>
					<view class="icon hh t-icon-more-2"></view>
				</view>

				<!-- <view class="vedio-footer">
					<view class="vedio-footer-left">
						<text class="vedio-type2">9千点赞</text>
						<text class="vedio-author">一只大ddd番薯</text>
					</view>
					<view class="icon hh t-icon-more-2"></view>
				</view> -->
			</view>
		</view>
		<view class="video-item">
			<image class="vedio-cover" src="../../static/logo.png" mode=""></image>
			<view class="vedio-info">
				<!-- <text class="vedio-title">标题是什么啊？的rfhai付好款放大发疯阿德法案发达罚啊打发das</text> -->
				<view class="vedio-game">
					<image class="game-img" src="../../static/logo.png" mode=""></image>
					<view class="game-info">
						<text class="game-title vedio-author">原神</text>
						<text class="game-flag vedio-author">动作/冒险</text>
					</view>
				</view>
				<view class="vedio-footer">
					<view class="vedio-footer-left">
						<text class="vedio-type3">游戏</text>
						<text class="vedio-type2">百万预约</text>
					</view>
					<view class="icon hh t-icon-more-2"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			goVedioDetailView(){
				uni.navigateTo({
					url:'/pages/VedioDetail/VedioDetail'
				})
			}
		}
	}
</script>

<style scoped>
	.video-content {
		background-color: #efefef;
		display: flex;
		flex-wrap: wrap;
	}

	.video-item {
		width: 360rpx;
		height: 500rpx;
		margin-left: 10rpx;
		margin-bottom: 10rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.vedio-cover {
		width: 100%;
		height: 300rpx;
	}

	.vedio-title {

		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.vedio-info {
		width: 100%;
		height: 200rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0 10rpx 30rpx;
		box-sizing: border-box;
	}

	.live-info {
		display: flex;
		height: 100%;
		width: 100%;
		align-items: flex-end;
		justify-content: space-between;
		font-size: 24rpx;
	}

	.live-footer-left {
		width: 200rpx;
		height: 90rpx;
		display: flex;
		flex-wrap: wrap;
		align-content: center;
		padding-left: 10rpx;
	}
	.live-state{
		display: inline-block;
		display: flex;
		align-items: center;
	}
	.livegif{
		height: 18px;
		width: 100rpx;
		border: 2rpx solid #ff0044;
		border-radius: 10rpx;
	}

	.vedio-game {
		display: flex;
		width: 100%;
		height: 100rpx;
	}

	.game-img {
		width: 90rpx;
		height: 90rpx;
		border-radius: 20%;
	}


	.game-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 24rpx;
		padding-left: 10rpx;
		color: #868686;
	}

	.game-title {}

	.game-flag {}

	.vedio-footer {
		width: 100%;
		font-size: 24rpx;
		color: #868686;
		display: flex;
		justify-content: space-between;
	}

	.vedio-footer-left {
		width: 90%;
		display: flex;
	}

	.vedio-author {
		white-space: nowrap;
		/* 禁止文本换行 */
		overflow: hidden;
		/* 隐藏溢出的部分 */
		text-overflow: ellipsis;
		/* 在溢出时显示省略号 (...) */
	}

	.vedio-type1 {
		width: 48rpx;
		text-align: center;
		white-space: nowrap;
		padding: 0 4rpx;
		border: 2rpx solid #868686;
		border-radius: 30%;
		overflow: hidden;
		margin: 6rpx 0;
		margin-right: 10rpx;
	}


	.vedio-type2 {
		white-space: nowrap;
		padding: 2rpx 6rpx;
		color: #ff3e04;
		border: 2rpx solid #ffefe2;
		background-color: #ffefe2;
		border-radius: 10%;
		margin-right: 10rpx;
	}


	.vedio-type3 {
		white-space: nowrap;
		padding: 2rpx 6rpx;
		color: #ff0044;
		border: 2rpx solid #ff0044;
		border-radius: 10%;
		margin-right: 10rpx;
	}

	.hh {
		width: 30rpx;
		height: 30rpx;
	}
</style>