<template>
	<div id="detail">
		<my-header fixed :title='title' v-goTop:click='true'>
			<a slot="left" class="back-black" @click.stop='$router.go(-1)'></a>
			<!--<a slot="right" class="menu" @click.stop='$refs.share.toggle()'></a>-->
		</my-header>
		<div class="content" style="overflow: auto;-webkit-overflow-scrolling: touch">
			<div class="title" style="padding-top: 1.335rem;">
				<p>{{newsTitle}}</p>
			</div>
			<div v-html="content">
			</div>
		</div>

	</div>
</template>
<script>
	import { mapState, mapMutations, mapActions } from 'vuex'
	export default {
		name: 'detail',
		data() {
			return {
				title: '知世', // header的title
				loading: 'loading',
				error: false,
				url: '',
				content: '',
				newsTitle: '',

			}
		},
		computed: {
			...mapState('index', [
				'indexColumn'
			]),
			...mapState('detail', [
				'location'
			])
		},
		watch: {
			$route(val) {
				if(val.query.id) {
					this.init() // 自己调用自己，重新初始化
				}
			}
		},
		methods: {
			...mapMutations('detail', [
				'set_location'
			]),
			...mapActions('index', [
				'get_indexColumn_data'
			]),
			async init() {
				this.url = this.$route.query.url
				$('#detail .container').scrollTop(0) // 初始化返回顶部
				this.get_Article()
			},
			// 获取文章数据
			get_Article() {
				$.ajax({
					'type': 'get',
					'url': 'http://api.url2io.com/article',
					'dataType': 'jsonp',
					'data': {
						'token': '7RqmnyM2TGqhoIEKr1bkNA', // 开发者 token, 注册后可得
						'url': this.url, // 要提取正文网页的网址
						'fields': 'content', // 可选字段
					},
					'success': (data) => {
						this.newsTitle = data.title
						this.content = data.content
					},
				});
			},
			handleLocaltion(type) {
				if(type === 'get') {
					this.$nextTick(() => {
						if(this.location && this.location[this.id]) {
							$('#detail .container').scrollTop(this.location[this.id])
						}
					})
				} else if(type === 'set') {
					this.location[this.id] = $('#detail .container').scrollTop()
					this.set_location(this.location)
				}
			}
		},
		mounted() {
			this.init()
		},
		// 离开路由钩子
		beforeRouteLeave(to, from, next) {
			this.handleLocaltion('set')
			next() // 一定要调用next() 不然路由不会跳转
		},
		// 重复调用组件的钩子
		beforeRouteUpdate(to, from, next) {
			this.handleLocaltion('set')
			next()
		}
	}
</script>
<style lang='stylus'>
	#detail {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #f8f8f8;
		header {
			background: #fff;
			color: #333;
			font-size: 16px;
			.menu {
				background: url(../../assets/img/menu.png) no-repeat center center;
				background-size: 20px;
			}
		}
		.downLoad {
			display: block;
			width: 100%;
			height: 36px;
			line-height: 36px;
			background: #00939c;
			color: #fff;
			text-align: center;
			font-size: 14px;
			text-decoration: none;
		}
		.comment-hot {
			padding: 0.533rem 0 0;
			background: #f9f9f9;
			.comment_title {
				margin-bottom: 0.4rem;
				position: relative;
				.Line {
					position: relative;
					width: 2.8rem;
					margin: 0 auto;
					text-align: center &:before {
						content: "";
						border-top: 2px solid #aaa;
						display: block;
						position: absolute;
						width: 0.4rem;
						top: 50%;
						left: 0
					}
					&:after {
						content: "";
						border-top: 2px solid #aaa;
						display: block;
						position: absolute;
						width: 0.4rem;
						top: 50%;
						right: 0
					}
				}
				.title {
					font-size: 14px;
					font-weight: bold;
				}
			}
			.comment_more {
				display: block;
				text-align: center;
				font-size: 12px;
				color: #00939c;
				padding: 0.533rem 0;
				vertical-align: middle;
				i {
					display: inline-block;
					vertical-align: middle;
					margin-left: 2px;
					margin-top: -2px;
					padding: 0 2px;
					font-size: 12px;
				}
			}
		}
		.bg_line {
			height: 0.1333rem;
			background: #eee;
		}
	}
	
	#detail span {
		font-size: 12px;
	}
	#detail #content{
		margin-top: 0.2rem;
		font-size: 18px;
	}
</style>