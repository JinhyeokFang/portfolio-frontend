import Vue from 'vue';
import Router from 'vue-router';
import Index from '../spa/Index/Index';
import Work from '../spa/Work/Work';
import Search from '../spa/Search/Search';
import MoreView from '../components/MoreView';


import Vuesax from 'vuesax';

import 'vuesax/dist/vuesax.css';

Vue.use(Vuesax);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: MoreView,
    },
  ],
});
