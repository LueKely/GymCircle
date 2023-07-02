<template>
  <div>lue is pro tite {{ data }}</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { onMounted } from "vue";
import { useGetData } from "@/composables/getData";

const { data, error, fetchData } = useGetData(
  "http://localhost:3030/test",
  "poopoopeepee"
);

onMounted(fetchData);
</script>
