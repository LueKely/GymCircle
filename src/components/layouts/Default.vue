<template>
  <!-- side bar -->
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
        title="Inbox"
        value="inbox"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-supervisor-circle"
        title="Supervisors"
        value="supervisors"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-clock-start"
        title="Clock-in"
        value="clockin"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- main content -->
  <v-main class="bg-grey-lighten-4 d-flex align-start justify-start">
    <Info>
      <template #header>
        <Welcome></Welcome>
      </template>
      <template #info><UserInformation></UserInformation> </template>
      <template #tier>
        <TierCard></TierCard>
      </template>
      <template #bulletin> <BulletinBoard></BulletinBoard></template>
    </Info>
  </v-main>
</template>

<script lang="ts" setup>
import UserInformation from "@/components/common/UserInformation.vue";
import Info from "./Info.vue";
import Welcome from "@/views/user/Welcome.vue";
import TierCard from "@/components/common/TierCard.vue";
import BulletinBoard from "@/components/common/BulletinBoard.vue";
</script>

<style scoped>
.lue {
  overflow: hidden;
}
</style>
