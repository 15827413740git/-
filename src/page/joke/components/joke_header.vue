<template>
    <div id="jokeHeader">
        <!-- 头部 -->
        <header>
            <div class="top_bar">
                <div class="abs_l"></div>
                <div class="abs_m">
                    <a class='title' @click.stop="goTop">笑话</a>
                </div>
                <!--<div class="abs_r">
                    <a class='search_btn' slot='right' @click.stop="$router.push('/search')"></a>
                </div>-->
            </div>
        </header>
        <nav>
            <div class="nav_ul">
                <a href='javascript:;' v-for="(item,index) in jokeColumn" :class='{active: jokeActive == item.classpath}'   @click.stop="navClick(item.classpath)" :key="index">{{item.classname}}</a>
            </div>
        </nav>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
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
        jokeActive() {
        }
    },
    methods: {
        ...mapMutations('joke', [
            'set_jokeActive'
        ]),
        
        navClick(type) {
            this.set_jokeActive(type) // 点击栏目需要改变vuex内的indexActive值，这是为了与swiper联动
        },
        goTop() {
            $(`#joke .${this.jokeActive}`).animate({scrollTop: 0})
        }
    },
    activated() {
    }
}
</script>
<style lang='stylus'>
#jokeHeader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    overflow: hidden;
    header {
        display: block;
        position: relative;
        overflow: hidden;
        background-color:rgb(200,8,82);
        color: #fff;
        &.fixed{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
        }
        .title {
            background-size: 145px;
        }
        .search_btn {
            background-size: 24px;
        }
        .top_bar {
            position: relative;
            height: 44px;
            line-height: 44px;
            user-select:none;
            a{
                display: block;
                width: 100%;
                height: 100%;
                color: inherit;
                font-size: inherit;
                font-weight: inherit;
            }
            .abs_l,.abs_m,.abs_r {
                position: absolute;
                top: 0;
                width: 44px;
                height: 100%;
                font-size: inherit;
                color: inherit;
                text-align: center
            }
            .abs_l {
                left: 0;
                z-index: 1000;
            }
            .abs_m {
                width: 100%;
                font-weight: 700;
                z-index: 999;
            }
            .abs_r {
                right: 0;
                z-index: 1000;
            }
        }
    }
    nav {
        position: relative;
        height: 44px;
        line-height: 44px;
        background-color: #f4f5f6;
        border-bottom: 1px solid #ddd;
        .nav_ul {
        	display: flex;
        	justify-content: center;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            white-space: nowrap;
            font-size: 0;
            &::-webkit-scrollbar {
                width: 0px;
                height: 0px;
            }
            a {
            	flex: 1;
            	text-align: center;
                display: inline-block;
                padding-left: 10px;
                padding-right: 10px;
                height: 44px;
                line-height: 44px;
                font-size: 17px;
                color: #505050;
                white-space: nowrap;
                -webkit-tap-highlight-color: rgba(0, 0, 0, .3);
                text-decoration: none;
                &.active {
                    color:rgb(200,8,82);
                    border-bottom: 2px solid rgb(200,8,82);
                }
            }
        }
        .nav_menu {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            .shadow {
                position: absolute;
                width: 10px;
                height: 100%;
                left: -10px;
                background-size: contain;
                background-color: rgba(244, 245, 246, .3);
            }
            .more_btn {
                display: block;
                width: 40px;
                height: 100%;
                background-size: 20px;
                background-color: #f4f5f6;
            }
        }
    }
}
</style>
<style>
</style>
