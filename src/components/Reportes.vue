<template>
    <div class="mt-9 p-10">
      <div class="flex flex-col justify-center">
        <!-- Gráfico de habitaciones por tipo -->
        <div class="w-full max-w-lg mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
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
  
        <!-- Gráfico de acomodaciones por acomodación -->
        <div class="w-full max-w-lg mx-auto mt-8 bg-white shadow-lg rounded-sm border border-gray-200">
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">Habitaciones por Acomodación</h2>
          </header>
          <div class="p-3">
            <pie-chart
              :data="acomodacionesPorAcomodacionData"
              :options="acomodacionesPorAcomodacionOptions"
            ></pie-chart>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Bar, Pie } from 'vue-chartjs';
  import { Title, Tooltip, Legend, BarElement, LinearScale, CategoryScale } from 'chart.js';
  
  export default {
    components: {
      BarChart: Bar,
      PieChart: Pie,
    },
    data() {
      return {
        habitacionesPorTipoData: {
          labels: ['Estándar', 'Junior', 'Suite'],
          datasets: [
            {
              label: 'Total de Habitaciones',
              backgroundColor: '#36A2EB',
              data: [50, 30, 20],
            },
          ],
        },
        habitacionesPorTipoOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'category',
            },
          },
        },
        acomodacionesPorAcomodacionData: {
          labels: ['Sencilla', 'Doble', 'Triple', 'Cuádruple'],
          datasets: [
            {
              label: 'Total de Acomodaciones',
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              data: [40, 25, 20, 15],
            },
          ],
        },
        acomodacionesPorAcomodacionOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
      };
    },
    mounted() {
      this.renderChart(this.habitacionesPorTipoData, this.habitacionesPorTipoOptions);
      this.renderChart(this.acomodacionesPorAcomodacionData, this.acomodacionesPorAcomodacionOptions);
    },
  };
  </script>
  