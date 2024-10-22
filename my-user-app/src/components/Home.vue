<template>
  <div>
    <h1>¡Bienvenido a Home!</h1>
    <!-- Tu contenido va aquí -->
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
// Importa tus servicios de Firebase si es necesario
import { getAuth } from "firebase/auth";

const auth = getAuth();
// Ejemplo de propiedad computada
const someData = computed(() => {
  // Lógica aquí
  return "algún valor";
});

// Tu lógica adicional de configuración aquí
</script>

<style scoped>
/* Tus estilos aquí */
</style>
