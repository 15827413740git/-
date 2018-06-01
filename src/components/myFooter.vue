<template>
    <div class="myFooter" >
        
            <ul >
            	<li v-for="item in tabbar">
            		<router-link :to="item.path">
            			<!--<img :src="item.icoImg_src"></img>-->
            			<i :class="item.icoImg_src"></i>
            			<span class="titleval">{{item.title}}</span>
            		</router-link>
            	</li>
            </ul>
    </div>
</template>
<script>
export default {
	data(){
		return {
			tabbar:[
			{
				title:'新闻',
				path:'/index',
//				icoImg_src:'../../src/assets/img/xinwen_ico.png'
				icoImg_src:'iconfont icon-wendang'
			},
			{
				title:'笑话',
				path:'/joke',
//				icoImg_src:'../../src/assets/img/xiaohua_ico.png'
				icoImg_src:'iconfont icon-wode-line'
			},
			{
				title:'动漫',
				path:'/Comic',
//				icoImg_src:'../../src/assets/img/Comic.png'
				icoImg_src:'iconfont icon-dongman1'
			},
			{
				title:'视频',
				path:'/video',
//				icoImg_src:'../../src/assets/img/Comic.png'
				icoImg_src:'iconfont icon-bofang'
			},
			]
		}
	},
    props: {
        fixed: Boolean,
        title: String
    }
}
</script>
<style lang='stylus'>
.myFooter {
	margin: 0;
	width: 100%;
	position: fixed;
	bottom: 0;
	z-index: 1000;
	height: 1.375rem;
		ul{
			height: 100%;
			display: flex;
			li{
				height: 100%;
				display:flex ;
				flex-direction: column;
				justify-content: center;
				flex: 1;
				text-align: center;
				a {
					height: 100%;
					display: flex;
					flex-direction: column;
				    justify-content: center;
				    align-items: center;
				    background: #FFFFFF;
					i{
						/*width: 0.6rem;
						height: 0.6rem;*/
						font-size: 23px;
					}
					.titleval{
						font-size: 15px;
					}
				}
				.router-link-active{
					background:#c80852;
					color: #fff;
				}
			}
		
	}
	
}
</style>
