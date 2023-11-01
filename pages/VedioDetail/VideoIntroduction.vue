<template>
	<view class="vedio-introduction-container">
		<!-- 作者信息 -->
		<view class="vedio-author">
			<view class="vedio-author-left">
				<image class="autor-img" src="../../static/images/user.png" mode=""></image>
				<view class="autor-info">
					<text class="autor-name">视频作者id</text>
					<view class="autor-data">
						<text class="autor-fan">198.7万粉丝</text>
						<text class="vedio-num">483视频</text>
					</view>
				</view>
			</view>
			<PinkButtom title="+ 关注"></PinkButtom>
		</view>
		<!-- 视频详细数据 -->
		<view class="vedio-message">
			<view class="vedio-title-container">
				<!-- 标题标签：可选 -->
				<view class="vedio-title-content">
					<view class="vedio-title-lable">
						<IconfontView iconheight="28rpx" iconwidth="28rpx" icon="t-icon-more-2"></IconfontView>
						<text>热门</text>
					</view>
				</view>
				<text class="vedio-title"
					:class="{ 'expanded': isExpanded }">视频标题视频标题题视频标题视频标题视频标题题视频标题视频标题视频标题题视频标题</text>
				<view class="show-title" @click="toggleTitle">
					<IconfontView icon="t-icon-more-2" @click.native="isInfo =!isInfo"></IconfontView>
				</view>
			</view>
			<!-- 播放量、评论数、时间、正在观看、AV号、授权信息、简介、标签 -->
			<view class="animation-box">
				<view class="vedio-data">
					<view class="vedio-data-item">
						<IconfontView iconwidth="24rpx" iconheight="24rpx"></IconfontView>
						<text class="vedio-data-msg">5</text>
					</view>
					<view class="vedio-data-item">
						<IconfontView iconwidth="24rpx" iconheight="24rpx"></IconfontView>
						<text class="vedio-data-msg">5242</text>
					</view>
					<view class="vedio-data-item">
						<IconfontView iconwidth="24rpx" iconheight="24rpx"></IconfontView>
						<text class="vedio-data-msg">2023-10-6 14:15</text>
					</view>
					<view class="vedio-data-item">
						<IconfontView iconwidth="24rpx" iconheight="24rpx"></IconfontView>
						<text class="vedio-data-msg">2人正在看</text>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 默认隐藏信息 -->
		<transition name="fade">
			<view class="vedio-message expand" v-show="isExpanded">
				<!-- 授权信息 -->
				<view class="vedio-data">
					<view class="vedio-data-item">
						<IconfontView iconwidth="24rpx" iconheight="24rpx"></IconfontView>
						<text class="vedio-data-msg">AV1145140</text>
					</view>
					<view class="vedio-data-item">
						<IconfontView iconwidth="24rpx" iconheight="24rpx"></IconfontView>
						<text class="vedio-data-msg">未经作者授权禁止转载</text>
					</view>
				</view>
				<!-- 视频简介 -->
				<view class="video-introduction">
					<text>视频简介视频简介视频简介视频简介视频简介视频简介视频简介视频简介视频简介视频简介视频简介视频简介</text>
				</view>
				<!-- 视频标签：可选 -->
				<VedioLable></VedioLable>
			</view>
		</transition>
		<!-- 下半 -->
		<view class="top">
			<!-- 一键三连 -->
			<view class="vedio-evaluate">
				<!-- 点赞 -->
				<view class="vedio-evaluate-item">
					<IconfontView></IconfontView>
					<text>12</text>
				</view>
				<!-- 不喜欢 -->
				<view class="vedio-evaluate-item">
					<IconfontView></IconfontView>
					<text>不喜欢</text>
				</view>
				<!-- 投币 -->
				<view class="vedio-evaluate-item">
					<IconfontView></IconfontView>
					<text>12</text>
				</view>
				<!-- 收藏 -->
				<view class="vedio-evaluate-item">
					<IconfontView></IconfontView>
					<text>12</text>
				</view>
				<!-- 分享 -->
				<view class="vedio-evaluate-item">
					<IconfontView></IconfontView>
					<text>分享</text>
				</view>
			</view>
			<!-- 视频合集：可选 style="display:none" -->
			<view class="Video-Collection">
				<text class="Video-Collection-title">合集· 去看看来自人间的异世界</text>
				<view class="Video-Collection-right">
					<IconfontView icon="t-icon-more-2" iconheight="24rpx" iconwidth="24rpx"></IconfontView>
					<text class="Video-Collection-num">48/52></text>
				</view>
			</view>
			<!-- 视频分集：可选 -->
			<view class="video-diversity">
				<scroll-view class="video-diversity-scroll" scroll-x="true">
					<view class="video-diversity-item">
						<text class="video-diversity-title">1ggf1</text>
					</view>
					<view class="video-diversity-item">
						<text class="video-diversity-title">11---ah师傅带你看附jabflj件ddddd</text>
					</view>
					<view class="video-diversity-item">
						<text class="video-diversity-title">11</text>
					</view>
					<view class="video-diversity-item">
						<text class="video-diversity-title">11---ah师傅带你看附件ddddddd</text>
					</view>
					<view class="video-diversity-item">
						<text class="video-diversity-title">11---ah师傅带你看附件ddddddd</text>
					</view>

				</scroll-view>
				<view class="video-diversity-scroll-right">
					<IconfontView></IconfontView>
				</view>
			</view>
			<!-- 缩放展示标签：可选 -->
			<view class="activity-label">
				<VedioLable :lableData="lableData"></VedioLable>
			</view>
		</view>
	</view>
