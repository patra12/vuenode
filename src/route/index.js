import Vue from "vue";
import Router from "vue-router";

//importing comoponents
// import Home from "../components/home";
import Merger from "../components/body.vue";
import Homex from "../components/home.vue";
import Login from "../components/login.vue";
import Contact from "../components/contact.vue";
import Inner from "../components/inner.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Merger,
      children: [
        {
          path: "/",
          component: Homex,
          name: "Home"
        },
        {
          path: "/login",
          name: "Login",
          component: Login
        },
        {
          path: "/contact",
          name: "Contact",
          component: Contact
        },
        {
          path: "Product-Details",
          name: "Inner",
          component: Inner
        }
      ]
    }
  ]
});
