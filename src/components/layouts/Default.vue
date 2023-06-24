<template>
  <!-- side bar -->
  <SideBar></SideBar>
  <!-- main content -->
  <v-main class="bg-grey-lighten-4 d-flex align-center justify-center">
    <router-view></router-view>
  </v-main>
</template>

<style scoped></style>

<script setup lang="ts">
import SideBar from "@/components/common/SideBar.vue";
</script>
