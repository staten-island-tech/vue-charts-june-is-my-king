<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'

export default {
  name: 'bar',
  props: {
    msg: String
  },

mounted: function(){this.fetchdata()},
  methods: {
    async fetchdata() {
      fetch('https://data.cityofnewyork.us/resource/s6eb-zqd5.json', {
        method: 'GET',
      })
        .then(response => {
          response.json().then(res => console.log(res));
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  

};




</script>
