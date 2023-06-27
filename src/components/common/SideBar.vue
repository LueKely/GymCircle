<template>
  <v-navigation-drawer permanent color="grey-darken-4">
    <v-list class="d-flex align-center justify-center">
      <v-list-item
        class="text-h5 mr-10"
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        ><p>Gym Circle</p>
      </v-list-item>
    </v-list>

    <v-list nav class="px-4">
      <v-list-item
        prepend-icon="mdi-account-circle"
        title="Profile"
        :to="routerName('profile')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-note-edit"
        title="Edit Profile"
        :to="routerName('edit')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-card-account-details-star"
        title="Subscription"
        :to="routerName('subscription')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-clipboard-text-clock"
        title="Transaction History"
        :to="routerName('history')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const routerName = ref((input: string) => {
  return `/user/${input}`;
});
</script>
