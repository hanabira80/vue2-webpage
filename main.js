import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import jQuery from 'jquery';
// global.$ = jQuery;
// import jQuery from 'jquery';
// global.$ = jQuery;

// import JQuery from 'jquery';
// window.$ = JQuery;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
