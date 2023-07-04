<template>
  <v-card
    width="380px"
    height="450px"
    class="pa-5 d-flex flex-column align-center justify-space-around"
    ><v-card-title class="text-center text-h6"
      ><h1 class="mb-2">{{ props.info.medal }}</h1>
      {{ props.info.name }}
    </v-card-title>
    <v-card-subtitle class="text-subtitle-1">What you'll get:</v-card-subtitle>
    <v-card-text
      ><ul class="text-body-1">
        <li v-for="(item, index) in props.info.list" :key="index">
          ✅ {{ item }}
        </li>
      </ul>
    </v-card-text>
    <h2 class="text-center mt-10">Price: ₱{{ props.info.price }}</h2>
    <v-card-actions>
      <v-btn variant="tonal" size="large" width="300" block @click="poop">
        Subscribe</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import { tier } from "@/views/user/Subscription.vue";

const props = defineProps<{ info: tier }>();
const emit = defineEmits<{
  change: [value: boolean];
  update: [value: string];
}>();

function poop() {
  emit("change", true);
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
