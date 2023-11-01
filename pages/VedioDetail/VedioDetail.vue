<template>
	<view class="video-content">
		<!-- 返回栏 -->
		<view class="vedio-cancal" :style="{display:isPlaying? 'none':'block'}">
			<text @click="back">返回</text>
		</view>
		<view class="video-container">
			<!-- 视频 -->
			<video @click="isPlaying=!isPlaying" class="video" src="@/static/vedios/AnOtherWorld.mp4"></video>
		</view>
		<view class="vedio-info">
			<!-- 视频栏 -->
			<view class="vedio-bar">
				<view class="vedio-bar-nav">
					<text class="bar-nav-static" :class="barNavActive? 'bar-nav-active':''"
						@click="barNavActive = true">简介</text>
					<text class="bar-nav-static" :class="barNavActive? '':'bar-nav-active'"
						@click="barNavActive = false">评论</text>
				</view>
				<view class="sending-barrage">
					<transition name="fade">
						<input key="dynamicKey1" v-show="showBarrage" class="input-barrage" type="text"
							placeholder="点我发送弹幕">
					</transition>

					<view key="dynamicKey2" class="close-barrage"
						:style="{ backgroundColor: showBarrage ? '#ffff':'#f5f5f5'}" @click="showBarrage =!showBarrage">
						弹</view>
				</view>
			</view>

			<VideoIntroduction></VideoIntroduction>
			<!-- 简介 -->
			<!-- 评论 -->
		</view>
		<!-- 视频推荐 -->
		<vedioListX></vedioListX>
	</view>
</template>

<script>
	import VideoIntroduction from './VideoIntroduction.vue'
	export default {
		data() {
			return {
				// 控制是否展示顶部视频栏（默认开）
				isPlaying: false,
				// 控制是否打开弹幕（默认开）
				showBarrage: true,
				// 控制简介、评论切换（默认简介）
				barNavActive: true,
				// 控制视频详细信息展示，
				showVedioInfo: false
			};
		},
		components: {
			VideoIntroduction
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1 // 返回的页面数，1 表示返回上一页
				});
			}
		}
	};
</script>

<style scoped>
	.video-content {
		width: 750rpx;
	}

	/* 视频播放区域 */
	.video-container {
		position: relative;
		width: 750rpx;
	}

	.video {
		display: block;
		width: 100%;
		height: 450rpx;
	}

	.vedio-cancal {
		position: absolute;
		top: 0;
		height: 100rpx;
		width: 750rpx;
		padding: 0 20rpx;
		color: #fff;
		line-height: 100rpx;
		box-shadow: 0rpx 30rpx 32rpx #888888 inset;
		z-index: 999;
	}

	/* 视频栏 */
	.vedio-bar {
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		line-height: 80rpx;
		color: #888888;
		box-shadow: 0 2rpx 4rpx #d1d1d1;
	}

	.vedio-bar-nav {
		width: 60%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		font-size: 28rpx;
	}

	.bar-nav-static {
		display: inline-block;
		height: 80rpx;
		box-sizing: border-box;
	}

	.bar-nav-active {
		color: #FA7298;
		border-bottom: 4rpx solid #FA7298;
	}

	.sending-barrage {
		height: 60rpx;
		display: flex;
		align-items: center;
		line-height: 60rpx;
		overflow: hidden;
		margin-right: 40rpx;
		box-sizing: border-box;
		border-radius: 60rpx;
		overflow: hidden;
		border: 2rpx solid #e3e3e3;
	}

	.input-barrage {
		/* display: none; */
		height: 60rpx;
		width: 150rpx;
		background-color: #f9f9f9;
		font-size: 24rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		border-radius: 60rpx 0 0 60rpx;
	}

	.close-barrage {
		display: inline-block;
		width: 60rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 24rpx;
		text-align: center;
		background-color: #b5b5b5;
		/* border-radius: 0 60rpx 60rpx 0; */
	}

	/* 隐藏弹幕输入框动画 */
	.fade-enter-active,
	.fade-leave-active {
		width: 150rpx;
		opacity: 1;
		transition: all 0.3s linear;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
		width: 0;
	}
</style>