import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

Router.prototype.go = function() {
    this.isBack = true
    window.history.go(-1)
}

// 路由懒加载
const index = () => import('@/page/index/index')
const detail = () => import('@/page/detail/detail')
const joke = () => import('@/page/joke/joke')
const Comic = () => import('@/page/Comic/Comic')

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/index',
            component: App,
            children: [
                // index页面
                {
                    name: 'index',
                    path: '/index',
                    component: index,
                },
                // detail页面
                {
                    name: 'detail',
                    path: '/detail',
                    component: detail
                },
                // joke页面
                {
                    name: 'joke',
                    path: '/joke',
                    component: joke
                },
                                // joke页面
                {
                    name: 'Comic',
                    path: '/Comic',
                    component: Comic
                },
            ]
        }
    ]
})
