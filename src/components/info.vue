<template>
    <div class='news_info'>
        <span class='news_from' v-if='json.author_name'>{{'来源:'+json.author_name}}</span>
        <span class='news_from' v-if='json.date'>{{'时间:'+json.date}}</span>
        <span class='news_from' v-if='json.updatetime'>{{'时间:'+json.updatetime}}</span>
        <span class='news_from' >{{100|watchFilter}}阅读</span>
    </div>
</template>
<script>
export default {
    props: ['json'],
    filters: {
        // 阅读量不够，自己加点戏哈哈哈
        watchFilter(val) {
            let randomVal = Math.floor(Math.random() * 101 + 100)   // 取100 ~ 200的随机数
            if (val) {
                return randomVal + parseInt(val)
            } else {
                return ''
            }
        }
    }
}
</script>
<style lang='stylus'>
.news_info {
    position: relative;
    left: -12.5%;
    width: 125%;
    white-space: normal;
    color: #999;
    margin-top: 6px;
    overflow: hidden;
    font-size: x-small;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    span {
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
    }
    
}
</style>
