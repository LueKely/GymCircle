<template>
  <v-card width="250px" height="300px">
    <v-img height="150" :src="props.url" cover class="text-white"></v-img>
    <v-card-title> {{ props.cardName }}</v-card-title>
    <v-card-text>{{ props.points }} pts</v-card-text>
    <v-card-actions>
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
