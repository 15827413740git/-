import cache from '@/utils/cache'
import { request } from '@/utils/request'
export default {
    namespaced: true,
    state: {
        historyArticle: {},     // 文章历史数据
        location: {}            // 储存页面滚动条位置
    },
    getters: {
    },
    mutations: {
        set_historyArticle(state, val) {
            state.historyArticle = val
            cache.setSession('history_Article', val)
        },
        set_location(state, val) {
            state.location = val
        }
    },
    actions: {
        
    }
}
