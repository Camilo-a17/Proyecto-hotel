<template>
  <div class="mt-9 p-10">
    <div class="flex flex-col justify-center">
      <!-- Table -->
      <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-800">Habitaciones</h2>
        </header>
        <div class="p-3">
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
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">Guadalupe</div>
                  </td><td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">200</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">101</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    Individual
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    $100
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <span class="text-green-500">Disponible</span>
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
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">Guadalupe</div>
                  </td><td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">200</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">102</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    Doble
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    $150
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <span class="text-red-500">No Disponible</span>
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
                <!-- Puedes agregar más filas con datos aquí -->
              </tbody>
            </table>
            <a href="/crear"><button  type="button"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-4 p-4">Crear Habitacion</button></a>
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
      this.$swal({title: 'Cuidado!!',
      text: "¿Desea eliminar esta Habitacion?",
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
