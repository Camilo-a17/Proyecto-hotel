<template>
  <div class="mt-9 flex justify-center items-center h-screen">
    <div class="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
      <h1 class="text-3xl font-semibold mb-3">Editar Habitación</h1>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          id="numero"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          v-model="habitacion.numero"
          required
          @focus="isTypingNumero = true"
          @blur="isTypingNumero = false"
        />
        <label v-if="!isTypingNumero" for="numero" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Número de Habitación:</label>
        <span v-if="!habitacion.numero && !isTypingNumero" class="text-sm text-red-600">Este campo es requerido</span>
      </div>

      <div class="relative z-0 w-full mb-5">
        <select
          id="tipo"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          v-model="habitacion.tipo"
          required
          @focus="isTypingTipo = true"
          @blur="isTypingTipo = false"
        >
          <option value="" disabled hidden>Selecciona un tipo</option>
          <option value="estandar">Estándar</option>
          <option value="junior">Junior</option>
          <option value="suite">Suite</option>
        </select>
        <label v-if="!isTypingTipo" for="tipo" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span v-if="!habitacion.tipo && !isTypingTipo" class="text-sm text-red-600">Selecciona un tipo de habitación</span>
      </div>

      <div class="relative z-0 w-full mb-5">
        <select
          id="acomodacion"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          v-model="habitacion.acomodacion"
          required
          @focus="isTypingAcomodacion = true"
          @blur="isTypingAcomodacion = false"
        >
          <option value="" disabled hidden>Selecciona una acomodación</option>
          <option value="sencilla">Sencilla</option>
          <option value="doble">Doble</option>
          <option value="triple">Triple</option>
          <option value="cuadruple">Cuádruple</option>
        </select>
        <label v-if="!isTypingAcomodacion" for="acomodacion" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span v-if="!habitacion.acomodacion && !isTypingAcomodacion" class="text-sm text-red-600">Selecciona una acomodación</span>
      </div>

      <!-- Otros campos relacionados con la habitación -->

      <div class="mt-4">
        <a href="/habitaciones">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Guardar Cambios
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      habitacion: {
        numero: "",
        tipo: "",
        acomodacion: "", // Agregamos el campo de acomodación
        // Otros campos relacionados con la habitación
      },
    };
  },
  methods: {
    guardarCambios() {
      // Envía los datos editados de la habitación al backend para su actualización
      // Luego, redirige a la lista de habitaciones
    },
  },
};
</script>
