<template>
  <v-sheet width="100%" height="100%" color="transparent" class="pa-5">
    <div class="d-flex justify-space-between align-center">
      <h1>Points Store 🏪</h1>
      <v-card
        width="250"
        height="70"
        class="d-flex justify-start align-center"
        variant="elevated"
      >
        <v-card-title> Current Points: {{ currentPoints }}</v-card-title>
      </v-card>
    </div>

    <v-sheet border rounded width="100%" class="mt-2 pa-5">
      <h3 class="mb-3">What you can redeem:</h3>
      <div class="d-flex items-center">
        <div v-for="(item, index) in payload" :key="index" class="mx-2">
          <shop-card
            :card-name="item.cardName"
            :url="item.url"
            :index="index"
            :points="item.points"
            @profile="openDialog"
          ></shop-card>
        </div>
      </div>
    </v-sheet>
  </v-sheet>

  <v-dialog v-model="confirmSubmission" width="auto">
    <v-card>
      <v-card-text> Are you sure you want to subscribe? </v-card-text>
      <v-card-actions class="mx-auto">
        <v-btn color="primary" @click="confirmSubmission = false">No</v-btn>
        <v-btn
          color="primary"
          @click="(generated = true), (confirmSubmission = false)"
          >Yes</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="generated" width="600px">
    <v-card class="pa-5 text-center">
      <v-icon
        class="mb-5 mx-auto"
        color="success"
        icon="mdi-check-circle"
        size="90"
      ></v-icon>
      <v-card-title> 🎉CONGRATULATIONS!!🎉</v-card-title>
      <h1>{{ transaction }} + {{ currentItem }}</h1>
      <v-card-text>
        Here is your transaction number please show this to our registrar and
        bring the appropriate cash. Your transaction receipts will be stored in
        your transaction history so don't worry.
      </v-card-text>
      <v-divider class="border-opacity-100 my-2"></v-divider>
      <v-card-actions class="mx-auto">
        <v-btn color="primary" @click="generated = false">Close</v-btn>
        <v-btn color="primary" @click="copyText">Copy to Clipboard</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import ShopCard from "@/components/common/ShopCard.vue";
import { ref } from "vue";
const transaction = ref("poo");
const confirmSubmission = ref(false);
const generated = ref(false);
const payload = [
  {
    cardName: "hotdog",
    url: "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
    points: 100,
  },
  {
    cardName: "hotdog",
    url: "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
    points: 100,
  },
];

const currentItem = ref<number>(0);
const currentPoints = ref<number>(0);

function openDialog(e: number) {
  confirmSubmission.value = true;
  currentItem.value = e;
  // do anything you want here
}

function copyText() {
  navigator.clipboard.writeText(transaction.value);
}
</script>
