<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
</script>
<template>
  <div class="mt-9 p-10">
    <div class="flex flex-col justify-center">
      <!-- Table -->
      <div class="bg-white shadow-lg rounded-sm border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <p><font class="font-bold text-gray-800" size="5">Habitaciones</font></p>
        </header>
        <div class="p-3">          
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Número</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Tipo</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Acomodacion</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Acción</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr
                  v-for="fila in datos"
                  :key="fila.id"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ fila.id }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    {{ fila.type.name }}
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    {{ fila.accommodation.name }}
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <a
                      :href="'/detalle-habitaciones/' + fila.id"
                      class="font-medium text-blue-600 hover:underline"
                    >
                      <font-awesome-icon icon="fa-solid fa-eye" />
                    </a>
                    <a
                      :href="'/edit-habitacion/' + fila.id"
                      class="font-medium text-blue-600 hover:underline ml-2"
                    >
                      <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    </a>
                    <a
                      @click="showAlert(fila.id)"
                      class="font-medium text-red-600 hover:underline ml-2"
                    >
                      <font-awesome-icon icon="fa-solid fa-trash" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Modal toggle -->
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Crear Habitacion
            </button>

            <!-- Main modal -->
            <div
              id="default-modal"
              tabindex="-1"
              aria-hidden="true"
              class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                    <FormCrearHabitacion :idHotel="idHotel" />
                  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FormCrearHabitacion from '../components/FormCrearHabitacion.vue';

export default {
  name: 'ListarHabitacionesComp',
  props: {
    idHotel: Number
  },
  components: {
    FormCrearHabitacion
  },
  data() {
    return {
      selectedHabitation: '',
      datos: [] // Inicializa la variable de datos como un arreglo vacío
    }
  },

  computed: {
    filteredTableData() {
      return this.datos.filter((item) => {
        return (
          this.selectedHabitation === '' ||
          item.type === this.selectedHabitation ||
          item.accommodation === this.selectedHabitation
        )
      })
    }
  },

  methods: {
    cargarDatos: async function () {
      try {
        const response = await axios.get('rooms/' + this.idHotel)
        this.datos = response.data.data
        console.log(response.data.data)
      } catch (error) {
        console.error(error)
      }
    },

    showAlert: function (id) {
      this.$swal({
        title: '¿Está seguro?',
        text: '¿Está seguro de que desea eliminar esta habitacion?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          this.eliminarHotel(id)
        }
      })
    },

    eliminarHotel: async function (id) {
      try {
        const response = await axios.delete(`rooms/${id}`)
        if (response.status === 200) {
          this.$swal('¡Enhorabuena!', 'Habitacion eliminada con éxito', 'success')
          // Encuentra el índice del hotel en el arreglo
          const index = this.datos.findIndex((type) => type.id === id)
          if (index !== -1) {
            // Elimina el hotel del arreglo datoss
            this.datos.splice(index, 1)
          }
        } else {
          this.$swal('Error', 'Algo salió mal', 'error')
        }
      } catch (error) {
        console.error(error)
        this.$swal('Error', 'Hubo un error al eliminar la habitacion', 'error')
      }
    }
  },

  mounted: function () {
    this.cargarDatos()
  }
}
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
