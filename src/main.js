import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store';

Vue.config.productionTip = false;

//引入公用方法
import { formatDate, copyObj } from './public/tools/common';
import http from './public/tools/http';
Vue.prototype.$http = http;
Vue.prototype.$formatDate = formatDate;
Vue.prototype.$copyObj = copyObj;

//引入elementui组件库
import { Message,MessageBox } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$MessageBox = MessageBox;
Vue.prototype.$Message = Message;

//引入图表组件
import 'v-charts/lib/style.css';
import VeHistogram from 'v-charts/lib/histogram';
import VeLine from 'v-charts/lib/line';
import VePie from 'v-charts/lib/pie';
import 'echarts/lib/component/title';
Vue.component(VeHistogram.name,VeHistogram);
Vue.component(VePie.name, VePie);
Vue.component(VeLine.name, VeLine);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
