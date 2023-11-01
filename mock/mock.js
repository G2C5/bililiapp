const Mock = require('mockjs')
const Random = Mock.Random
import navList from "./mockData/navList.json"
import recommend from "./mockData/recommend.json"

//Mock插件：中间件默认是GET请求
Mock.mock("/mock/navList",'get', { code: 200, data: navList });
//Mock插件：中间件默认是GET请求
Mock.mock('/mock/recommend', { code: 200, data: recommend });