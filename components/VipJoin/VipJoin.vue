<template>
	<view class="vip-card" :style="[{display:isShow}]">
		<view class="vip-left">
			<text class="vip-header">大会员惊喜价！</text>
			<text class="vip-footer">108元年卡再增60天</text>
		</view>
		<view class="vip-right">
			<!-- <button class="join-vip">立即参与</button> -->
			<PinkButtom></PinkButtom>
			<text class="close-vip" @click="isShow='none'">×</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"VipJoin",
		data() {
			return {
				isShow:'',
			};
		},
		methods:{
			closeVipCard(){
				
			}
		}
	}
</script>

<style scoped>
	
.vip-card{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20rpx 40rpx;
	margin: 0 10rpx;
	background-color: #fa9db9;
	border-radius: 20rpx;
}
.vip-left{
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #e71b5c;
}
.vip-header{
	font-size: 36rpx;
}
.vip-footer{
	font-size: 26rpx;
}
	
.vip-right{
	display: flex;
	justify-content: center;
	align-items: center;
}

.close-vip{
	font-size: 48rpx;
	color: #fa4063;
	padding-left: 30rpx;
}
</style>