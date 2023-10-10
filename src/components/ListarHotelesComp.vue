<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>
<template>
  <div class="mt-9 p-10">
    <div class="w-full max-w-3xl mx-auto">
      <!-- Table -->
      <div class="bg-white shadow-lg rounded-sm border border-gray-200">
      <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">Hoteles</h2>
      </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Ciudad</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Nombre del Hotel</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">NIT</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Dirección</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Número Máximo de Habitaciones</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Acción</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="font-medium text-gray-800">Ciudad 1</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">Emperador</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">123456789</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">calle 15</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">100</div>
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
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="font-medium text-gray-800">Sahagun</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">Foreman</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">987654321</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">troncal Occidente</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">150</div>
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
                <!-- Puedes agregar más filas con datos aquí -->
              </tbody>
            </table>
            <a href="/about"
              ><button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-4 p-4"
              >
                Crear Hotel
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SweetAlert2',
  methods: {
    showAlert() {
      this.$swal({
        title: 'Cuidado!!',
        text: '¿Desea eliminar esta Hotel?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          this.$swal('Enhorabuena', 'Eliminado con exito', 'success')
        }
      })
    }
  }
}
</script>
```