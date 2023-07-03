// Utilities
import { defineStore } from "pinia";
import { reactive } from "vue";

export interface User {
  Email: string;
  UserName: string;
  Age: number;
  Address: string;
  Points: number;
  Tier: string;
}

export const useUserStore = defineStore("user", () => {
  const info = reactive<User>({
    Email: "SHIBA",
    UserName: "Name",
    Age: 0,
    Address: "ADDRESS",
    Points: 0,
    Tier: "Hello",
  });

  return { info };
});
