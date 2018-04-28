// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// css
import '@/assets/css/reset.css'
import '@/assets/css/icon.css'
import '@/assets/css/transition.css'
import '@/assets/css/global.css'

// 第三方库
import MintUI, { MessageBox, Toast, Indicator } from 'mint-ui'     
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'       
import 'swiper/dist/css/swiper.css'

// 自定义组件
import myHeader from '@/components/myHeader'            
import myLoading from '@/components/loading'            
import myError from '@/components/error'                
import listInfo from '@/components/info'                
import indexListItem from '@/components/listItem_index'
import jokeListItem from '@/components/listItem_joke'
import popupMenu from '@/components/popupMenu'          

import '@/directives'                                   

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.$toast = Toast
Vue.prototype.$msgBox = MessageBox
Vue.prototype.$indicator = Indicator
Vue.use(VueAwesomeSwiper)

// 注册全局组件
Vue.component('my-header', myHeader)
Vue.component('my-loading', myLoading)
Vue.component('my-error', myError)
Vue.component('list-info', listInfo)
Vue.component('index-list-item', indexListItem)
Vue.component('joke-list-item', jokeListItem)
Vue.component('popup-menu', popupMenu)
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
