<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const selectedNombre = ref("");
const datos = ref([]); // Declarar datos como una referencia

// Inicializar componentes basados en selectores de atributos de datos
onMounted(() => {
  cargarDatos();
});

const cargarDatos = async () => {
  try {
    const response = await axios.get("hotels");
    datos.value = response.data.data; // Asignar datos.value con los datos correctos
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <div v-for="fila in datos" :key="fila.id">
    <h1 class="flex items-center text-5xl font-extrabold dark:text-white m-1 p-1">
      Hotel<span
        class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"
      >
        {{ fila.name }}</span
      >
    </h1>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "NameHotelComp",
  data() {
    return {
      selectedNombre: "",
      datos: [], // Inicializa la variable de datos como un arreglo vacío
    };
  },

  computed: {
    filteredTableData() {
      return this.datos.filter((item) => {
        return this.selectedNombre === "" || item.hotel === this.selectedNombre;
      });
    },
  },

  methods: {
    cargarDatos: async function () {
      try {
        const response = await axios.get("hotels");
        this.datos = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },

  mounted: function () {
    this.cargarDatos();
  },
};
</script>
