<template>
	<div class="content_page" id="content">
		请在开抢前15-30秒点击此按钮，然后别动双手移开鼠标键盘
		<div class="content_page_main">
			<el-button v-if="!isWorking" @click="startWork">开始抢！</el-button>
			<el-button v-else @click="stopWork">结束任务</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				isWorking:false
			}
		},
		methods:{
			startWork(){
				console.log("开始抢")
				this.isWorking = true
			},
			stopWork(){
				console.log("停止抢")
				this.isWorking = false
			}
		}
	}
</script>

<style lang="less" scoped>
	.content_page{
		width:400px;
		color: red;
		position: absolute;
		z-index: 100001;
		left: 45%;
		top: 30vh;
	}
</style>