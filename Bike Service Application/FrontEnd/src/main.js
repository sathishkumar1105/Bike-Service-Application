import Vue from "vue";
import App from "./App.vue";
import router from "./components/router";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
