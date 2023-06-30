<template>
  <navbar></navbar>
  <router-link to="/user/profile">PROFILE</router-link>
  <router-view></router-view>
</template>

<script setup lang="ts">
import navbar from "@/components/common/navbar.vue";
</script>

<style scoped lang="scss">
.hello {
  color: red;
}
</style>
