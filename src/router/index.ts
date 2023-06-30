// Composables
import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const routes = [
  {
    path: "/user",
    component: () => import("@/components/layouts/Default.vue"),
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
      {
        path: "Store",
        component: defineAsyncComponent(
          () => import("@/views/user/PointStore.vue")
        ),
      },
    ],
  },

  {
    path: "",
    redirect: "/hero",
    component: defineAsyncComponent(() => import("@/views/hero/HomePage.vue")),
    children: [
      {
        path: "/hero",
        component: defineAsyncComponent(
          () => import("@/views/hero/HeroSection.vue")
        ),
      },
      {
        path: "/aboutus",
        component: defineAsyncComponent(
          () => import("@/views/hero/AboutUsPage.vue")
        ),
      },
      {
        path: "/pricing",
        component: defineAsyncComponent(
          () => import("@/views/hero/Pricing.vue")
        ),
      },
      {
        path: "/login",
        component: defineAsyncComponent(() => import("@/views/hero/LogIn.vue")),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
