import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import "./imports";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faPhone, faPhoneSquare, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
