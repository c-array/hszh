import Vue from 'vue';
import formatDate from './formatDate';
import copyObj from './copyObj';
import http from './http';

const Plugin = {};
Plugin.install = (Vue,options) => {
    //获取日期插件
    Vue.$formatDate = formatDate; //绑定全局方法 
    Vue.prototype.$formatDate = formatDate; //绑定实例方法

    //深度copy对象插件
    Vue.$copyObj = copyObj; //绑定全局方法 
    Vue.prototype.$copyObj = copyObj; //绑定实例方法

    //HTTP请求插件
    Vue.$http = http; //绑定全局方法 
    Vue.prototype.$http = http; //绑定实例方法
}

export default Plugin;
