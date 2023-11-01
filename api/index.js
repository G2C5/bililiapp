//统一 请求接口
import axiosRequest from './axiosRequests.js'
import mockRequest from './mockRequests.js'


	
export const reqNavList=()=>{
	return mockRequest({
		url:"/mock/navList",
		method:'get'
	})
}
export const reqRecommend=()=>{
	return mockRequest({
		url:"/mock/recommend",
		method:'get'
	})
}