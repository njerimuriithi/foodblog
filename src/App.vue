<template>
<nav class="navbar navbar-dark bg-light">
  <div class=" link container-fluid mx-auto ps-0.5 fw-bold fs-5 ">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link to="/desserts">Desserts</router-link>
    <router-link to="/dinner">Dinner</router-link>
    <router-link to="/recipes">Recipes</router-link>
    <router-link to="/Contact">Contact</router-link>
     
  </div>
  <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
</nav>
  <router-view />
</template>

<style>
.link{
width: 500px; 
font-family: 'Balsamiq Sans', cursive;
color: black;
}

</style>