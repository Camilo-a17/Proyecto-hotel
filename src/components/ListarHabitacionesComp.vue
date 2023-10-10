<template>
  <div class="mt-9 p-10">
    <div class="flex flex-col justify-center">
      <!-- Table -->
      <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-800">Habitaciones</h2>
        </header>
        <div class="p-3">
          <!-- Select input for choosing the hotel -->
          <div class="flex items-center mb-4">
            <label for="hotelSelect" class="mr-2 font-semibold">Seleccionar Hotel:</label>
            <select v-model="selectedHotel" id="hotelSelect" class="border p-1 rounded">
  <option value="">Todos</option>
  <option value="Guadalupe">Guadalupe</option>
  <option value="FOREMAN">FOREMAN</option>
  <option value="HOTEL AVENIDA">HOTEL AVENIDA</option>
  <!-- Add more options for other hotels if needed -->
</select>

            
          </div>

          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Hotel</div>
                  </th><th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left"># Habitaciones</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Número</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Tipo</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Precio</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Disponibilidad</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Acción</div>
                  </th>
                </tr>
              
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr v-for="(item, index) in filteredTableData" :key="index">
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ item.hotel }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ item.habitaciones }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ item.numero }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    {{ item.tipo }}
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    {{ item.precio }}
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <span :class="item.disponibilidad === 'Disponible' ? 'text-green-500' : 'text-red-500'">{{ item.disponibilidad }}</span>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <a href="/detalle-habitaciones" class="font-medium text-blue-600 hover:underline">
                     <font-awesome-icon icon="fa-solid fa-eye" />
                    </a>
                    <a href="/edit-habitacion" class="font-medium text-blue-600 hover:underline ml-2">
                      <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    </a>
                    <a @click="showAlert" class="font-medium text-red-600 hover:underline ml-2">
                      <font-awesome-icon icon="fa-solid fa-trash" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
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
        hotel: 'Guadalupe',
        habitaciones: '200',
        numero: '101',
        tipo: 'Individual',
        precio: '$100',
        disponibilidad: 'Disponible',
      },
      {
        hotel: 'Guadalupe',
        habitaciones: '200',
        numero: '102',
        tipo: 'Doble',
        precio: '$150',
        disponibilidad: 'No Disponible',
      },
      {
        hotel: 'FOREMAN',
        habitaciones: '150',
        numero: '103',
        tipo: 'Suite',
        precio: '$200',
        disponibilidad: 'Disponible',
      },
      {
        hotel: 'HOTEL AVENIDA',
        habitaciones: '180',
        numero: '104',
        tipo: 'Individual',
        precio: '$120',
        disponibilidad: 'Disponible',
      },
      // ... Add more data entries as needed ...
    ],
  };
},

  computed: {
    filteredTableData() {
      return this.tableData.filter(item => {
        return this.selectedHotel === '' || item.hotel === this.selectedHotel;
      });
    },
  },
  methods: {
    showAlert() {
      // ... (existing showAlert method) ...
    },
    filterTable() {
      // ... (existing filterTable method) ...
    },
  },
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
