<template>
  <Pie v-if="loaded" id="my-chart-id" :data="chartData"/>

  <canvas id="piechart" width="400" height="400"></canvas>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)
export const data = {
  labels: [],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      chartData: [40, 20, 80, 10]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}

export default{
  name: 'PieChart',
  components: { Pie },
  data(){
    return{
      test:null,
      loaded: false,
      chartData: {
        label:[],
        datasets: [{ data: [7]}]
      }
    }
  },
  methods: {
    getData: async function(){
      try{
        const res = await fetch('https://data.cityofnewyork.us/resource/ykvb-493p.json')
        const data = await res.json()
        this.test = data
        data.forEach((dataPoint)=>{
          this.chartData.labels.push(dataPoint.year)
        })
      }catch(e){
        console.error(e)
      }
      
    } 
  },
  mounted:
  async function(){
    await this.getData()
    this.loaded = true
  },
  chartData() {
    return chartConfig
  }
}
</script>