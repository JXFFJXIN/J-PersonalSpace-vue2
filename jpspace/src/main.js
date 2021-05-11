import "./mock"; // 模拟数据
import Vue from 'vue'
import App from './App.vue';
import "@/styles/global.less";
import router from "@/router";
import {showMessage} from "@/utils";
import vLoading from "@/directives/loading"
import eventBus from "@/utils/eventBus";
import vLazy from "@/directives/lazy";
import store from "@/store";

Vue.config.productionTip = false;
Vue.prototype.$bus = eventBus;
Vue.prototype.$showmessage = showMessage;
Vue.directive("loading",vLoading);
Vue.directive("lazy",vLazy);
store.dispatch("setting/fetchSetting");

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
