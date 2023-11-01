import {
	reqNavList,reqRecommend
} from '@/api/index'

export default {
	namespaced: true,
	actions: {
		async reqNavListData(context) {
			try{
				let result = await reqNavList();
				if(result.code === 200){
					context.commit('REQ_NAV_LIST_DATA',result.data)
				}
			}catch(e){
				//TODO handle the exception
			}
		},
		async reqRecommendData(context){
			try{
				let result = await reqRecommend()
				if(result.code === 200){
					context.commit('REQ_RECOMMENT_DATA',result.data)
				}
			}catch(e){
				//TODO handle the exception
			}
		}
	},
	mutations: {
		REQ_NAV_LIST_DATA(state,data){
			console.log('1',data)
			state.navList = data.nav
			state.navData = data.data
		},
		REQ_RECOMMENT_DATA(state,data){
			
		}
	},
	state: {
		navList: ['1'],
		navData: {}
	},
	getters: {
		newNavData(){
			
		}
	}
}