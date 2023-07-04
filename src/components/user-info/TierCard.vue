<template>
  <v-card width="600px" rounded="lg">
    <v-card-title>⭐️ Tier</v-card-title>
    <v-card-text class="d-flex justify-space-between"
      ><h4 class="text-h4 font-weight-bold">{{ tier }}</h4>
      <p>
        Start: 03/12/2023<br />
        End: 04/5/2023
      </p>
    </v-card-text>
    <v-list
      ><v-list-subheader>Perks</v-list-subheader>
      <v-list-item v-for="(item, index) in benefits" :key="index"
        >• {{ item }}
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script setup lang="ts">
import { useUserStore } from "@/store/UserStore";
import { computed } from "vue";

const store = useUserStore();

const tier = computed(() => {
  if (store.info.tier == "Gold") return "Gold 🥇";
  else if (store.info.tier == "Silver") return "Silver 🥈";
  else if (store.info.tier == "Bronze") return "Bronze 🥉";
  return "None";
});

const benefits = computed(() => {
  if (store.info.tier == "Gold")
    return [
      "Unlimited access to the standard gym facilities",
      "Unlimited water refill",
      "Free 1 pack of Whey Protein (1lb) and 50 tablets of MultiVitamins",
      "GymCircle ID",
    ];
  else if (store.info.tier == "Silver")
    return [
      "Unlimited access to the standard gym facilities and plyometrics equipment",
      "Unlimited water refill",
      "GymCircle official shaker bottle",
      "GymCircle ID",
    ];
  else if (store.info.tier == "Bronze")
    return [
      "Unlimited access to the standard gym facilities.",
      "Unlimited water refill.",
      "GymCircle ID.",
    ];
  return ["none"];
});
</script>
