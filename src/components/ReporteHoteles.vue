<template>
  <div class="mt-9 p-10">
    <div class="flex flex-col justify-center">
      <div class="flex">
        <!-- Gráfico de habitaciones por tipo -->
        <div class="w-full max-w-lg bg-white shadow-lg rounded-sm border border-gray-200 mr-8">
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">Habitaciones por Tipo</h2>
          </header>
          <div class="p-3">
            <bar-chart
              :data="habitacionesPorTipoData"
              :options="habitacionesPorTipoOptions"
            ></bar-chart>
          </div>
        </div>

        <!-- Gráfico de total de habitaciones por hotel -->
        <div class="w-full max-w-lg bg-white shadow-lg rounded-sm border border-gray-200">
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">Total de Habitaciones por Hotel</h2>
          </header>
          <div class="p-3">
            <bar-chart
              :data="habitacionesPorHotelData"
              :options="habitacionesPorHotelOptions"
            ></bar-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { Bar } from 'vue-chartjs'

export default {
  components: {
    BarChart: Bar
  },
  data() {
    return {
      habitacionesPorTipoData: {
        labels: ['Estándar', 'Junior', 'Suite'],
        datasets: [
          {
            label: 'Hotel A',
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            data: [30, 20, 10]
          },
          {
            label: 'Hotel B',
            backgroundColor: ['#4BC0C0', '#FF5733', '#7CB342'],
            data: [20, 10, 10]
          }
        ]
      },
      habitacionesPorTipoOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category'
          },
          y: {
            beginAtZero: true
          }
        }
      },
      habitacionesPorHotelData: {
        labels: ['Hotel A', 'Hotel B'],
        datasets: [
          {
            label: 'Total de Habitaciones',
            backgroundColor: ['#36A2EB', '#FFCE56'],
            data: [60, 40]
          }
        ]
      },
      habitacionesPorHotelOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category'
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.habitacionesPorTipoData, this.habitacionesPorTipoOptions)
    this.renderChart(this.habitacionesPorHotelData, this.habitacionesPorHotelOptions)
  }
}
</script>
  