<template>
  <div class="mx-5" v-for="(info, index) in pricingInfo" :key="index">
    <PricingCard :info="info" @change="handleEmit"></PricingCard>
  </div>
  <v-dialog v-model="dialog" width="auto">
    <v-card>
      <v-card-text> Are you sure you want to subscribe? </v-card-text>
      <v-card-actions class="mx-auto">
        <v-btn color="primary" @click="dialog = false">No</v-btn>
        <v-btn color="primary">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import PricingCard from "@/components/common/PricingCard.vue";
import { ref } from "vue";

export interface tier {
  medal: "🥉" | "🥈" | "🥇";
  name: "Bronze" | "Silver" | "Gold";
  list: string[];
  price: number;
}
const dialog = ref<boolean>(false);
const pricingInfo = ref<tier[]>([
  {
    medal: "🥉",
    name: "Bronze",
    list: ["Test", "It niggad"],
    price: 10,
  },
  {
    medal: "🥈",
    name: "Silver",
    list: ["Test", "It niggad"],
    price: 10,
  },
  {
    medal: "🥇",
    name: "Gold",
    list: ["Test", "It niggad"],
    price: 10,
  },
]);

function handleEmit(e: boolean) {
  dialog.value = e;
}
</script>
