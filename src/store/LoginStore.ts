// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";
export const useLoginStore = defineStore("key", () => {
  const jwt = ref<string>("");
  const isLoggedin = ref<boolean>(false);
  function reset() {
    jwt.value = "";
    isLoggedin.value = false;
  }

  return { jwt, isLoggedin, reset };
});
