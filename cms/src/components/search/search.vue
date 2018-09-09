<template>
	<div>
		<br />
		<mt-button type="default" @click="goback">返回</mt-button>
		我是查找
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			goback(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
</style>