<template>
  <div class="container">
    <Pie v-if="loaded" class="pie" id="my-chart-id" :data="chartData" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: [
          {
            label: ['Diagnoses'],
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#311847', '#DCD6F7'],
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
          'https://data.cityofnewyork.us/resource/ykvb-493p.json?borough=All&sex=All&neighborhood=All&year=2021'
        )
        const data = await res.json()
        this.test = data

        data.forEach((dataPoint) => {
          this.chartData.labels.push(dataPoint.race)
          const diagnosesValues = data.map((dataPoint) => dataPoint.hiv_diagnoses_num)
          this.chartData.datasets[0].data = diagnosesValues
        })
        console.log(this.chartData.label)
      } catch (e) {
        console.error(e)
      }
    }
  },
  mounted: async function () {
    await this.getData()
    try {
      this.loaded = true
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
.pie {
  height: 500px;
  width: 500px;
}

.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}
</style>
