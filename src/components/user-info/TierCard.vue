<template>
  <v-card width="600px" rounded="lg">
    <v-card-title>⭐️ Tier</v-card-title>
    <v-card-text class="d-flex justify-space-between"
      ><h4 class="text-h4 font-weight-bold">{{ tier }}</h4>
      <p>
        Start: {{ currentDate }} <br />
        End: {{ expiration }}
      </p>
    </v-card-text>
    <v-list density="compact"
      ><v-list-subheader>Perks</v-list-subheader>
      <v-list-item
        min-height="10px"
        density="compact"
        v-for="(item, index) in benefits"
        :key="index"
      >
        • {{ item }}
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useTierStore } from "@/store/TierStore";
const tier = computed(() => {
  if (store.currentTier == "Gold") return "Gold 🥇";
  else if (store.currentTier == "Silver") return "Silver 🥈";
  else if (store.currentTier == "Bronze") return "Bronze 🥉";
  return "None";
});
const store = useTierStore();

const benefits = computed(() => {
  if (store.currentTier == "Gold")
    return [
      "Unlimited access to the standard gym facilities",
      "Unlimited water refill",
      "Free 1 pack of Whey Protein (1lb) and 50 tablets of MultiVitamins",
      "GymCircle ID",
    ];
  else if (store.currentTier == "Silver")
    return [
      "Unlimited access to the standard gym facilities and plyometrics equipment",
      "Unlimited water refill",
      "GymCircle official shaker bottle",
      "GymCircle ID",
    ];
  else if (store.currentTier == "Bronze")
    return [
      "Unlimited access to the standard gym facilities.",
      "Unlimited water refill.",
      "GymCircle ID.",
    ];
  return ["none"];
});
const currentDate = computed(() => {
  return store.currentDate;
});

const expiration = computed(() => {
  return store.currentExp;
});
</script>
