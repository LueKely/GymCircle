<template>
  <div class="w-100 h-100 d-flex justify-space-between align-center">
    <v-sheet
      width="45%"
      height="100%"
      class="d-flex align-center justify-center"
    >
      <v-card
        rounded="xl"
        width="70%"
        height="90%"
        color="black"
        class="pa-10 d-flex flex-column align-center justify-space-between"
      >
        <div>
          <h1 class="text-h2 font-weight-bold">Your Journey Begins Now.</h1>
          <div class="font-weight-light text-h4 mt-10">
            Discover a whole new version of you and explore new possibilites
          </div>
        </div>

        <v-sheet
          width="100%"
          height="200px"
          color="transparent"
          class="d-flex align-center justify-center"
        >
          <v-img width="200px" height="200px" src="/icon.png" cla></v-img
        ></v-sheet>
      </v-card>
    </v-sheet>
    <v-sheet
      width="45%"
      height="100%"
      class="d-flex justify-start align-center pa-2"
    >
      <SignUpForm></SignUpForm
    ></v-sheet>
  </div>
</template>

<script setup lang="ts">
import SignUpForm from "@/components/SignUp/SignUpForm.vue";
</script>
