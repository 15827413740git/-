import cache from '@/utils/cache'
import { request } from '@/utils/request'
import jokeColumn from './menu_joke.js'
export default {
    namespaced: true,
    state: {
        jokeActive: 'news_content',          // active的栏目
        jokePage: { 'news_content': 1,'news_img':1, },       // 各个栏目page的对象
        jokeLocation: { 'news_content': 0, },   // 各个栏目location的对象
        // 栏目数据
        jokeColumn:jokeColumn,
        currentContent: '',                     // 当前栏目的缓存数据，为了刷新时不用再次请求
        jokeSwiper: false                      // 页面是否在滑动
    },
    getters: {
        activeMeta: state => {
            // 当前active的栏目的joke、classid、page、location
            let joke = state.jokeColumn.findIndex(obj => obj.classpath === state.jokeActive)
            let classid = state.jokeColumn[joke].classid
            let page = state.jokePage[state.jokeActive]
            let location = state.jokeLocation[state.jokeActive]
            return { joke, classid, page, location }
        }
    },
    mutations: {
        set_jokeActive(state, val) {
            state.jokeActive = val
            cache.setSession('joke_Active', val)
        },
        set_jokePage(state, obj) {
            state.jokePage = obj
            cache.setSession('joke_Page', obj)
        },
        set_jokeLocation(state, obj) {
            state.jokeLocation = obj
            cache.setSession('joke_Location', obj)
        },
        set_jokeColumn(state, arr) {
            state.jokeColumn = arr
            cache.setSession('joke_Column', arr)
        },
        set_currentContent(state, val) {
            state.currentContent = val
            cache.setSession(`${state.jokeActive}_json`, val)
        },
        set_jokeSwiper(state, val) {
            state.jokeSwiper = val
        }
    },
    actions: {
        // 获取active栏目缓存
        get_jokeActive_cache({ commit, dispatch }) {
            const data = cache.getSession('joke_Active')
            if (data) {
                commit('set_jokeActive', data)
            } else {
                commit('set_jokeActive', 'news_content')
            }
        },

        // 获取page缓存
        get_jokePage_cache({ commit }, jokeColumn) {
            const data = JSON.parse(cache.getSession('joke_Page'))
            if (data) {
                commit('set_jokePage', data)
            } else {
                if (jokeColumn) {
                    let pageObj = {}
                    jokeColumn.forEach(item => {
                        pageObj[item.classpath] = 1
                    })
                    commit('set_jokePage', pageObj)
                }
            }
        },

        // 获取location缓存
        get_jokeLocation_cache({ commit }, jokeColumn) {
            const data = JSON.parse(cache.getSession('joke_Location'))
            if (data) {
                commit('set_jokeLocation', data)
            } else {
                if (jokeColumn) {
                    let locationObj = {}
                    jokeColumn.forEach(item => {
                        locationObj[item.classpath] = 0
                    })
                    commit('set_jokeLocation', locationObj)
                }
            }
        },

        // 获取列表数据缓存
        get_listItem_cache({ commit, state }, activeType) {
            let data = JSON.parse(cache.getSession(`${state.jokeActive}_json`))
            return data
        },

        // 获取栏目数据
        async get_jokeColumn_data({commit, state, dispatch}) {
            
            
                let res = [...state.jokeColumn]
            
            commit('set_jokeColumn', res)
            dispatch('get_jokePage_cache', res)
            dispatch('get_jokeLocation_cache', res)
            dispatch('get_jokeActive_cache')
            return res
        },
        // 获取文章列表数据
        async get_stick_data({ commit, getters },page) {
        	console.log(page)
            let params = {
            	'key':'e018e7eba4126e4a1621edf7a917598a',
                'page': page,
                'pagesize':20,
                
            }
            console.log('joke_'+getters.activeMeta.classid)
            let res = await request('get','joke_'+getters.activeMeta.classid,params)
            return res
        },
    }
}
