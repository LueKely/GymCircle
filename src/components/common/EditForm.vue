<template>
  <v-form
    @submit.prevent="load"
    v-model="form"
    class="w-50 d-flex align-center justify-center elevation-2 pa-2 bg-white rounded-lg"
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
            label="Full name"
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
            :rules="rules.requiredage"
            color="primary"
            clearable
            label="age"
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
            label="address"
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
import { useUserStore } from "@/store/UserStore";
import { usePatchData } from "@/composables/PatchRequest";
import Session from "@/composables/Session";

const form = ref(null);
const store = useUserStore();

const patterns = reactive({
  emailPatern:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  agePatter: /^\d+$/,
});

const loading = ref(false);
const url = "http://localhost:3030/user";
const key = Session.getSessionKey("key");

interface RequestBody {
  email: string;
  name: string;
  age: number;
  address: string;
}

const { patchData } = usePatchData<RequestBody>(url, key);

const sendInfo = reactive({
  email: store.info.email,
  name: store.info.name,
  age: store.info.age,
  address: store.info.address,
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
  requiredage: [
    (value: string) => !!value || "Required.",
    (value: string) => patterns.agePatter.test(value) || "Numbers only",
  ],
});

const isCorrect = computed(() => {
  const values = Object.values(sendInfo);
  return values.every((value) => value !== "");
});

async function load() {
  console.log(sendInfo);
  if (!form.value) return;
  loading.value = true;
  await patchData(sendInfo);
  loading.value = await false;
}
</script>
