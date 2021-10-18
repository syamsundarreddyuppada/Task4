import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Checkpage from "../views/Checkpage.vue";
import Account from '../views/Account.vue';
import Control from '../views/Control.vue'
import Transactions from '../views/Transactions.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/checkpage",
    name: "checkpage",
    component: Checkpage,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
  },
  {
    path: "/control",
    name: "control",
    component: Control,
  },
  {
    path: "/transactions",
    name: "transactions",
    component: Transactions,
  },
  {
    path: "/unauthorise",
    alias:"*",
    name: "denied",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
