import Vue from "vue";
import router from "./router";
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

new Vue({
  el: "#app",
  router,
  template: "<router-view/>"
});
