<template>
  <div class="container">
    <Pie v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
// import { Pie } from 'vue-chartjs'


export default{
  let :dataa = [],
  const :url= "https://data.cityofnewyork.us/resource/ykvb-493p.json",

async mounted(url) {
  try {
    const response = await fetch(url);
    const dataa = await response.json();
    insert(dataa);
    console.log("Data:", dataa[0]);
    getData(dataa);
  } catch (error) {
    console.log(error);
  }
}


}
</script>