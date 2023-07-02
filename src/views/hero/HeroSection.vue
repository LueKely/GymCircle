<template>
  <div>lue is pro tite {{ data }}</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { onMounted } from "vue";
import { useDataFetcher } from "@/composables/getData";

const { data, error, fetchData } = useDataFetcher(
  "http://localhost:3030/test",
  {}
);

onMounted(fetchData);
</script>
