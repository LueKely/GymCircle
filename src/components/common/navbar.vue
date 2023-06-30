<template>
  <v-sheet
    width="100%"
    height="60px"
    color="black"
    class="d-flex align-center justify-space-between"
  >
    <!-- title -->
    <div class="d-flex align-center justify-center">
      <v-img width="50" src="/icon.png"></v-img>
      <h2>Gym Circle</h2>
    </div>

    <v-list
      color="white"
      nav
      class="d-flex bg-black align-center justify-center"
      height="60px"
      density="compact"
    >
      <v-list-item
        class="mx-1"
        title="Home"
        :to="routerName('hero')"
      ></v-list-item>
      <v-list-item
        class="mx-1"
        title="About Us"
        :to="routerName('aboutus')"
      ></v-list-item>
      <v-list-item
        class="mx-1"
        title="Pricing"
        :to="routerName('pricing')"
      ></v-list-item>
      <v-list-item
        class="mx-1"
        title="Log In"
        :to="routerName('login')"
      ></v-list-item>
    </v-list>
  </v-sheet>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const routerName = ref((input: string) => {
  return `/${input}`;
});
</script>
