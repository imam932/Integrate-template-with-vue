// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BootstrapSocial from 'bootstrap-social';
import FlagIcon from 'vue-flag-icon'

import Vue from 'vue'
import App from './App'
import router from './router'

// assets css
import './assets/css/style.css';
import './assets/css/components.css';

Vue.use([BootstrapSocial, FlagIcon]);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
