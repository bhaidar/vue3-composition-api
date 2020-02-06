import Vue from 'vue';
import { Server } from 'miragejs';
import App from './App.vue';
import router from './router';

/* eslint-disable no-new */
new Server({

  routes() {
    this.pretender.get('/*assets', this.pretender.passthrough);
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
