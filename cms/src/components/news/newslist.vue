<template>
	<div class="tmpl">
		<nav-bar title = "新闻列表"></nav-bar>
		<ul class="mui-table-view">
				<li v-for="(news , index) in newslist" :key="index" class="mui-table-view-cell mui-media" >
					<router-link :to="{name:'news.detail',query:{id:news.id}}">
						<img class="mui-media-object mui-pull-left" :src="news.imgUrl">
						<div class="mui-media-body">
							<span>{{news.title}}</span>
							<div class="news-desc">
								<p>点击数：{{news.click}}</p>
								<p>发表时间：{{news.addTime | convertDate}}</p>
							</div>
							<!--<p class='mui-ellipsis'>{{news.summary}}</p>-->
						</div>
					</router-link>
				</li>
			</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				newslist : []
			}
		},
		created(){
			this.$ajax.get("http://localhost:8888/news/list").then(res=>{
				var newslistArray =  res.data;
				for(var i = 0 ;i<newslistArray.length;i++){
					this.newslist.push(newslistArray[i]);
				}
				console.log(newslistArray);
			}).catch(err=>{
				console.log(err);
			})
		}
	}
</script>

<style>
</style>