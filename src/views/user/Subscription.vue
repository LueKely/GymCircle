<template>
  <v-sheet
    width="100%"
    height="100%"
    color="transparent"
    class="d-flex flex-column align-center justify-center pa-15"
  >
    <h1 class="mb-10 text-h2">Choose Your Plan</h1>
    <v-sheet
      width="auto"
      class="d-flex items-center justify-center mb-10"
      color="transparent"
    >
      <div class="mx-5" v-for="(info, index) in pricingInfo" :key="index">
        <PricingCard
          :info="info"
          @change="handleEmit"
          @response="handleResponse"
        ></PricingCard>
      </div>
    </v-sheet>
  </v-sheet>

  <!-- 1st dialgo -->
  <v-dialog v-model="confirmation" width="auto">
    <v-card>
      <v-card-text> Are you sure you want to subscribe? </v-card-text>
      <v-card-actions class="mx-auto">
        <v-btn color="primary" @click="confirmation = false">No</v-btn>
        <v-btn color="primary" @click="confirmTransaction">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 2nd dialog -->
  <v-dialog v-model="generated" width="600px">
    <v-card class="pa-5 text-center">
      <v-icon
        class="mb-5 mx-auto"
        color="success"
        icon="mdi-check-circle"
        size="90"
      ></v-icon>
      <v-card-title> 🎉CONGRATULATIONS!!🎉</v-card-title>
      <h1>{{ transaction }}</h1>
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
import PricingCard from "@/components/common/PricingCard.vue";
import { usePutData } from "@/composables/PutRequest";
import Session from "@/composables/Session";
import { computed, reactive } from "vue";

import { ref } from "vue";

export interface tier {
  medal: "🥉" | "🥈" | "🥇";
  name: "Bronze" | "Silver" | "Gold";
  list: string[];
  price: number;
}
const confirmation = ref<boolean>(false);
const generated = ref<boolean>(false);
const transaction = computed(() => {
  return data.value;
});
const pricingInfo = ref<tier[]>([
  {
    medal: "🥉",
    name: "Bronze",
    list: [
      "Unlimited access to the standard gym facilities.",
      "Unlimited water refill",
      "GymCircle ID",
    ],
    price: 500,
  },
  {
    medal: "🥈",
    name: "Silver",
    list: [
      "Unlimited access to the standard gym facilities and plyometrics equipment",
      "Unlimited water refill",
      "GymCircle official shaker bottle",
      "GymCircle ID",
    ],
    price: 1250,
  },
  {
    medal: "🥇",
    name: "Gold",
    list: [
      "Unlimited access to the standard gym facilities",
      "Unlimited water refill",
      "Free 1 pack of Whey Protein (1lb) and 50 tablets of MultiVitamins",
      "GymCircle ID",
    ],
    price: 1650,
  },
]);
const select = ref("");

interface ResponseBody {
  name: string;
  type: string;
  price: number;
}

const optionMap = new Map<string, ResponseBody>([
  [
    "🥉",
    reactive({
      name: "Bronze",
      type: "subscription",
      price: pricingInfo.value[0].price,
    }),
  ],
  [
    "🥈",
    reactive({
      name: "Silver",
      type: "subscription",
      price: pricingInfo.value[1].price,
    }),
  ],
  [
    "🥇",
    reactive({
      name: "Gold",
      type: "subscription",
      price: pricingInfo.value[2].price,
    }),
  ],
]);

const bill = computed<ResponseBody>(() => {
  const payload = optionMap.get(select.value);

  if (payload) {
    return {
      name: payload.name,
      type: payload.type,
      price: payload.price,
    };
  } else
    return {
      name: "",
      type: "",
      price: 0,
    };
});
const url = "http://localhost:3030/user/transaction";
const key = Session.getSessionKey("key");

const { data, putData } = usePutData<ResponseBody>(url, key);

function handleEmit(e: boolean) {
  confirmation.value = e;
}

function handleResponse(e: string) {
  select.value = e;
}

async function confirmTransaction() {
  confirmation.value = false;

  await putData(bill.value);

  await console.log(data.value);
  generated.value = await true;
}

async function copyText() {
  await navigator.clipboard.writeText(transaction.value);
}
</script>
