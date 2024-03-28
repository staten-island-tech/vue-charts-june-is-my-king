<template>
  <div class="container">
  <Pie v-if="loaded" class="pie" id="my-chart-id" :data="chartData" />

 
</div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'


ChartJS.register(ArcElement, Tooltip, Legend)


export default{
  name: 'PieChart',
  components: { Pie },
  data() {
    return{
      
      loaded: false,
      chartData: {
        label:[],
        datasets: [{ 
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data:[]
        }]
      }
    }
  },
  methods: {
    getData: async function(){
      try{
        const res = await fetch('https://data.cityofnewyork.us/resource/ykvb-493p.json?borough=All&sex=All&neighborhood=All&year=2021')
        const data = await res.json()
        this.test = data
        data.forEach((dataPoint)=>{
          this.chartData.label.push(dataPoint.race)
        })
   
      }catch(e){
        console.error(e)
      }
      
    } 
  },
  mounted:
  async function(){
    await this.getData()
    try {
      this.loaded = true
    } catch (error) {
      console.log(error)
    }
  
  },

}
</script>

<style scoped>
.pie{
  height: 500px;
  width: 500px;
}

.container{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}
</style>