<template>
	<div>
		<mt-header title="唯念美容工作室"></mt-header>
		<router-view></router-view>
		
		<nav class="mui-bar mui-bar-tab">
			<router-link :to="{name:'home'}" class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link :to="{name:'member'}" class="mui-tab-item " >
				<span class="mui-icon icon-huiyuan"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link :to="{name:'shopcart'}" class="mui-tab-item">
				<span class="mui-icon icon-gouwuche1"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link :to="{name:'search'}" class="mui-tab-item">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">查找</span>
			</router-link>
		</nav>
		
	</div>
</template>

<script>
</script>

<style scoped="scoped">

</style>