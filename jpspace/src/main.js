import "./mock"; // 模拟数据
import Vue from 'vue'
import App from './App.vue';
import "./styles/global.less";
import router from "./router";
import {showMessage} from "./utils";

Vue.config.productionTip = false;

Vue.prototype.$showmessage = showMessage;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
