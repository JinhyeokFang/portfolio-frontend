import Vue from 'vue';
import Router from 'vue-router';
import Index from '../spa/Index/Index';
import Work from '../spa/Work/Work';
import Detail from '../components/Detail';


import Vuesax from 'vuesax';

import 'vuesax/dist/vuesax.css';

Vue.use(Vuesax);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
    },
  ],
});
