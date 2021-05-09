import "./mock"; // 模拟数据
import Vue from 'vue'
import App from './App.vue';
import "./styles/global.less";
import router from "./router";
import {showMessage} from "./utils";
import vLoading from "./directives/loading"
import eventBus from "@/utils/eventBus";

Vue.config.productionTip = false;
Vue.prototype.$bus = eventBus;
Vue.prototype.$showmessage = showMessage;
Vue.directive("loading",vLoading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