</template>

<script>
	import VedioLable from './VedioLabel.vue'
	export default {
		data() {
			return {
				// 标题的显示隐藏
				isExpanded: false,
				isInfo: false,
				// 隐藏信息是否展示
				showMore:false,
				vedio:{
					title:'视频标题视频标题题视频标题视频标题视频标题题视频标题视频标题视频标题题视频标题'
				},
				lableData: [{
						id: 1,
						leftIcon: 't-icon-fenlei-2',
						iconTitle: 'UPz主笔记',
						rightIcon: 't-icon-fenlei-2'
					},
					{
						id: 2,
						leftIcon: 't-icon-fenlei-2',
						iconTitle: '全世界都在说中国话',
						rightIcon: 't-icon-fenlei-2'
					}
				],
			}
		},
		components: {
			VedioLable
		},
		methods: {
			toggleTitle() {
				console.log(this.$refs.offsetHeight)
				this.isExpanded = !this.isExpanded;
			}
		},
	}
</script>

<style scoped>
	.vedio-introduction-container {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		border-bottom: 2rpx solid #d1d1d1;
		padding-bottom: 40rpx;
	}

	.vedio-author {
		padding: 0 40rpx;
		width: 750rpx;
		height: 150rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		/* background-color: #0ee; */
	}

	.vedio-author-left {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.autor-img {
		display: block;
		width: 100rpx;
		height: 100rpx;
		border-radius: 100rpx;
		margin-right: 40rpx;
	}

	.autor-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.autor-name {
		color: #FA7298;
		font-size: 30rpx;
	}

	.autor-fan,
	.vedio-num {
		color: #888888;
		font-size: 24rpx;
	}

	.vedio-num {
		margin-left: 20rpx;
	}

	/* 视频标题以下 */
	.vedio-message {
		padding: 0 40rpx;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		color: #888888;
		font-size: 24rpx;
	}

	.vedio-title-container {
		position: relative;
		width: 100%;
		padding-right: 50rpx;
		line-height: 50rpx;
		font-size: 32rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		box-sizing: border-box;
	}

	.vedio-title-content {
		display: inline-block;
	}

	.vedio-title-lable {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 120rpx;
		padding: 0 8rpx;
		margin-right: 8rpx;
		background-color: #f6f6f6;
		border-radius: 28rpx;
		box-sizing: border-box;
	}

	.show-title {
		position: absolute;
		top: 4rpx;
		right: -4rpx;
	}

	/* 隐藏详细视频详细动画 */
	.animation-box {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.texta {
		display: block;
		width: 200rpx;
		background-color: #0ee;
	}

	.expanded {
		white-space: normal;
		overflow: visible;
		text-overflow: ellipsis;
	}

	/* 视频播放数据 */

	.vedio-data {
		display: flex;
		flex-wrap: wrap;
		padding-top: 10rpx;
	}

	.vedio-data-item {
		display: flex;
		align-items: center;
		margin-top: 10rpx;
		margin-right: 28rpx;
	}

	.vedio-data-msg {
		margin-left: 6rpx;
	}

	/* 视频简介 */
	.video-introduction {
		padding: 20rpx 0;
	}

	/* 一件三连 */
	.vedio-evaluate {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 10rpx 0;
		margin: 40rpx 0;
	}

	.vedio-evaluate-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #888888;
		font-size: 24rpx;
	}

	/* 视频合集 */
	.Video-Collection {
		height: 60rpx;
		margin: 0 40rpx 40rpx;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f6f6f6;
		border-radius: 10rpx;
		box-sizing: border-box;
	}

	.Video-Collection-title {
		font-size: 32rpx;
		font-weight: bold;
	}

	.Video-Collection-right {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.Video-Collection-num {
		font-size: 24rpx;
		color: #888888;
	}

	/* 视频分集 */
	.video-diversity {
		height: 120rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-right: 80rpx;
		margin-bottom: 40rpx;
		box-sizing: border-box;
	}

	.video-diversity-scroll {
		white-space: nowrap;
	}

	.video-diversity-item {
		display: inline-block;
		margin-left: 40rpx;
		padding: 0 10rpx;
		width: 200rpx;
		height: 120rpx;
		background-color: #f6f6f6;
		border-radius: 10rpx;
		overflow: hidden;
		box-sizing: border-box;
	}

	.video-diversity-title {
		position: relative;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: -webkit-box;
		white-space: normal;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.video-diversity-scroll-right {
		z-index: 99;
		display: flex;
		align-items: center;
		height: 120rpx;
		box-shadow: -20rpx 0 20rpx #fff;
	}

	.activity-label {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: 0 40rpx;
	}

	.vedio-container {
		width: 100%;
	}

	.fade-enter-active, .fade-leave-active {
	  transition: all 1s;
	}
	.fade-enter, .fade-leave-to {
	  height: 0;
	  opacity: 0;
	}
	.expand {
	  overflow: hidden;
	}
</style>