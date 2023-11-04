<template>
  <div class="m-3 mt-9">
    <Radar :data="data" :options="options" />
    
  </div>
  
</template>

<script>
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'



ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default {
  name: 'ReporteHoteles',
  components: {
    Radar
  },
  data() {
    return {
      data: {
        labels: ['Bogota', 'Medellin', 'Cali', 'Cartagena', 'Monteria', 'Barranquilla', 'San Andres'],
  datasets: [
    {
      label: 'Ciudades',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
  
      },
      options: {
        responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    intersect: false
  }
      }
    }
  }
}
</script>
