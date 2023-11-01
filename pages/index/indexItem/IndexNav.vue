<template>
	<view  class="nav">
		<view class="nav-content">
			<scroll-view class="scroll-content" :scroll-into-view="scrollIntoView" scroll-x="true">
				<view class="nav-item" :class="index===navIndex?'nav-item-active':''" v-for="(navitem,index) in navData"
					:id="'nav'+index">
					<text @click="clickNav(index)" class="nav-item-title">{{navitem}}</text>
				</view>
			</scroll-view>
		</view>
		<view class="nav-icon">
			<view class="icon t-icon-liebiao-1"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 1,
				scrollIntoView: '', // 初始化为空
			}
		},
		props:['getIndex','swiperIndex','navData'],
		methods: {
			clickNav(index) {
				this.navIndex = index;
				this.scrollIntoView = 'nav' + (index > 0 ? index - 1 : 0);  
				this.getIndex(this.navIndex,this.navData.length)
			}
		},
		watch:{
			swiperIndex:{
				immediate:true,
				handler(newvalue,oldValue){
					this.clickNav(this.swiperIndex)
				}
			}
		}
	}
</script>

<style scoped>
	.nav {
		z-index: 9999;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		height: 80rpx;
		background-color: #FA7298;
	}

	.nav-content {
		padding-left: 50rpx;
		overflow: hidden;
	}

	.scroll-content {
		white-space: nowrap;
		height: 80rpx;
		line-height: 80rpx;
	}

	.nav-item {
		display: inline-block;
		height: 80rpx;
		margin-right: 40rpx;
		color: #efefef;
		
	}

	.nav-icon {
		z-index: 999;
		padding-right: 40rpx;
		padding-left: 10rpx;
		background-repeat: no-repeat; 
		/* 水平居中对齐子元素 */
		box-shadow: -20rpx 0 10rpx rgba(250, 114, 152, 0.6);
		/* 在左侧添加阴影 */
	}
	.nav-item-title {
		display: inline-block;
	}
	.nav-item-active {
		font-size: 36rpx;
		font-weight: bold;
		box-sizing: border-box;
		border-bottom: 4px solid #fff;
	}
</style>