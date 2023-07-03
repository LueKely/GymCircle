<template>
  <div class="w-100 h-100 bg-red">
    <v-sheet
      width="45%"
      height="100%"
      class="d-flex justify-center align-center"
    >
      <LogInForm></LogInForm>
    </v-sheet>
    <v-sheet></v-sheet>
  </div>
</template>
<script setup lang="ts">
import LogInForm from "@/components/Logins/LogInForm.vue";
</script>
