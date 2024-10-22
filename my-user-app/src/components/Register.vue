<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 class="text-3xl font-bold text-center text-blue-600 mb-6">
        Registro de Usuario
      </h2>
      <form @submit.prevent="registerUser" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Contraseña</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Registrar
        </button>
      </form>
      <p class="mt-4 text-sm text-center text-gray-600">
        ¿Ya tienes una cuenta?
        <router-link to="/" class="text-blue-600 font-semibold hover:underline"
          >Inicia sesión</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
// Importa aquí tus funciones de Firebase para registrar usuarios

const email = ref("");
const password = ref("");
const router = useRouter();

const registerUser = async () => {
  // Aquí implementa la lógica para registrar al usuario usando Firebase
  console.log("Registrando usuario:", email.value);
  // Redirecciona al usuario a la página de inicio o haz cualquier acción necesaria
  router.push({ name: "Home" });
};
</script>

<style scoped>
/* Estilos personalizados para el formulario */
</style>
