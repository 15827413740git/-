import cache from '@/utils/cache'
import comicstate from './comic_index.js'
export default{
	namespaced: true,
	state:{
		comicstate:comicstate,
		comicactive: 'news_gengxin',          // active的栏目
	},
    getters: {
        activeMeta: state => {
            // 当前active的栏目的joke、classid、page、location
            let comic = state.comicstate.findIndex(obj => obj.classpath === state.comicactive)
            return {comic}
        }
    },
    mutations: {
    set_comicactive(state, val) {
        state.comicactive = val
        cache.setSession('comicactive', val)
    },
    set_comicstate(state, arr) {
        state.comicstate = arr
        cache.setSession('comicstate', arr)
    },
    set_comicSwiper(state, val) {
        state.comicstate = val
    }
	},
}
