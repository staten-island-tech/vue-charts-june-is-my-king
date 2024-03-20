<template>
  <div class="container">
    <h1>pie chart by race</h1>
    <Pie v-if="loaded" :data="chartData" />
  </div>
</template>

<script>

// import { Pie } from 'vue-chartjs'
export const data = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
    }
  ]
}
import PieChart from './PieChart.js'
export default {
  name: 'piechart',
  props: {
    components: {
      PieChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.fillData;
      })
    },
    methods: {
      fillData () {
        this.$http.get('/api/data/line/scenarios_by_day')
            .then(response => {
            this.datacollection = response.data;
        });
      },
    }
  },
  

mounted: function(){this.fetchdata()},
  methods: {
    async fetchdata() {
      fetch('https://data.cityofnewyork.us/resource/ykvb-493p.json?race=Black', {
        method: 'GET',
      })
        .then(response => {
          response.json().then(res => console.log(res));
        })
        .catch(err => {
          console.error(err);
        });
    }
  },


};





</script>

<style scoped>

</style>
