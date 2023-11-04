<template>
  <div>
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return {
      num_total_hotel: 0,
      datos: [],
      cityData: {
        Monteria: 9,
        Bogota: 9,
        Barranquilla: 6,
        Medellin: 5,
        Cali: 10,
        SanAndres: 2,
        Cartagena: 6,
      },
      chartData: {
        labels: [ 'Monteria','cali','Bogota'
        ],

        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E466561',
              '#00D8FF',
              
              
            ],
            data: [9,9,6]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.cargarDatos();
  },
  watch: {
    cityData: {
      deep: true,
      handler(newCityData) {
        for (const city in newCityData) {
          console.log(city);
          const index = this.chartData.labels.indexOf(city);
          if (index !== -1) {
            this.chartData.datasets[0].data[index] = newCityData[city];
            console.log(this.chartData.datasets[0].data[index]);
          }
        }
      }
    }
  },
  methods: {
    cargarDatos: async function () {
      try {
        const response = await axios.get("hotels");
        this.datos = response.data.data;

        const cityIdMap = {
          Monteria: 1,
          Bogota: 2,
          Barranquilla: 3,
          Medellin: 4,
          Cali: 5,
          SanAndres: 6,
          Cartagena: 7,
        };

        this.chartData.labels.forEach(city => {
          const cityId = cityIdMap[city]; // Obtén el ID de la ciudad desde tu mapeo
          this.cityData[city] = this.datos.filter(h => h.city_id === cityId).length;
        });

        this.totalHoteles();

        this.labe
      } catch (error) {
        console.error(error);
      }
    },
    totalHoteles() {
      this.num_total_hotel = this.chartData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
    }
  }
}
</script>
