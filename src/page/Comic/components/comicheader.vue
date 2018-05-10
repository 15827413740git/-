<template>
	<div id="comicheader">
		<header class="topcom">
			<div class="top_bar">
				<div class="abs_l"></div>
                <div class="abs_m">
                    <a class='title'>动漫</a>
                </div>
                <div class="abs_r">
                    <a class="iconfont icon-search"></a>
                    <a class="iconfont icon-gengduo1"></a>
                </div>
			</div>
		</header>
		<section class="tabtype">
			<ul>
				<li v-for="(item,index) in comicstate" 
					:class='{active: comicactive == item.classpath}' 
					@click.stop="tabactive(item.classpath)" 
					:key="index">{{item.classname}}</li>
				<!--<li>人气</li>
				<li>收藏</li>-->
			</ul>
		</section>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
	export default {
		computed: {
          ...mapState('comic', [
            'comicactive',
            'comicstate'
        	]),
    	},
	    methods: {
	    	        ...mapMutations('comic', [
            'set_comicactive'
        ]),
	        tabactive(type) {
	            this.set_comicactive(type) 
	        },
    }
	}
</script>

<style lang='stylus'>
#comicheader{
	width: 100%;
	height: 44px;
	background: #c80852;
	header{
		width: 100%;
		height: 100%;
		.top_bar{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			position: relative;
			.abs_m {
				flex: 1;
				text-align: center;
				.title{
					color: #fff;
					font-size: 22px;
					font-family: "sans-serif";
				}
			}
			.abs_r{
				position: absolute;
				right: 0;
				padding-right: 10px;
				a{
					/*color: #FFB90F;*/
					color: #fff;
					font-size: 26px;
				}
			}
		}
	}
	.tabtype{
		width: 100%;
		height: 100%;
		ul{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			li{
				flex: 0.333333333;
				text-align: center;
				height: 100%;
				line-height: 44px;
				color: #888888;
				font-size: 18px;
			}
			.active{
				color: #000;
				border-bottom: 1px solid #FFB90F;
				box-sizing: border-box;
			}
		}
	}
}
</style>