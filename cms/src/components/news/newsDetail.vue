<template>
	<div>
		<nav-bar title = "新闻详情"></nav-bar>
		<h2>{{detail.category}}</h2>
		<span>
			{{detail.newsDetail}}
			
		</span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				detail : {}
			}
		},created(){
			var id =  this.$route.query.id;
			this.$ajax.post("http://localhost:8888/news/detail",{"id":id})
			.then(res=>{
				this.detail = res.data;
				console.log(this.detail)
			}).catch(err=>{
				console.log(err);
			})
		}
	}
</script>

<style>
</style>