<template>
  <div class="container">
    <h1>pie chart PSAL by race</h1>
    <Pie v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
// import { Pie } from 'vue-chartjs'

export default {
  name: 'pie',
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
