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
import UserInformation from "@/components/common/UserInformation.vue";
import Info from "@/components/layouts/Info.vue";
import Welcome from "@/components/common/Welcome.vue";
import TierCard from "@/components/common/TierCard.vue";
import BulletinBoard from "@/components/common/BulletinBoard.vue";
</script>
