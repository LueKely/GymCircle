<template>
  <v-card width="100%" class="pb-10">
    <v-card-title>Bulletin Board 📢 </v-card-title>
    <v-timeline side="end" density="compact" class="mx-5">
      <v-timeline-item
        size="small"
        v-for="(item, index) in payload"
        :key="index"
        :dot-color="item.color"
        width="400"
      >
        <v-alert
          :color="item.color"
          :text="item.text"
          :icon="item.icon"
          border="start"
          variant="outlined"
        >
        </v-alert>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";

const payload = ref([
  { color: "info", icon: "$info", text: "chupapi the second" },
  {
    color: "error",
    icon: "mdi-alert",
    text: "chupapi munyano",
  },
  { color: "info", icon: "mdi-information", text: "chupapi the second" },
  {
    color: "error",
    icon: "mdi-alert",
    text: "chupapi munyano",
  },
]);
</script>
