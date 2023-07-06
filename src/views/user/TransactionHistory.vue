<template>
  <v-sheet width="100%" height="100%" class="pa-5" color="blue-grey-lighten-5">
    <h1>Transaction History</h1>
    <UserTable></UserTable>
  </v-sheet>
</template>
<script setup lang="ts">
import UserTable from "@/components/common/UserTable.vue";
</script>
