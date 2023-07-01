// Composables
import { createRouter, createWebHistory } from "vue-router";
import LogIn from "@/views/hero/LogIn.vue";
import Pricing from "@/views/hero/Pricing.vue";
import SignUp from "@/views/hero/SignUp.vue";
import HomePage from "@/views/hero/HomePage.vue";
import AboutUsPage from "@/views/hero/AboutUsPage.vue";
import HeroSectionVue from "@/views/hero/HeroSection.vue";
import PointStoreVue from "@/views/user/PointStore.vue";
import TransactionHistoryVue from "@/views/user/TransactionHistory.vue";
import SubscriptionVue from "@/views/user/Subscription.vue";
import EditInfoVue from "@/views/user/EditInfo.vue";
import DefaultVue from "@/components/layouts/Default.vue";
import UserInfoVue from "@/views/user/UserInfo.vue";

const routes = [
  {
    path: "/user",
    redirect: "/user/profile",
    component: DefaultVue,
    children: [
      {
        path: "profile",
        component: UserInfoVue,
      },
      {
        path: "edit",
        component: EditInfoVue,
      },
      {
        path: "subscription",
        component: SubscriptionVue,
      },
      {
        path: "history",
        component: TransactionHistoryVue,
      },
      {
        path: "Store",
        component: PointStoreVue,
      },
    ],
  },

  {
    path: "",
    redirect: "/hero",
    component: HomePage,
    children: [
      {
        path: "/hero",
        component: HeroSectionVue,
      },
      {
        path: "/aboutus",
        component: AboutUsPage,
      },
      {
        path: "/pricing",
        component: Pricing,
      },
      {
        path: "/login",
        component: LogIn,
      },
      {
        path: "/signup",
        component: SignUp,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
