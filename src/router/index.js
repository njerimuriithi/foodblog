import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import( "../views/Contact.vue"),
  },
  {
    path: "/desserts",
    name: "Desserts",
    component: () =>
      import( "../views/Desserts.vue"),
  },
  {
    path: "/dinner",
    name: "Dinner",
    component: () =>
      import( "../views/Dinner.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
