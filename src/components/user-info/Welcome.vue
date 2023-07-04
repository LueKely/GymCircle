<template>
  <v-card
    height="50"
    width="97%"
    color="transparent"
    class="d-flex justify-start align-center elevation-0 mb-5"
  >
    <v-card-title class="text-h4"
      >👋 Welcome Back, {{ userStore.info.name }}
    </v-card-title>
  </v-card>
</template>
<script setup lang="ts">
import { useUserStore } from "@/store/UserStore";
const userStore = useUserStore();
</script>
