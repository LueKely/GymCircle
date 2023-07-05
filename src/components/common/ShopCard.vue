<template>
  <v-card width="300px" height="250px">
    <v-img height="130" :src="props.url" cover class="text-white"></v-img>
    <v-card-title class="text-h6"> {{ props.cardName }}</v-card-title>
    <v-card-subtitle>{{ props.points }}pts</v-card-subtitle>
    <v-card-actions class="">
      <v-btn @click="click">Redeem</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  index: number;
  cardName: string;
  url: string;
  points: number;
}>();
const emit = defineEmits<{
  profile: [value: number];
}>();

function click() {
  emit("profile", props.index);
}
</script>
