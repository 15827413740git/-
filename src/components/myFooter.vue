<template>
    <div class="myFooter" >
        
            <ul >
            	<li v-for="item in tabbar">
            		<router-link :to="item.path">
            			<img :src="item.icoImg_src"></img>
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
				icoImg_src:'../../src/assets/img/xinwen_ico.png'
			},
			{
				title:'笑话',
				path:'/joke',
				icoImg_src:'../../src/assets/img/xiaohua_ico.png'
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
					img{
						width: 0.8rem;
						height: 0.8rem;
					}
				}
				.router-link-active{
					background: #C8C8CD;
				}
			}
		
	}
	
}
</style>
