import Vue from 'vue'
import Vuex from 'vuex'
import index_module from './index/index'
import joke_module from './joke/index'
import detail_module from './detail/index'
import search_module from './search/index'
import comic_module from './comic/index'
import ccc from './video/index'
Vue.use(Vuex)
const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        index: index_module,
        joke:joke_module,
        detail: detail_module,
        search: search_module,
        comic:comic_module,
        video:ccc
    }
})
