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
import { 
  Message,
  MessageBox,
  Dialog,
  Button,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Pagination,
  Form,
  FormItem,
  Input 
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$MessageBox = MessageBox;
Vue.prototype.$Message = Message;
Vue.use(Dialog);
Vue.use(Button);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

//引入图表组件
import 'v-charts/lib/style.css';
import VeHistogram from 'v-charts/lib/histogram';
import VeLine from 'v-charts/lib/line';
import VePie from 'v-charts/lib/pie';
import VeRing from 'v-charts/lib/ring';
import VeMap from 'v-charts/lib/map';
import 'echarts/lib/component/title';
Vue.component(VeHistogram.name,VeHistogram);
Vue.component(VePie.name, VePie);
Vue.component(VeLine.name, VeLine);
Vue.component(VeRing.name, VeRing);
Vue.component(VeMap.name, VeMap);

//引入模拟数据接口
require('./public/mock-data/api');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
