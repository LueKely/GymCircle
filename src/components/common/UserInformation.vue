<template>
  <v-card width="600" elevation="1" rounded="lg">
    <v-card-title>User Info</v-card-title>
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
import { ref } from "vue";

const lue = ref<any>([
  { title: "Name", subtitle: "lue", icon: "mdi-account" },
  { title: "Age", subtitle: 10, icon: "mdi-flower" },
  { title: "Email", subtitle: "sabu", icon: "mdi-email" },
  {
    title: "Address",
    subtitle: "0123 oasdk poop street",
    icon: "mdi-map-marker",
  },
]);
</script>
