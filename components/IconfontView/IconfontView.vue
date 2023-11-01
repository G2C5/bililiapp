<template>
		<view class="icon" :class="icon" :style="[{width:iconwidth,height:iconheight}]"></view>	
</template>

<script>
	export default {
		name: "IconfontView",
		data() {
			return {

			};
		},
		props: {
			icon: {
				default: 't-icon-fenlei-2',
				type: String
			},
			iconwidth: {
				default: '48rpx',
				type: String
			},
			iconheight: {
				default: '48rpx',
				type: String
			}
		}
	}
</script>

<style>
	.icon {
		display: block;
		fill: currentColor;
		overflow: hidden;
		background-repeat: no-repeat;
		padding: 0;
		margin: 0;
		border: 0;
	}
</style>