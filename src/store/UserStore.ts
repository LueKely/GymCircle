// Utilities
import { defineStore } from "pinia";
import { reactive } from "vue";

export interface User {
  [key: string]: any;
  user_id: number;
  email: string;
  name: string;
  age: number;
  address: string;
  points: number;
  tier: string;
  days: number;
}

export const useUserStore = defineStore("user", () => {
  const info = reactive<User>({
    user_id: 0,
    email: "Email",
    name: "Name",
    age: 0,
    address: "ADDRESS",
    points: 0,
    tier: "Hello",
    days: 0,
  });

  function reset() {
    info.user_id = 0;
    info.email = "Email";
    info.age = 0;
    info.address = "address";
    info.points = 0;
    info.tier = "hello";
    info.days = 0;
  }

  return { info, reset };
});
