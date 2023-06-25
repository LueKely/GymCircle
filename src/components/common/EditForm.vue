<template>
  <v-form
    @submit.prevent="load"
    v-model="form"
    class="w-50 d-flex align-center justify-center elevation-2 pa-2"
  >
    <v-container>
      <v-row>
        <v-col>
          <h1>✍️ Edit</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            class="mr-2"
            color="primary"
            :rules="rules.required"
            label="Full Name"
            v-model="sendInfo.name"
            clearable
            :value="sendInfo.name"
            variant="outlined"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            :rules="rules.requiredEmail"
            color="primary"
            clearable
            label="Email"
            v-model="sendInfo.email"
            :value="sendInfo.email"
            variant="outlined"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            :rules="rules.requiredAge"
            color="primary"
            clearable
            label="Age"
            v-model="sendInfo.age"
            :value="sendInfo.age"
            variant="outlined"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            color="primary"
            :rules="rules.required"
            label="Address"
            v-model="sendInfo.address"
            clearable
            :value="sendInfo.address"
            variant="outlined"
          >
          </v-text-field>
        </v-col>
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
            >Send</v-btn
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

const form = ref(null);

const patterns = reactive({
  emailPatern:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  agePatter: /^\d+$/,
});

const loading = ref(false);

const inputInfo = reactive({
  name: "lue",
  email: "lue is tired",
  age: 5,
  address: "go fuck yourself",
});

const sendInfo = reactive({
  ...inputInfo,
});

const rules = reactive({
  required: [
    (value: string) => !!value || "Required.",
    (value: string) => (value && value.length >= 10) || "Min 10 characters",
  ],
  requiredEmail: [
    (value: string) => !!value || "Required.",
    (value: string) => (value && value.length >= 10) || "Min 10 characters",
    (value: string) => patterns.emailPatern.test(value) || "Not a valid email",
  ],
  requiredAge: [
    (value: string) => !!value || "Required.",
    (value: string) => patterns.agePatter.test(value) || "Numbers only",
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
