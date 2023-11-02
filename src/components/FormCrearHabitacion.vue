<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  props: {
    idHotel: Number
  },
  data() {
    return {
      contador: 0,
      errores: {},
      tipos: [], // Lista de ciudades
      acomodo: [],
      restriccion: '',

      formulario: {
        hotel_id: null,
        room_type_id: null,
        accommodation_id: null,
        quantity: null
      }
    }
  },
  methods: {
    enviar() {
      this.formulario.hotel_id = this.idHotel
      console.log(this.formulario)
      axios
        .post('rooms', this.formulario)
        .then((response) => {
          console.log(response.data.data)
          // Registro exitoso
          console.log(this.formulario)
          console.log(this.idHotel);
          location.reload();// Redireccionar a "/detalle"
        })
        .catch((error) => {
          this.restriccion = error.response.data
          this.$swal('Error', this.restriccion.message, 'error')
        })
    },
    limpiar() {
      ;(this.formulario.hotel_id = null),
        (this.formulario.room_type_id = null),
        (this.formulario.accommodation_id = null),
        (this.formulario.quantity = null)
    }
  },
  mounted() {
    axios
      .get('room-types')
      .then((response) => {
        console.log(response.data)
        this.tipos = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get('accommodation-types')
      .then((response) => {
        console.log(response.data)
        this.acomodo = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<template>
  <!-- <form> -->
  <div class="relative w-full max-w-2xl max-h-full">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <!-- Modal header -->
      <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Crear Habitacion</h3>
        <button @click="limpiar()"
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="default-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-6 space-y-6">
        <div>
          <label for="numbero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Cantidad</label
          >
          <input
            v-model="formulario.quantity"
            type="number"
            id="numero"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cantidad"
          />
        </div>
        <div class="mb-6">
          <label for="tipos" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Tipo</label
          >
          <select
            v-model="formulario.room_type_id"
            id="tipos"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Seleccione un tipo ...</option>
            <option v-for="tipo in tipos" :value="tipo.id" :key="tipo.id">{{ tipo.name }}</option>
          </select>
          <div v-if="errores.name" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500">
            {{ errores.city_id[0] }}
          </div>
        </div>
        <div class="mb-6">
          <label for="acomodo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Acomodacion</label
          >
          <select
            v-model="formulario.accommodation_id"
            id="acomodo"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Seleccione una Acomodacion ...</option>
            <option v-for="ac in acomodo" :value="ac.id" :key="ac.id">{{ ac.name }}</option>
          </select>
          <div v-if="errores.name" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500">
            {{ errores.name[0] }}
          </div>
        </div>

        <button
          @click="enviar()"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Crear habitacion
        </button>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>
