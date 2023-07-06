<template>
  <v-sheet
    width="100dw"
    height="100%"
    class="d-flex align-center justify-space-between"
  >
    <v-sheet
      width="45%"
      height="100%"
      class="d-flex justify-center align-center"
    >
      <LogInForm></LogInForm>
    </v-sheet>
    <v-sheet
      width="55%"
      height="100%"
      class="d-flex justify-center align-center"
      ><v-img
        width="70%"
        height="100%"
        aspect-ratio="9/16"
        src="login.jpg"
        cover
      ></v-img
    ></v-sheet>
  </v-sheet>
</template>
<script setup lang="ts">
import LogInForm from "@/components/Logins/LogInForm.vue";
</script>
