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
            v-model="sendInfo.userEmail"
            clearable
            :value="sendInfo.userEmail"
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
      <v-row>
        <v-col>
          <p>Don't have an account?</p>
          <router-link to="/signup">Sign up here</router-link>
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
import { usePostData } from "@/composables/PostRequest";
import { useLoginStore } from "@/store/LoginStore";
import { useRouter } from "vue-router";
import Session from "@/composables/Session";

interface RequestBody {
  userEmail: string;
  password: string;
}
const router = useRouter();
const visible = ref(false);
const form = ref(null);

const patterns = reactive({
  emailPatern:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
});

const loading = ref(false);

const sendInfo = reactive<RequestBody>({
  userEmail: "",
  password: "",
});

const rules = reactive({
  requiredEmail: [
    (value: string) => !!value || "Required.",
    (value: string) => (value && value.length >= 4) || "Min 4 characters",
    // (value: string) =>
    //   patterns.emailPatern.test(value) || "Not a valid userEmail",
  ],
  requiredPassword: [(value: string) => !!value || "Required."],
});

const isCorrect = computed(() => {
  const values = Object.values(sendInfo);
  return values.every((value) => value !== "");
});

const url = "http://localhost:3030/login";
const token = "your_token_here";

const { data, postData, status } = usePostData<RequestBody>(url, token);

const store = useLoginStore();

async function load() {
  if (!form.value) return;

  loading.value = true;
  await post();
}

async function post() {
  await postData(sendInfo);

  if (status.value != 200) {
    alert("Error Wrong Credentials");
    loading.value = await false;
    return;
  }

  setTimeout(() => {
    loading.value = false;
  }, 500);

  store.jwt = (await data.value) || "ERROR";
  store.isLoggedin = await true;
  await Session.storeInSessionStorage("key", store.jwt);
  router.push("/user/profile");
}
</script>
