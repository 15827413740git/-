<template>
    <swiper :options="swiperOption" id="swiper-box" ref="mySwiper">
        <swiper-slide v-for='(item,joke) in jokeColumn' :key='joke'>
            <pull-container :type='item.classpath'></pull-container>
        </swiper-slide>
    </swiper>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import pullContainer from './pullContainer'
export default {
    components: { pullContainer },
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
        ...mapState('joke', [
            'jokeActive',
            'jokeColumn'
        ]),
        ...mapGetters('joke', [
            'activeMeta'
        ])
    },
    watch: {
        jokeActive(val) {
            this.slideTo(300)
        }
    },
    methods: {
        ...mapMutations('joke', [
            'set_jokeActive',
            'set_jokeSwiper'
        ]),
        slideTo(second) {
            this.$refs.mySwiper.swiper.slideTo(this.activeMeta.joke, second, true) // 让swiper滚动到joke位置
        },
        slideChangeCallBack(swiper) {
            let joke = swiper.activeIndex
            this.set_jokeActive(this.jokeColumn[joke].classpath) // 滚动完swiper需要改变vuex里面的jokeActive，这是为了与栏目联动
        },
        // 移动的时候设为true，这是为了移动时，不能下拉，我在mint-ui的loadmore代码里自定义了一个属性用于监听左右滑动，然后禁止loadmore组件的触发
        slideMoveCallBack() {
            this.set_jokeSwiper(true)
        },
        // 移动结束设为false，这是为了移动结束时，可以下拉，我在mint-ui的loadmore代码里自定义了一个属性用于监听左右滑动，然后禁止loadmore组件的触发
        touchEndCallBack() {
            this.set_jokeSwiper(false)
        }
    },
    mounted() {
        this.slideTo(0)
    }
}
</script>
<style lang='stylus'>
#swiper-box {
    width: 100%;
    height: 100%;
    z-index: 0;
    background: #fff;
    padding-top: 80px;
}
</style>
