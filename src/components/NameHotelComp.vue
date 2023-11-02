<template>
  <div>
    <h1 class="flex items-center text-5xl font-extrabold dark:text-white m-1 p-1">
      Hotel<span
        class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"
      >
        {{ datos.name }}</span
      >
    </h1>
  </div>
  <ListarHabitacionesCompVue :idHotel="this.$route.params.hotelId"/> 
</template>
<script>
import ListarHabitacionesCompVue from '../components/ListarHabitacionesComp.vue';
import axios from "axios";

export default {
  name: "NameHotelComp",
  data() {
    return {
      selectedNombre: "",
      datos:{},
      idHotel:0
    };
  },
  components:{
    ListarHabitacionesCompVue
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
        const response = await axios.get("hotels/"+ this.$route.params.hotelId);
        console.log(this.$route.params.hotelId);
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
