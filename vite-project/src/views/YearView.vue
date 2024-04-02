<template>
  <Bar v-if="loaded" id="my-chart-id" :data="chartData" class="barchart" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      test: null,
      loaded: false,
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Diagnoses',
            backgroundColor: '#B0413E',
            data: []
          }
        ]
      }
    }
  },
  methods: {
    getData: async function () {
      try {
        const res = await fetch(
          'https://data.cityofnewyork.us/resource/ykvb-493p.json?borough=All&race=All&neighborhood=All&sex=All'
        )
        const data = await res.json()
        this.test = data
        data.forEach((dataPoint) => {
          this.chartData.labels.push(dataPoint.year)
          const diagnosesValues = data.map((dataPoint) => dataPoint.hiv_diagnoses_num)
          this.chartData.datasets[0].data = diagnosesValues
        })
      } catch (e) {
        console.error(e)
      }
    }
  },

  mounted: async function () {
    await this.getData()
    this.loaded = true
  }
}

// mounted: function () { this.fetchdata() },
// methods: {
//   async fetchdata() {
//     loaded=false;
//     fetch('https://data.cityofnewyork.us/resource/ykvb-493p.json?borough=All&race=All&neighborhood=All&sex=All', {
//       method: 'GET',
//     })
//       .then(response => {
//         response.json().then(res => console.log(res));
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }
// },
</script>

<style scoped>
.barchart {
  padding-top: 0%;
}
</style>
