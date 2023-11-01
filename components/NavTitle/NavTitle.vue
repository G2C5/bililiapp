<template>
	<view class="now">
		<!-- 正在热播 -->
		<text>正在热播</text>
		<text>-------</text>
	</view>
</template>

<script>
	export default {
		name:"HotBroadcasting",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.now{
	display: flex;
	justify-content: space-between;
	padding: 20rpx 10rpx;
	font-size: 28rpx;
	font-weight: 700;
}
</style>