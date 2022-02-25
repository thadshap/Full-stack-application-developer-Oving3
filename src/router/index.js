import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register";
import Welcome from "../views/Welcome"

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: '/register',
    name:'Register',
    component: Register
  },
  {
    path: '/welcome',
    name:'Welcome',
    component: Welcome
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
