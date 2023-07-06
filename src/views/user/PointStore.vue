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

    <v-sheet border rounded width="100%" class="mt-2 pa-2 test">
      <h3 class="mb-3">What you can redeem:</h3>
      <div class="d-flex flex-wrap items-center justify-start">
        <div v-for="(item, index) in payload" :key="index" class="mx-2 my-2">
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
      <h1>{{ transactionReceipt }}</h1>
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
import { usePutData } from "@/composables/PutRequest";
import Session from "@/composables/Session";
import { computed } from "vue";
import { ref } from "vue";
import { useUserStore } from "@/store/UserStore";
const store = useUserStore();
const transactionReceipt = ref("poo");
const confirmSubmission = ref(false);
const generated = ref(false);
const payload = [
  {
    cardName: "10% off to the next renewal",
    url: "/Discount.webp",
    points: 9,
  },
  {
    cardName: "9% off to Beverages",
    url: "/beverage.jpeg",
    points: 9,
  },
  {
    cardName: "Gym Official Socks",
    url: "/Socks.jpeg",
    points: 18,
  },
  {
    cardName: "Gym Official Wristband",
    url: "/wristband.jpeg",
    points: 18,
  },
  {
    cardName: "Gym Official Tumbler",
    url: "/Tumbler.jpeg",
    points: 20,
  },
  {
    cardName: "Gym Official Shaker",
    url: "/Shaker.webp",
    points: 20,
  },
  {
    cardName: "Gym Official T-Shirt",
    url: "/Shirt.webp",
    points: 25,
  },

  {
    cardName: "1lb of Whey Protein",
    url: "/protein.jpeg",
    points: 30,
  },

  {
    cardName: "50 tablets of supplements of choice (220mg)",
    url: "/droogs.jpeg",
    points: 30,
  },
];
interface ResponseBody {
  name: string;
  type: string;
  price: number;
}

const bill = computed((): ResponseBody => {
  return {
    name: payload[currentItem.value].cardName,
    type: "points",
    price: payload[currentItem.value].points,
  };
});
const currentItem = ref<number>(0);

const url = "http://localhost:3030/user/transaction";
const key = Session.getSessionKey("key");

const { data, putData } = usePutData<ResponseBody>(url, key);

const currentPoints = computed(() => {
  return store.info.points;
});

async function openDialog(e: number) {
  confirmSubmission.value = true;
  currentItem.value = e;
  await putData(bill.value);
  transactionReceipt.value = await data.value;
}

function copyText() {
  navigator.clipboard.writeText(transactionReceipt.value);
}
</script>
<style scoped></style>
