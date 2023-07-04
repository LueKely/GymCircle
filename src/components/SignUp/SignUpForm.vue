<template>
  <v-form
    @submit.prevent="load"
    v-model="form"
    class="w-75 d-flex align-center justify-center elevation-2 pa-2 mb-xl-10"
  >
    <v-container>
      <v-row>
        <v-col>
          <h1>Sign Up as User</h1>
        </v-col>
      </v-row>
      <!-- email and user -->
      <v-row>
        <v-col>
          <v-text-field
            prepend-inner-icon="mdi-email-outline"
            placeholder="Email"
            class="mr-2 w-100"
            color="primary"
            :rules="rules.requiredEmail"
            label="Email"
            v-model="sendInfo.email"
            clearable
            variant="outlined"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            prepend-inner-icon="mdi-account-box-outline"
            placeholder="Email"
            class="mr-2 w-100"
            color="primary"
            :rules="rules.address"
            label="Username"
            v-model="sendInfo.username"
            clearable
            variant="outlined"
          ></v-text-field
        ></v-col>
      </v-row>
      <!-- password and cofirm password -->
      <v-row>
        <v-col>
          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            @click:append-inner="visible = !visible"
            prepend-inner-icon="mdi-lock-outline"
            placeholder="Password"
            :rules="rules.requiredPassword"
            color="primary"
            clearable
            label="Password"
            v-model="sendInfo.password"
            variant="outlined"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            @click:append-inner="visible = !visible"
            prepend-inner-icon="mdi-lock-outline"
            placeholder="Confirm Password"
            :rules="rules.confirmPassword"
            color="primary"
            clearable
            label="Confirm Password"
            v-model="sendInfo.confirmPassword"
            variant="outlined"
          ></v-text-field
        ></v-col>
      </v-row>
      <!-- age and address -->
      <v-row>
        <v-col>
          <v-text-field
            prepend-inner-icon="mdi-numeric"
            placeholder="Age"
            class="mr-2 w-100"
            color="primary"
            :rules="rules.requiredAge"
            label="Age"
            v-model="sendInfo.age"
            clearable
            variant="outlined"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            prepend-inner-icon="mdi-map-marker"
            placeholder="Address"
            class="mr-2 w-100"
            color="primary"
            :rules="rules.address"
            label="Address"
            v-model="sendInfo.address"
            clearable
            variant="outlined"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row justify="end" align="end">
        <v-col>
          <v-btn
            type="submit"
            :disabled="!isCorrect"
            variant="outlined"
            size="large"
            :loading="loading"
            block
            rounded="xl"
            >Sign Up</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>Already have an account?</p>
          <router-link to="/login">Login here</router-link>
        </v-col>
      </v-row>
    </v-container>

    <!-- poop -->
  </v-form>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";
import { reactive } from "vue";
const visible = ref(false);
const form = ref(null);

const patterns = reactive({
  emailPatern:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  agePattern: /^\d+$/,
});

const loading = ref(false);

const sendInfo = reactive({
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  age: "",
  address: "",
});

const rules = reactive({
  requiredEmail: [
    (value: string) => !!value || "Required.",
    (value: string) => patterns.emailPatern.test(value) || "Not a valid email",
  ],
  requiredPassword: [(value: string) => !!value || "Required."],
  confirmPassword: [
    (value: string) => !!value || "Required.",
    () =>
      sendInfo.confirmPassword === sendInfo.password || "Password must match",
  ],
  address: [
    (value: string) => !!value || "Required.",
    (value: string) => (value && value.length >= 10) || "Min 10 characters",
  ],
  requiredAge: [
    (value: string) => !!value || "Required.",
    (value: string) => patterns.agePattern.test(value) || "Numbers only",
  ],
});

const isCorrect = computed(() => {
  const values = Object.values(sendInfo);
  return values.every((value) => value !== "");
});

function load() {
  if (!form.value) return;
  loading.value = true;
  setTimeout(() => (loading.value = false), 3000);
}
</script>
