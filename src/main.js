// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
<<<<<<< HEAD
Vue.use(require('vue-prevent-parent-scroll'))
=======

>>>>>>> 5c77a3999eb9e84a9b2129ccb2ec7f24a26026c6
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
});
