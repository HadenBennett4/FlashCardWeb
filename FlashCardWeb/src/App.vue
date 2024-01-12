<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/library">Library</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header{
  width: 100%;
  height: 120px;
  background-color: var(--blue1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly ;
}
nav{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
nav a{
  text-decoration: none;
  color:var(--white);
  font-size: 22px;
}
nav a.router-link-exact-active{
  color: var(--black);
  text-decoration: underline;
}
nav a.router-link-exact-active:hover{
  color: var(--black);
  text-decoration: underline;
}
nav a:hover{
  color: var(--light-gray);
}
</style>
<style>
</style>
