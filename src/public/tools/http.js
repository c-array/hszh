// 配置API接口地址
const root = '/api';

// 引用axios
import axios from 'axios';

// 自定义判断元素类型JS
const toType = (obj => {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
});

/*
 接口处理函数
 这个函数每个项目都是不一样的，我现在调整的是适用于
 https://cnodejs.org/api/v1 的接口，如果是其他接口
 需要根据接口的参数进行调整。参考说明文档地址：
 https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
 主要是，不同的接口的成功标识和失败提示是不一致的。
 另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
 */
const apiAxios = ((method, url, type, data, success, failure) => {
    let headers = '';
    if(type == 'json'){
        headers = {
            'Content-type':'application/json'
        }
    }else{
        headers = {
            'Content-type':'application/x-www-form-urlencoded'
        }
    }
    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? data : null,
        params: method === 'GET' || method === 'DELETE' ? data : null,
        baseURL: root,
        headers: headers,
        withCredentials: false
    }).then(res => {
        if (res.data) {
            if (parseInt(res.data.status) === 0 && success) {
                success(res.data.result);
            }else{
                failure(res.data.message,null);
            }
        } else {
            if (failure) {
                failure('失败！',null);
            } else {
                window.alert('error: ' + JSON.stringify(res.data));
            }
        }
    }).catch(err => {
        if (err) {
            console.log(err);
            failure('失败！',err);
            return;
        }
    })
});

// 返回在vue模板中的调用接口
export default {
    get: function (config) {
        return apiAxios('GET', config.url, config.type, config.data, config.success, config.error)
    },
    post: function (config) {
        return apiAxios('POST', config.url, config.type, config.data, config.success, config.error)
    },
    put: function (config) {
        return apiAxios('PUT', config.url, config.type, config.data, config.success, config.error)
    },
    delete: function (config) {
        return apiAxios('DELETE', config.url, config.type, config.data, config.success, config.error)
    }
};
