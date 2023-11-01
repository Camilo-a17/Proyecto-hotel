<script>

import { ref, onMounted } from 'vue'
import axios from "axios";

export default {
  data() {
    return {
      contador: 0,
      errores: {},
      tipos: [], // Lista de ciudades
      acomodo: [],
      
      formulario: {
        
        name: null,
        
      }
    };
  },
  methods: {
    enviar() {
      axios.post('room-types',this.formulario)
         .then(response => {
          // Registro exitoso
          this.$router.push('/detalle'); // Redireccionar a "/detalle"
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
    axios.get('room-types')
      .then(response => {
        console.log(response.data);
        this.tipos = response.data;
                
        
      })
      .catch(error => {
        console.log(error);
      });
      axios.get('rooms/11')
      .then(response => {
        console.log(response.data);
        this.acomodo = response.data;
                
        
      })
      .catch(error => {
        console.log(error);
      });
  },
  
  
};
</script>


<template>
    <BreadCrumb modulo="Habitacion" accion="Crear" />

    <div class="grid grid-cols-2 my-6 text-gray-700">
        <div class="flex items-center">
            <BuildingOfficeIcon class="w-10" />
            <h2 class="mb-1 text-4xl font-bold dark:text-white">Nueva Habitacion</h2>
        </div>
        <div class="flex justify-end">
            <!-- <button @click="loadData()" type="button" class="boton-1">Crear nuevo</button> -->
        </div>
    </div>



    <!-- <form> -->
      <div>
            <label for="numbero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero</label>
            <input v-model="formulario.numero" type="number" id="numero"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Numero De Habitacion">
        </div>
    <div class="mb-6">
        <label for="tipos" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
        <select v-model="formulario.name" id="tipos"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Seleccione un tipo ...</option>
            <option v-for="tipo in  tipos " :value="tipo.id" :key="tipo.id">{{ tipo.name }}</option>
        </select>
        <div v-if="errores.name" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500"> {{ errores.city_id[0] }}
        </div>
    </div>

    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div class="mb-6">
        <label for="acomodo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Acomodacion</label>
        <select v-model="formulario.name" id="acomodo"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Seleccione una Acomodacion ...</option>
            <option v-for="ac in acomodo " :value="ac.id" :key="ac.id">{{ ac.name }}</option>
        </select>
        <div v-if="errores.name" class="p-2 mt-1 rounded-lg bg-red-50 border border-red-500"> {{ errores.name[0] }}
        </div>
    </div>       


    </div>

    <button @click="enviar()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear
        habitacion</button>
    <!-- </form> -->
</template>


