<template>
	<view class="swiper-box">
		<swiper class="swiper-list" :loop="loop" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration" :indicator-active-color="indicatorActiveColor" :indicator-color="indicatorColor">
			<swiper-item v-for="(img,index) in swiperList" :key="index">
				<view class="swiper-item">
					<image class="item-image" :src='img.imgUrl' alt="失败"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: "SwiperPage",
		data() {
			return {
				swiperList: [{
						imgUrl: '../../static/images/xStarAndRun.png'
					},
					{
						imgUrl: '../../static/images/xStarTrails.png'
					},
					{
						imgUrl: '../../static/images/xStore.jpg'
					},
					{
						imgUrl: '../../static/images/xStarAndMusic.jpg'
					},
					{
						imgUrl: '../../static/images/xCityAndNight.jpg'
					},
				],
				loop: true, // 启用循环播放
				autoplay: true, // 自动自动切换
				duration: 200, // 滑动动画时长
				interval: 3000, // 展示时长
				indicatorDots: true, // 显示指示点
				indicatorActiveColor: 'rgba(255, 255, 255, 1)', // 指示点选中颜色
				indicatorColor: 'rgba(233, 235, 236, 0.5)', // 指示点未选中颜色
			}
		},
		mounted() {}
	}
</script>

<style scoped>
	image {
		width: 100%;
		height: 400rpx;
		background-size: cover;
	}

	.swiper-box {
		padding: 10rpx;
	}
		
	.swiper-list{
		border-radius: 20rpx;
		overflow: hidden;
	}

	swiper {
		width: 100%;
		height: 400rpx;
	}


	>>>.uni-swiper-dots-horizontal {
		left: 85%;
	}
</style>