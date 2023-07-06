// Utilities
import { defineStore } from "pinia";
import Session from "@/composables/Session";
import { useGetData } from "@/composables/GetRequest";
import { ref } from "vue";
import ExpirationDate from "@/composables/ExpirationDate";

export const useTierStore = defineStore("tier", () => {
  const { data, fetchData } = useGetData(
    "http://localhost:3030/user/filter",
    Session.getSessionKey("key")
  );

  const currentDate = ref<string>("None");
  const currentTier = ref("None");
  const currentExp = ref("None");

  async function setData() {
    await fetchData();
    currentDate.value = (await data.value.date) || "None";
    currentTier.value = (await data.value.name) || "None";
  }

  function reset() {
    currentDate.value = "None";
    currentTier.value = "None";
    currentExp.value = "None";
  }

  function setExpiration() {
    currentExp.value = ExpirationDate.addDays(currentDate.value, 30);
  }
  return {
    currentDate,
    currentTier,
    reset,
    setData,
    setExpiration,
    currentExp,
  };
});
