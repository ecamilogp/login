// src/stores/userStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const email = ref<string | null>(null); // Cambia a 'null' al inicio

  const setEmail = (userEmail: string) => {
    email.value = userEmail;
  };

  return { email, setEmail };
});
