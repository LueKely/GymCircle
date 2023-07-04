<template>
  <v-card width="100%" class="pb-10">
    <v-card-title>📢 Bulletin Board </v-card-title>
    <v-timeline side="end" density="compact" class="mx-5">
      <v-timeline-item
        size="small"
        v-for="(item, index) in announcements"
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
import { useGetData } from "@/composables/GetRequest";
import Session from "@/composables/Session";
import { onMounted } from "vue";
const { data, error, fetchData } = useGetData(
  "http://localhost:3030/user/announcements",
  Session.getSessionKey("key")
);

const typeMap: any = {
  discount: { color: "info", icon: "mdi-information" },
  error: { color: "error", icon: "mdi-alert" },
};

function cloneArray(array: any) {
  return array.map(translate);
}

function translate(item: any) {
  const input = typeMap[item.type];
  return { ...input, text: item.description };
}

const announcements = ref();

onMounted(async () => {
  await fetchData();
  await console.log(data.value);
  announcements.value = await cloneArray(data.value);
  await console.log(announcements.value[0].color);
});
</script>
