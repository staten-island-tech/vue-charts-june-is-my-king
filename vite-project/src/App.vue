<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class="wrapper">
      <h1>HIV Diagnoses by Race and Borough</h1>

      <nav>
        <RouterLink to="/">Race</RouterLink>
        <RouterLink to="/about">Year</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

.wrapper {
  align-items: center;
  margin-bottom: 880px;
  margin-left: 100px;
}

nav {
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}



</style>
