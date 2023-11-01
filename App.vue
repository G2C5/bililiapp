<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
			// 获取系统信息
			uni.getSystemInfo({
				success: (systemInfo) => {
					// console.log('系统信息', systemInfo)
					let menuInfo = {}
					let menuInfo1 = {}
					let menuInfo2 = {}
					//  1. 设备信息
					//statusBarHeight：    设备状态栏高度(注意此无单位)
					//windowHeight：       可使用窗口高度（ios系统默认不算底部导航，安卓算）
					//screenHeight：       屏幕高度（手机真实高度）
					//safeAreaBottom：     底部安全区域坐标
					//platform:            设备系统
					let statusBarHeight = systemInfo.statusBarHeight || 0
					let windowHeight = systemInfo.windowHeight
					let screenHeight = systemInfo.screenHeight
					let safeAreaBottom = systemInfo.safeArea.bottom
					let platform = systemInfo.platform // Android 和 iOS 可能不同
					/* console.log('screenHeight',screenHeight)
					console.log('windowHeight',windowHeight)
					console.log('safeAreaBottom',safeAreaBottom)
					console.log('platform',platform) */
		
					// // 获取底部导航栏高度
					// let navigationBarHeight = systemInfo.platform === 'android' ? 50 : 30; // Android 和 iOS 可能不同
					// let tabBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - navigationBarHeight;
		
		
		
					menuInfo1 = {
						statusBarHeight: statusBarHeight,
						windowHeight: windowHeight,
						screenHeight: screenHeight,
						safeAreaBottom:safeAreaBottom,
						platform:platform
					}
		
					// #ifndef H5 || APP-PLUS || MP-ALIPAY
					// 2. 小程序胶囊导航信息
					//bottom: 胶囊底部距离屏幕顶部的距离
					//height: 胶囊高度
					//left:   胶囊左侧距离屏幕左侧的距离
					//right:  胶囊右侧距离屏幕左侧的距离
					//top:    胶囊顶部距离屏幕顶部的距离
					//width:  胶囊宽度
					//navWidth: 让导航内容距离屏幕左边距离 = 2*微信胶囊距离屏幕右边距离 + 微信胶囊宽
					let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
					let menuHeight = menuButtonInfo.height + 'px'
					let menuWidth = menuButtonInfo.width
					let menuBorderRadius = menuButtonInfo.height / 2 + 'px'
					let menuRight = systemInfo.screenWidth - menuButtonInfo.right + 'px'
					let menuTop = menuButtonInfo.top + 'px'
					let navWidth = 2 * (systemInfo.screenWidth - menuButtonInfo.right) + menuWidth +
						'px'
					// console.log(menuButtonInfo.width, menuButtonInfo.height, menuButtonInfo.top)
					// console.log('计算胶囊右侧距离屏幕右边距离', systemInfo.screenWidth - menuButtonInfo.right)
					// console.log('微信导航栏胶囊信息',menuButtonInfo)
					// 微信胶囊信息
					menuInfo2 = {
						menuWidth: menuWidth, //右侧的胶囊宽度--用来给自定义导航条页面的左侧胶囊设置使用
						menuHeight: menuHeight, //右侧的胶囊高度--用来给自定义导航条页面的左侧胶囊设置使用
						menuBorderRadius: menuBorderRadius, //一半的圆角--用来给自定义导航条页面的左侧胶囊设置使用
						menuRight: menuRight, //右侧的胶囊距离右侧屏幕距离--用来给自定义导航条页面的左侧胶囊设置使用
						menuTop: menuTop, //右侧的胶囊顶部距离屏幕顶部的距离--用来给自定义导航条页面的左侧胶囊设置使用
						navWidth: navWidth,
					}
		
					// #endif 
					// 设备信息
					menuInfo = {
						...menuInfo1,
						...menuInfo2
					}
					// 存储到本地
					uni.setStorageSync('menuInfo', menuInfo)
					// console.log(uni.getStorageSync('menuInfo'))
				},
		
			})
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("./common/iconfont/iconfont-weapp-icon.css");
	/* 注意要写在第一行，同时给style标签加入属性 */
	@import "uview-ui/index.scss";

	*{
		padding: 0;
		margin: 0;
	}
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	
	button{
		background-color: transparent;
		border: none;
		padding: 0;
		margin: 0;
		font-size: inherit;
		color: inherit;
	}
	button::after{ border: none;}
</style>
