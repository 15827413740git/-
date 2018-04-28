import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
var axiosURL = {
	'index':'/api/toutiao/index',
	'joke_content':'/api/joke/content/text.php',
	'joke_img':'/api/joke/img/text.php',
	
}
Vue.prototype.$http = axios
export var request = async(type = 'POST',name = '', data = {}) => {
    let result
    type = type.toUpperCase()
    if (type === 'GET') {
        await axios.get(axiosURL[name], { params: data })
        .then(res => {
            result = res.data
        })
    } else if (type === 'POST') {
        await axios.post(axiosURL[name], qs.stringify(data))
        .then(res => {
            result = res.data
        })
    }
    return result
}
