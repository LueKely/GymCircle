// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/user",
    component: () => import("@/components/layouts/Default.vue"),
    children: [
      {
        path: "profile",
        component: () => import("@/views/user/UserInfo.vue"),
      },
      {
        path: "edit",
        component: () => import("@/views/user/EditInfo.vue"),
      },
      {
        path: "subscription",
        component: () => import("@/views/user/Subscription.vue"),
      },
    ],
  },
  { path: "", component: () => import("@/views/hero/HomePage.vue") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
