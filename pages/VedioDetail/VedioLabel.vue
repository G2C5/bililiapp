<template>
	<view class="vedio-label">
		<view class="vedio-label-item" v-for="(item,index) in lableData" :key="item.id" >
			<IconfontView v-if="item.leftIcon" :icon="item.leftIcon" iconwidth="24rpx" iconheight="24rpx"></IconfontView>
			<text class="vedio-label-title">{{item.iconTitle}}</text>
			<IconfontView v-if="item.rightIcon" :icon="item.right" iconwidth="24rpx" iconheight="24rpx"></IconfontView>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			lableData:{
				default:function(){
					return [
					{id:1,leftIcon:'t-icon-fenlei-2',iconTitle:'治愈',rightIcon:false},
					{id:2,leftIcon:'t-icon-fenlei-2',iconTitle:'热门',rightIcon:false},
					{id:3,leftIcon:false,iconTitle:'小说改',rightIcon:false},
					{id:4,leftIcon:false,iconTitle:'催泪',rightIcon:false},
					{id:5,leftIcon:false,iconTitle:'异世界',rightIcon:false},
					{id:6,leftIcon:false,iconTitle:'生活',rightIcon:false}]
				},
				type:Array
			}
		}
	}
</script>

<style scoped>
	/* 视频-标签 */
	.vedio-label {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

	}

	.vedio-label-item {
		display: flex;
		align-items: center;
		justify-content: center; 
		margin-right: 20rpx;
		margin-top: 20rpx;
		padding: 0 20rpx;
		background-color: #dedede;
		border-radius: 50rpx;
	}

	.vedio-label-title {
		color: #707070;
		font-size: 24rpx;
		padding: 10rpx 6rpx;
	}
</style>