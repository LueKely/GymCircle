<template>
  <v-form
    @submit.prevent="load"
    v-model="form"
    class="w-75 d-flex align-center justify-center elevation-2 pa-2 mb-xl-10"
  >
    <v-container>
      <v-row>
        <v-col>
          <h1>Log In As User</h1>
        </v-col>
      </v-row>
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
            :value="sendInfo.email"
            variant="outlined"
          ></v-text-field
        ></v-col>
      </v-row>
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
            :value="sendInfo.password"
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
            >LogIn</v-btn
          >
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
});

const loading = ref(false);

const sendInfo = reactive({
  email: "",
  password: "",
});

const rules = reactive({
  requiredEmail: [
    (value: string) => !!value || "Required.",
    (value: string) => (value && value.length >= 10) || "Min 10 characters",
    (value: string) => patterns.emailPatern.test(value) || "Not a valid email",
  ],
  requiredPassword: [(value: string) => !!value || "Required."],
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
