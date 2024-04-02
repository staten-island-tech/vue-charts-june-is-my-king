<template>
  <div class="header">
    <h2>Cases with over 1500 diagnoses:</h2>
    <div class="many">
      <h2 v-for="item in cases" :key="item.hiv_diagnoses_num">
        {{ item.year }}: {{ item.hiv_diagnoses_num }} diagnoses
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cases: []
    }
  },
  methods: {
    getData: async function () {
      try {
        const res = await fetch(
          'https://data.cityofnewyork.us/resource/ykvb-493p.json?borough=All&sex=All&neighborhood=All'
        )

        const data = await res.json()
        this.test = data
        data.forEach((point) => {
          if (point.hiv_diagnoses_num > 1500) {
            this.cases.push(point)
          }
        })
        console.log(this.cases)
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
.header,
.many {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  font-size: 20px;
  margin: 2rem;
}
</style>
