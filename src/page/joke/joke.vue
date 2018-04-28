<template>
	<div id="joke">
        <!-- 头部 -->
        <joke-header/>
        <!-- 内容区域 -->
        
        <swiper-container/>
        <!-- 底部 -->
        <!--<index-footer/>-->
        <!-- 子页面视图 -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
	import jokeHeader from './components/joke_header';
	import swiperContainer from './components/swiperContainer'
	export default {
    components: { jokeHeader,swiperContainer},
    methods: {
//      ...mapActions('index', [
//          'get_indexColumn_data',
//      ])
    },
    created() {
//      this.get_indexColumn_data()
    }
}
</script>

<style>
	#joke {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>