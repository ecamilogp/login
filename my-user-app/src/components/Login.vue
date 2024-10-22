<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <form
      @submit.prevent="loginUser"
      class="bg-white shadow-lg rounded-lg px-10 py-8 space-y-6 w-96"
    >
      <h2 class="text-3xl font-bold text-center text-blue-600">
        Iniciar Sesión
      </h2>
      <div>
        <input
          v-model="email"
          type="email"
          placeholder="Correo electrónico"
          required
          class="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
      </div>
      <div>
        <input
          v-model="password"
          type="password"
          placeholder="Contraseña"
          required
          class="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Iniciar sesión
      </button>
    </form>
    <p v-if="errorMessage" class="text-red-500 mt-4 text-center">
      {{ errorMessage }}
    </p>
    <p class="mt-4 text-gray-600 text-center">
      ¿No tienes cuenta?
      <router-link
        to="/register"
        class="text-blue-600 font-semibold hover:underline"
        >Regístrate aquí</router-link
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase.ts"; // Ajusta la ruta según donde esté tu archivo firebase.ts
import { signInWithEmailAndPassword } from "firebase/auth"; // Asegúrate de que esta importación sigue presente

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const router = useRouter();

const loginUser = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log("Usuario iniciado sesión:", userCredential.user);
    localStorage.setItem("userEmail", userCredential.user.email);
    router.push({ name: "Home" });
  } catch (error) {
    errorMessage.value = "Error al iniciar sesión: " + error.message;
    console.error("Error al iniciar sesión:", error);
  }
};
</script>

<style scoped>
/* Estilos personalizados para el formulario */
</style>
