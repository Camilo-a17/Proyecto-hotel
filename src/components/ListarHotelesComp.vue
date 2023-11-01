<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const selectedHotel = ref('')
const datos = ref([]) // Declarar datos como una referencia

// Inicializar componentes basados en selectores de atributos de datos
onMounted(() => {
  cargarDatos()
})

const cargarDatos = async () => {
  try {
    const response = await axios.get('hotels')
    datos.value = response.data.data // Asignar datos.value con los datos correctos
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="mt-9 p-10">
    <div class="flex flex-col justify-center">
      <div class="bg-white shadow-lg rounded-sm border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <p class="font-bold text-gray-800 text-5xl">Hoteles</p>
        </header>
        <div class="p-3">
          <div class="flex items-center mb-4">
            <label for="habitSelect" class="mr-2 font-semibold">Seleccionar Hotel:</label>
            <select v-model="selectedHotel" id="habitSelect" class="border p-1 rounded">
              <option value="">Todos</option>
              <option value="GUADALUPE">Guadalupe</option>
              <option value="EMPERADOR">Emperador</option>
              <option value="FOREMAN">Foreman</option>
              <option value="HOTEL AVENIDA">Hotel Avenida</option>
              <!-- Agrega más opciones para otros hoteles si es necesario -->
            </select>
          </div>
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Hotel</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">NIT</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left"># Habitaciones</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Dirección</div>
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
                    <div class="font-medium text-gray-800">{{ fila.name }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ fila.nit }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ fila.num_rooms }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ fila.address }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <a href="/detalle" class="font-medium text-blue-600 hover:underline">
                      <i class="fas fa-eye"></i>
                      <font-awesome-icon icon="fa-solid fa-eye" />
                    </a>
                    <a
                      :href="'/editarHotel/' + fila.id"
                      class="font-medium text-blue-600 hover:underline ml-2"
                    >
                      <i class="fas fa-edit"></i>
                      <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    </a>

                    <a
    @click="showAlert(fila.id)"
    class="font-medium text-red-600 hover:underline ml-2"
  >
    <i class="fas fa-trash"></i> Eliminar
  </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <a href="/about">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-4 p-4"
              >
                Crear Hotel
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'ListarHotelesComp',
  data() {
    return {
      selectedHotel: '',
      datos: [] // Inicializa la variable de datos como un arreglo vacío
    };
  },

  computed: {
    filteredTableData() {
      return this.datos.filter((item) => {
        return this.selectedHotel === '' || item.hotel === this.selectedHotel;
      });
    }
  },

  methods: {
    cargarDatos: async function() {
      try {
        const response = await axios.get('hotels');
        this.datos = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    showAlert: function(id) {
      this.$swal({
        title: '¿Está seguro?',
        text: '¿Está seguro de que desea eliminar este hotel?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          this.eliminarHotel(id);
        }
      });
    },

    eliminarHotel: async function(id) {
      try {
        const response = await axios.delete(`hotels/${id}`);
        if (response.status === 200) {
          this.$swal('¡Enhorabuena!', 'Hotel eliminado con éxito', 'success');
          // Encuentra el índice del hotel en el arreglo
          const index = this.datos.findIndex((hotel) => hotel.id === id);
          if (index !== -1) {
            // Elimina el hotel del arreglo datoss
            this.datos.splice(index, 1);
          }
        } else {
          this.$swal('Error', 'Algo salió mal', 'error');
        }
      } catch (error) {
        console.error(error);
        this.$swal('Error', 'Hubo un error al eliminar el hotel', 'error');
      }
    }
  },

  mounted: function() {
    this.cargarDatos();
  }
};
</script>