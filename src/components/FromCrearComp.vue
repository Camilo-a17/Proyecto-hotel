<script>

import { ref, onMounted } from 'vue'
import axios from "axios";

export default {
  data() {
    return {
      contador: 0,
      errores: {},
      ciudades: [], // Lista de ciudades
      formulario: {
        city_id: null,
        name: null,
        nit: null,
        address: null,
        num_rooms: null
      }
    };
  },
  methods: {
  enviar() {
    axios.post('hotels', this.formulario)
      .then(response => {
        // Registro exitoso
        this.$swal({
          title: "Éxito",
          text: "El hotel se ha creado con éxito",
          icon: "success",
          confirmButtonText: "Aceptar"
        }).then(() => {
          this.$router.push('/list'); // Redireccionar a "/list"
        });
      })
      .catch(error => {
        if (error.response.status === 422) {
          if (error.response.data.errors) {
            this.errores = error.response.data.errors;
          }
        } else {
          // Otro tipo de error
          console.error(error);
        }
      });
  }
},

  mounted() {
    axios.get('cities')
      .then(response => {
        console.log(response.data);
        this.ciudades = response.data; // Llenar la lista de ciudades
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>


<template>
    <BreadCrumb modulo="Hotel" accion="Crear" />

    <div class="grid grid-cols-2 my-6 text-gray-700">
        <div class="flex items-center">
            <BuildingOfficeIcon class="w-10" />
            <h2 class="mb-1 text-4xl font-bold dark:text-white">Nuevo Hotel</h2>
        </div>
        <div class="flex justify-end">
            <!-- <button @click="loadData()" type="button" class="boton-1">Crear nuevo</button> -->
        </div>
    </div>



    <!-- <form> -->
      <div class="mb-6">
    <label for="ciudades" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciudad</label>
    <select v-model="formulario.city_id" id="ciudades"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Seleccione una ciudad...</option>
      <option v-for="ciudad in ciudades" :value="ciudad.id" :key="ciudad.id">{{ ciudad.name }}</option>
    </select>
    <div v-if="errores.city_id" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500 text-red-700">
      {{ errores.city_id[0] }}
    </div>
  </div>

  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
      <input v-model="formulario.name" type="text" id="nombre"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Ingrese el nombre del hotel">
      <div v-if="errores.name" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500 text-red-700">
        {{ errores.name[0] }}
      </div>
    </div>
    <div>
      <label for="nit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIT</label>
      <input v-model="formulario.nit" type="text" id="nit"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="NIT del hotel">
      <div v-if="errores.nit" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500 text-red-700">
        {{ errores.nit[0] }}
      </div>
    </div>
    <div>
      <label for="direccion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
      <input v-model="formulario.address" type="text" id="direccion"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Ubicación del hotel">
      <div v-if="errores.address" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500 text-red-700">
        {{ errores.address[0] }}
      </div>
    </div>
    <div>
      <label for="num_hab" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de habitaciones</label>
      <input v-model="formulario.num_rooms" type="number" id="num_hab"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <div v-if="errores.num_rooms" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500 text-red-700">
        {{ errores.num_rooms[0] }}
      </div>
    </div>
  </div>


    <button @click="enviar()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear
        hotel</button>
    <!-- </form> -->
</template>


