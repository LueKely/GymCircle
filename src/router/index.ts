// Composables
import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const routes = [
  {
    path: "/user",
    component: defineAsyncComponent(
      () => import("@/components/layouts/Default.vue")
    ),
    children: [
      {
        path: "profile",
        component: defineAsyncComponent(
          () => import("@/views/user/UserInfo.vue")
        ),
      },
      {
        path: "edit",
        component: defineAsyncComponent(
          () => import("@/views/user/EditInfo.vue")
        ),
      },
      {
        path: "subscription",
        component: defineAsyncComponent(
          () => import("@/views/user/Subscription.vue")
        ),
      },
      {
        path: "history",
        component: defineAsyncComponent(
          () => import("@/views/user/TransactionHistory.vue")
        ),
      },
    ],
  },
  {
    path: "",
    component: defineAsyncComponent(() => import("@/views/hero/HomePage.vue")),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
