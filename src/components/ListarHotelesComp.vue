<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>
<template>
  <!-- Table -->
      <div class="mt-9 p-10">
    <div class="flex flex-col justify-center">
      <!-- Table -->
      <div class="bg-white shadow-lg rounded-sm border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <p><font class="font-bold text-gray-800" size="5">Hoteles</font></p>
        </header>
        <div class="p-3">
          <!-- Select input for choosing the hotel -->
          <div class="flex items-center mb-4">
            <label for="habitSelect" class="mr-2 font-semibold">Seleccionar Hotel:</label>
            <select v-model="selectedHotel" id="habitSelect" class="border p-1 rounded">
              <option value="">Todos</option>
              <option value="GUADALUPE">Gudalupe</option>
              <option value="EMPERADOR">Emperador</option>
              <option value="FOREMAN">Foreman</option>
              <option value="HOTEL AVENIDA">Hotel Avenida</option>
              <!-- Add more options for other hotels if needed -->
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
                <tr v-for="(item, index) in filteredTableData" :key="index">
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ item.hotel }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ item.nit }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ item.habitaciones }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    {{ item.direccion }}
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <a href="/detalle" class="font-medium text-blue-600 hover:underline">
                      <i class="fas fa-eye"></i>
                      <font-awesome-icon icon="fa-solid fa-eye" />
                    </a>
                    <a href="/edit" class="font-medium text-blue-600 hover:underline ml-2">
                      <i class="fas fa-edit"></i>
                      <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    </a>
                    <a @click="showAlert" class="font-medium text-red-600 hover:underline ml-2">
                      <i class="fas fa-trash"></i>
                      <font-awesome-icon icon="fa-solid fa-trash" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <a href="/about"><button  type="button"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-4 p-4">Crear Hotel</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SweetAlert2',
  data() {
    return {
      selectedHotel: '',
      tableData: [
        {
          hotel: 'GUADALUPE',
          nit: '123456789-8',
          habitaciones: '150',
          direccion: 'Barrio Guadalupe'
        },
        {
          hotel: 'EMPERADOR',
          nit: '287634596-2',
          habitaciones: '200',
          direccion: 'Troncal de Occidente'
        },
        {
          hotel: 'FOREMAN',
          nit: '987654321-6',
          habitaciones: '100',
          direccion: 'Troncal de Occidente'
        },
        {
          hotel: 'HOTEL AVENIDA',
          nit: '1003501251-3',
          habitaciones: '80',
          direccion: 'Avenida el Hospital'
        }
        // ... Add more data entries as needed ...
      ]
    }
  },

   computed: {
    filteredTableData() {
      return this.tableData.filter((item) => {
        return this.selectedHotel === '' || item.hotel === this.selectedHotel
      })
    }
  },

  methods: {
    showAlert() {
      this.$swal({title: 'Cuidado!!',
        text: "¿Desea eliminar este Hotel?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
          if(result.value) {
            this.$swal('Enhorabuena', 'Eliminado con exito', 'success')
          }
        });
    },
  },
};
</script>
```