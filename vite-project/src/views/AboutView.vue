<template>
 
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />

  <canvas id="barchart" width="400" height="400"></canvas>  

</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// const { data }

// export default {
//   name: 'bar',
//   props: {
//     msg: String
//     loaded: Boolean
//   },

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

//   const ctx = document.getElementById('barchart');\

  
//  if () {

//  }

// };


// export default {
//   name: 'BarChart',
//   components: { Bar },
//   data() {
//     return {
//       chartData: {
//         labels: ['2016', '2017', '2018', '2019', '2020', '2021' ],
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
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false

    try {
      const { yearvalue } = await fetch('https://data.cityofnewyork.us/resource/ykvb-493p.json?borough=All&race=All&neighborhood=All&sex=All')
      this.chartdata = yearvalue

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}

</script>
