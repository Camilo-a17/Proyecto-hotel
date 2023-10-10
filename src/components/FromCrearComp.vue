<template>
  <div class="mt-9 flex justify-center items-center h-screen">
    <div class="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
      <h1 class="text-3xl font-semibold mb-3">Crear Hotel</h1>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          id="ciudad"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          v-model="hotelEditado.ciudad"
          required
          @focus="isTypingCiudad = true"
          @blur="isTypingCiudad = false"
        />
        <label v-if="!isTypingCiudad" for="ciudad" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Ciudad:</label>
        <span v-if="!hotelEditado.ciudad && !isTypingCiudad" class="text-sm text-red-600">Este campo es requerido</span>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          id="nombre"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          v-model="hotelEditado.nombre"
          required
          @focus="isTypingNombre = true"
          @blur="isTypingNombre = false"
        />
        <label v-if="!isTypingNombre" for="nombre" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nombre del Hotel:</label>
        <span v-if="!hotelEditado.nombre && !isTypingNombre" class="text-sm text-red-600">Este campo es requerido</span>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          id="nit"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          v-model="hotelEditado.nit"
          required
          @focus="isTypingNit = true"
          @blur="isTypingNit = false"
        />
        <label v-if="!isTypingNit" for="nit" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">NIT:</label>
        <span v-if="!hotelEditado.nit && !isTypingNit" class="text-sm text-red-600">Este campo es requerido</span>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          id="direccion"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          v-model="hotelEditado.direccion"
          required
          @focus="isTypingDireccion = true"
          @blur="isTypingDireccion = false"
        />
        <label v-if="!isTypingDireccion" for="direccion" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Dirección:</label>
        <span v-if="!hotelEditado.direccion && !isTypingDireccion" class="text-sm text-red-600">Este campo es requerido</span>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="number"
          id="habitaciones"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          v-model="hotelEditado.habitaciones"
          required
          @focus="isTypingHabitaciones = true"
          @blur="isTypingHabitaciones = false"
        />
        <label v-if="!isTypingHabitaciones" for="habitaciones" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Número máximo de habitaciones:</label>
        <span v-if="!hotelEditado.habitaciones && !isTypingHabitaciones" class="text-sm text-red-600">Este campo es requerido</span>
      </div>

      <div class="mt-4">
        <a href="/list">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Crear Hotel
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
      hotelEditado: {
        ciudad: '',
        nombre: '',
        nit: '',
        direccion: '',
        habitaciones: null
      },
      isTypingCiudad: false,
      isTypingNombre: false,
      isTypingNit: false,
      isTypingDireccion: false,
      isTypingHabitaciones: false
    }
  },
  methods: {
    guardarCambios() {
      // Envía los datos editados del hotel al backend para su creación
      // Luego, redirige a la lista de hoteles
    },
  },
}
</script>
