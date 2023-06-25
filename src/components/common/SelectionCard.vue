<template>
  <v-card width="300px" class="pa-5"
    ><v-card-title class="text-center text-h6"
      ><h1>🥉</h1>
      Bronze Tier
    </v-card-title>
    <v-card-subtitle class="text-subtitle-1">What you'll get:</v-card-subtitle>
    <v-card-text
      ><ul class="text-body-1">
        <li>✅ tite</li>
        <li>✅ tite</li>
        <li>✅ tite</li>
        <li>✅ tite</li>
        <li>✅ tite</li>
      </ul>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="tonal" size="large" block> Subscribe</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";

const lue = 55;

const kely = ref(lue);
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>
