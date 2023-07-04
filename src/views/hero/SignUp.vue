<template>
  <div class="w-100 h-100 bg-red d-flex justify-space-between align-center">
    <v-sheet width="45%" height="100%"> </v-sheet>
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
