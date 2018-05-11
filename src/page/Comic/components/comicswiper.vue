<template>
	<swiper :options="swiperOption" id="swiper-box" ref="mySwiper">
        <swiper-slide v-for='(item,comic) in comicstate' :key='comic'>
        	{{item.classname}}
        </swiper-slide>
    </swiper>
</template>

<script>
	import { mapState, mapGetters, mapMutations } from 'vuex'
	export default{
		data() {
	        return {
	            swiperOption: {
	                notNextTick: true,
	                onSlideChangeStart: this.slideChangeCallBack,
	                onSliderMove: this.slideMoveCallBack,
	                onTouchEnd: this.touchEndCallBack
	            }
	        }
    	},
    	computed: {
        ...mapState('comic', [
            'comicactive',
            'comicstate'
        	]),
        ...mapGetters('comic', [
            'activeMeta'
        ])
    	},
	    watch: {
        comicactive(val) {
            this.slideTo(300)
        }
    	},
    	methods: {
        ...mapMutations('comic', [
            'set_comicactive',
            'set_comicSwiper'
        ]),
        slideTo(second) {
        	console.log(JSON.stringify(this.activeMeta) + "11111111111111")
            this.$refs.mySwiper.swiper.slideTo(this.activeMeta.comic, second, true) // 让swiper滚动到joke位置
        },
        slideChangeCallBack(swiper) {
            let comic = swiper.activeIndex;
            console.log(this)
            this.set_comicactive(this.comicstate[comic].classpath) // 滚动完swiper需要改变vuex里面的jokeActive，这是为了与栏目联动
        },
        // 移动的时候设为true，这是为了移动时，不能下拉，我在mint-ui的loadmore代码里自定义了一个属性用于监听左右滑动，然后禁止loadmore组件的触发
        slideMoveCallBack() {
            this.set_comicSwiper(true)
        },
        // 移动结束设为false，这是为了移动结束时，可以下拉，我在mint-ui的loadmore代码里自定义了一个属性用于监听左右滑动，然后禁止loadmore组件的触发
        touchEndCallBack() {
            this.set_comicSwiper(false)
        }
        }
	}
</script>

<style lang="stylus">
	#swiper-box{
		width: 100%;
		height: calc(100% - 88px - 1.375rem);
		z-index: 0;
	    background: #fff;
	    margin-top: 44px;
	    overflow: auto;
	}
</style>