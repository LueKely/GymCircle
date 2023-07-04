<template>
  <Info>
    <template #header>
      <Welcome></Welcome>
    </template>
    <template #info><UserInformation></UserInformation> </template>
    <template #tier>
      <TierCard></TierCard>
    </template>
    <template #bulletin> <BulletinBoard></BulletinBoard></template>
  </Info>
</template>
<script setup lang="ts">
import UserInformation from "@/components/user-info/UserInformation.vue";
import Info from "@/components/layouts/Info.vue";
import Welcome from "@/components/user-info/Welcome.vue";
import TierCard from "@/components/user-info/TierCard.vue";
import BulletinBoard from "@/components/user-info/BulletinBoard.vue";

import { useLoginStore } from "@/store/LoginStore";
import { onMounted } from "vue";
import Session from "@/composables/Session";
import { User } from "@/store/UserStore";
import { useUserStore } from "@/store/UserStore";
const store = useLoginStore();
const userStore = useUserStore();

import { useGetData } from "@/composables/GetRequest";

const { data, error, fetchData } = useGetData(
  "http://localhost:3030/user",
  Session.getSessionKey("key")
);

onMounted(async () => {
  await fetchData();

  // userStore.info.Age = await data.value.age;
  // distributes all the fetched data to all the components
  await Object.entries(userStore.info).forEach(([key]) => {
    userStore.info[key] = data.value[key];
  });
});
</script>
