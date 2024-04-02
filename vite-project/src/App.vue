<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

  
      <h1>HIV Diagnoses by Race and Borough</h1>

      <nav>
        <RouterLink to="/">Race</RouterLink>
        <RouterLink to="/about">Year</RouterLink>
      </nav>
   
  </header>

  <RouterView />
</template>

<style scoped>


nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}
</style>
