<template>
  <div class="mt-9 flex justify-center items-center h-screen">
    <div class="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
      <h1 class="text-3xl font-semibold mb-3">Editar Habitación</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="numero">
              Número de Habitación:
            </label>
            <input
              type="text"
              id="numero"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="habitacion.numero"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="tipo">
              Tipo de Habitación:
            </label>
            <select
              id="tipo"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="habitacion.tipo"
              required
            >
              <!-- Opciones para el tipo de habitación -->
            </select>
          </div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="acomodacion">
            Acomodación:
          </label>
          <select
            id="acomodacion"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="habitacion.acomodacion"
            required
          >
            <!-- Opciones para el tipo de acomodación -->
          </select>
        </div>
        <!-- Otros campos del formulario aquí -->
      </div>
      <div class="mt-4">
        <a href="/">
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
