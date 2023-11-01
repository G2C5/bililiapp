<template>
	<button class="join-vip">{{title}}</button>
</template>

<script>
	export default {
		name: "PinkButtom",
		props:{
			title:{
				type:String,
				default:'立即参与'
			}
		}
	}
</script>

<style scoped>
	.join-vip {
		display: block;
		width: 180rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		font-size: 32rpx;
		border-radius: 32rpx;
		background-color: #f43b8b;
		color: #ffffff;
		margin: 0;
		padding: 0;
	}
</style>