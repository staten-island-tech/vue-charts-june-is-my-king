<template>

  <Bar v-if="loaded" id="my-chart-id" :data="chartData" />

  <canvas id="barchart" width="400" height="400"></canvas>

</template>


<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// export default {
//   name: 'BarChart',
//   components: { Bar },
//   data() {
//     return {
//       chartData: {
//         labels: [ 'January', 'February', 'March' ],
//         datasets: [ { data: [40, 20, 12] } ]
//       },
//       chartOptions: {
//         responsive: true
//       }
//     }
//   }
// }



export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      test: null,
      loaded: false,
      chartData: {
        labels: [],
        backgroundColor: '#daefdc',
        datasets: [{ data: [1] }]
      }
    }
  },
  methods: {
    getData: async function () {
      try {
        const res = await fetch('https://data.cityofnewyork.us/resource/ykvb-493p.json?borough=All&race=All&neighborhood=All&sex=All')
        const data = await res.json()
        this.test = data
        data.forEach((dataPoint)=>{
          this.chartData.labels.push(dataPoint.year)
        })


      } catch (e) {
        console.error(e)
      }
    }
  },
  mounted: 
    async function() {
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