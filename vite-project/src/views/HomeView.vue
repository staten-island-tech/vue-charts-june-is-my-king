<template>
  <div class="container">
    <!-- <Pie v-if="loaded" :data="chartData" /> -->
  </div>
</template>

<script>
// import { Pie } from 'vue-chartjs'
export default{
  name:'pie',
  props:{
    msg: String
  },
  methods:{
    fetchData(){
      fetch('https://data.cityofnewyork.us/resource/s6eb-zqd5.json',{
      method: 'GET',
    })
    .then(response =>{
      response.json(). then (res=>console.log(res));
    })
    .catch(err=>{
      console.error(err);
    })

    }
  }

}


</script>