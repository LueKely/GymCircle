<template>
  <v-navigation-drawer permanent color="grey-darken-4">
    <v-list class="d-flex align-center justify-center">
      <v-list-item
        class="text-h5 mr-10"
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        ><p>Gym Circle</p>
      </v-list-item>
    </v-list>

    <v-list nav>
      <v-list-item
        prepend-icon="mdi-email"
        title="Profile"
        :to="routerName('profile')"
        value="inbox"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-supervisor-circle"
        title="Edit Profile"
        :to="routerName('edit')"
        value="supervisors"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-clock-start"
        title="Clock-in"
        value="clockin"
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
