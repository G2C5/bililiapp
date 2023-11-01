<template>
	<view class="">
		<view>{{navList}}</view>
		<hr>
		<view>{{navinfo}}</view>
		<button>00</button>
	</view>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
	export default {
		data() {
			return {
				navinfo:{}
			}
		},
		computed: {
			...mapState('recommend',['navList'])
		},
		mounted() {
			
			this.$store.dispatch('recommend/reqNavListData')	
		}
	};
</script>

<style>

</style>