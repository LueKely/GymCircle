<template>
  <v-sheet
    width="100dvw"
    height="90dvh"
    class="pa-5 d-flex justify-center align-center"
  >
    <!-- flavour text -->
    <v-sheet
      width="45%"
      height="70%"
      class="d-flex flex-column justify-center align-start"
    >
      <div class="text-h6 mb-5">
        <h1 class="mb-2">Unlock Your Potential.</h1>
        <h1>Embrace Gym Circle.</h1>
      </div>

      <div class="w-75 text-h5 mb-5">
        <p>
          Welcome to Gym Circle, where fitness dreams become reality! Join us to
          unlock your full potential and experience a vibrant community
          dedicated to achieving extraordinary results. Get ready to thrive,
          transform, and conquer your goals with us!
        </p>
      </div>
      <v-btn rounded="xl" color="black" @click="push"> Login/Sign up </v-btn>
    </v-sheet>
    <!-- image -->
    <v-sheet
      width="45%"
      height="100%"
      class="d-flex align-center justify-center"
    >
      <v-img
        width="70%"
        height="100%"
        aspect-ratio="9/16"
        src="/homepage pic.png"
      ></v-img>
    </v-sheet>
  </v-sheet>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function push() {
  router.push("/login");
}
</script>

<style scoped>
/* picture */
</style>
