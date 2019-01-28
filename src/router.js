import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          name: "auth",
          component: () => import(/* webpackChunkName: "auth" */ "./views/Auth")
        },
        {
          path: "/login",
          name: "login",
          component: () => import(/* webpackChunkName: "login" */ "./views/Login")
        },
        {
          path: "/registration",
          name: "registration",
          component: () => import(/* webpackChunkName: "registration" */ "./views/Registration")
        }
      ]
    }
  ]
});
