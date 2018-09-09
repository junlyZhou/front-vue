'use strict'
import Vue from 'vue';

import Router from 'vue-router';
Vue.use(Router);
import VuePreview from 'vue-preview';
Vue.use(VuePreview);


import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
import Axios from 'axios';
Vue.prototype.$ajax=Axios;
import './static/vendor/mui-master/dist/css/mui.css';

//Axios 拦截器操作loadding
Axios.interceptors.request.use(function(config){
	Mint.Indicator.open({
		text:'加载中...',
		spinnerType:'fading-circle'
	})
	return config;
});
Axios.interceptors.response.use(function(config){
	Mint.Indicator.close();
	return config;
});

import './static/css/global.css';
import Moment from 'moment';

import NavBar from './components/commons/navBar.vue';

//定义过滤器
Vue.filter("convertDate",function(vaule){
	//moment(1536389864000).format('YYYY-MM-DD HH:mm:ss')
	return Moment(vaule).format('YYYY-MM-DD HH:mm:ss');
})
Vue.component('navBar',NavBar);


//引入自己的vue 文件 开始
import App from './app.vue';
import Home from './components/home/home.vue';
import Member from './components/member/member.vue';
import Search from './components/search/search.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import NewsList from './components/news/newslist.vue';
import Connectus from './components/other/connectus.vue';
import Msgback from './components/other/msgback.vue';
import Searchmsg from './components/other/searchmsg.vue';
import Showgoods from './components/other/showgoods.vue';
import Tuwen from './components/other/tuwen.vue';
import NewsDetail from './components/news/newsDetail.vue';

Vue.component('VueHome',Home);

//激活样式替换为mui-active
let router = new Router({
	linkActiveClass:'mui-active',
	routes :[
		{path:'/',redirect:{name:'home'}},
		{name:'home',path:'/home',component:Home},
		{name:'member',path:'/member',component:Member},
		{name:'search',path:'/search',component:Search},
		{name:'shopcart',path:'/shopcart',component:Shopcart},
		{name:'news.list',path:'/news/list',component:NewsList},
		{name:'news.detail',path:'/news/detail',component:NewsDetail},
		{name:'connectus',path:'connectus',component:Connectus},
		{name:'msgback',path:'msgback',component:Msgback},
		{name:'searchmsg',path:'searchmsg',component:Searchmsg},
		{name:'showgoods',path:'showgoods',component:Showgoods},
		{name:'tuwen',path:'tuwen',component:Tuwen}
	]
})


new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})
