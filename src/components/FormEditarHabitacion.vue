<template>
  <div>
    <div class="grid grid-cols-2 my-6 text-gray-700">
      <div class="flex items-center">
        <BuildingOfficeIcon class="w-10" />
        <h2 class="mb-1 text-4xl font-bold dark:text-white">Actualizar Habitacion</h2>
      </div>
      <div class="flex justify-end">
        <!-- Puedes agregar botones adicionales si es necesario -->
      </div>
    </div>

    <div class="mb-6">
      <div>
        <label for="nume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Numero</label
        >
        <input
          v-model="formulario.quantity"
          type="number"
          id="nume"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingrese el numero del hotel"
        />
        <div v-if="errores.quantity" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500">
          {{ errores.quantity[0] }}
        </div>
      </div>
      <label for="habitaciones" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Tipo</label
      >
      <select 
        v-model="formulario.type" required
        id="habitaciones"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected :value="room_type_id.id">{{ room_type_id.name }}</option>
        <option v-for="tipo in  tipos_habitaciones " :value="tipo.id" :key="tipo.id">{{ tipo.name }}</option>
        
      </select>
      <div v-if="errores.tipo" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500">
        {{ errores.tipo[0] }}
      </div>
    </div>

    <label for="habitaciones" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Acomodacion</label
    >
    <select
      v-model="formulario.city_id"
      id="habitaciones"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected>Seleccione una Acomodacion...</option>
      <option v-for="habi in habitaciones" :value="habi.id" :key="habi.id">{{ habi.name }}</option>
    </select>
    <div v-if="errores.city_id" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500">
      {{ errores.city_id[0] }}
    </div>
  </div>

  <div class="m-2 mt-3 w-52 items-center">
    <button
      @click="actualizarHotel"
      class="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm w-full sm-w-auto px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
    >
      Actualizar
    </button>
  </div>
</template>
>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      errores: {},
      tipos_habitaciones: [], 
      formulario: {
      },
      accomodation_id: {},
      room_type_id: {}
    }
  },
  methods: {
    actualizarHotel() {
      const habitacionId = this.$route.params.habitacionId
      axios
        .put(`rooms/${habitacionId}`, this.formulario) // Reemplaza "hotelId" con el ID del hotel a actualizar
        .then((response) => {
          this.$swal({
            title: 'ok',
            text: 'actualizado con exito',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí'
          }).then((result) => {
            if (result.value) {
              this.$router.push('/list')
            }
          })
          // Actualización exitosa
          // Redireccionar a "/list"
        })
        .catch((error) => {
          if (error.response.status === 422) {
            if (error.response.data.errors) {
              this.errores = error.response.data.errors
            }
          } else {
            // Otro tipo de errorpp
            console.error(error)
          }
        })
    }
  },
  mounted() {
    // Aquí debes cargar los datos del hotel que deseas editar utilizando su ID y llenar el formulario
    const habitacionId = this.$route.params.habitacionId
    axios
      .get('rooms/show/' + habitacionId)
      .then((response) => {
        this.formulario = response.data.data
        this.room_type_id = this.formulario.type
        console.log(this.formulario.type) // Llenar el formulario con los datos del hotel

        axios
          .get('room-types')
          .then((response) => {
            this.tipos_habitaciones = response.data.filter(
              (habitacion) => habitacion.id != this.room_type_id.id
            )
          })
          .catch((error) => {
            console.log(error)
          })

      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
