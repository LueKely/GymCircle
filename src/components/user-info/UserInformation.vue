<template>
  <v-card width="600" elevation="1" rounded="lg" class="mb-2">
    <v-card-title>🫵 User Info</v-card-title>
    <v-card-text>
      <v-list density="compact">
        <v-list-item
          v-for="(items, index) in lue"
          :key="index"
          :title="items.title"
          :subtitle="items.subtitle"
          :prepend-icon="items.icon"
          color="primary"
        ></v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from "@/store/UserStore";
const userStore = useUserStore();

const lue = computed(() => {
  return [
    { title: "Name", subtitle: userStore.info.name, icon: "mdi-account" },
    { title: "Age", subtitle: userStore.info.age, icon: "mdi-flower" },
    { title: "Email", subtitle: userStore.info.email, icon: "mdi-email" },
    {
      title: "Address",
      subtitle: userStore.info.address,
      icon: "mdi-map-marker",
    },
  ];
});
</script>
