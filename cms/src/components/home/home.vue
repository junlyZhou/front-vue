<template>
	<div>

		<mt-swipe :auto="2000" >
		  <mt-swipe-item v-for="(img,index) in imgs" :key = "index">
		  	<img :src="img" />
		  </mt-swipe-item>
		</mt-swipe>
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'news.list'}">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
		            	</router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'tuwen'}">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图文分享</div>
		            	</router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'showgoods'}">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品展示</div>
		            	</router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'msgback'}">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div>
		            	</router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'searchmsg'}">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索资讯</div>
		            	</router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'connectus'}">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div>
		            	</router-link>
		            </li>
		        </ul> 
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgs:[]
			}
		},
		created(){
			this.$ajax.get("http://localhost:8888/lunbotu").then(res=>{
				var imgArrayObj =  res.data;
				for(var i = 0 ;i<imgArrayObj.length;i++){
					this.imgs.push(imgArrayObj[i].imgUrl);
				}
			})
		}
	}
</script>

<style scoped="scoped">
	/**
	 * 轮播图样式
	 */
	.mint-swipe{
		height: 266px;
	}
	.mint-swipe img{
		width: 400px;
	}
	/**
	 * 九宫格样式
	 */
	.mui-content > .mui-table-view:first-child {
    	margin-top: 0px; 
	}
	
	.mui-table-view.mui-grid-view.mui-grid-9{
		background-color: white;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border: none;
	}
	.mui-icon-home:before,
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
		content: '';
	}
	.mui-icon-home{
		background-image: url(../../static/img/584.jpg);
		background-repeat: round;
		height: 60px;
		width: 60px;
	}
	.mui-icon-email{
		background-image: url(../../static/img/401.jpg);
		background-repeat: round;
		height: 60px;
		width: 60px;
	}
	.mui-icon-chatbubble{
		background-image: url(../../static/img/363.jpg);
		background-repeat: round;
		height: 60px;
		width: 60px;
	}
	.mui-icon-location{
		background-image: url(../../static/img/525.jpg);
		background-repeat: round;
		height: 60px;
		width: 60px;
	}
	.mui-icon-search{
		background-image: url(../../static/img/868.jpg);
		background-repeat: round;
		height: 60px;
		width: 60px;
	}
	.mui-icon-phone{
		background-image: url(../../static/img/873.jpg);
		background-repeat: round;
		height: 60px;
		width: 60px;
	}
	
</style>