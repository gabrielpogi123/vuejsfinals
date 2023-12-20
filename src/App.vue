<template>
  <div class="flex min-h-[100vh]">
    <div class="left-sidebar bg-gray-900 flex flex-col">
      <div class="heading p-8 bg-green-900">
        <h1 class="text-2xl text-green-200 text-center">
          John Gabriel G. Anga
        </h1>
        <div class="text-xl text-gray-300 text-center">
          Final Project VueJs3
        </div>
      </div>
      <nav class="nav-links">

        <a class="nav-link" :class="{ 'active': $route.path === '/flights' }"><RouterLink to="/flight">Flights</RouterLink></a>
        <a class="nav-link" :class="{ 'active': $route.path === '/passengers' }"><RouterLink to="/passenger">Passengers</RouterLink></a>
        <a class="nav-link" :class="{ 'active': $route.path === '/bookings' }"><RouterLink to="/booking">Bookings</RouterLink></a>
      </nav>
      <div class="p-8 bg-gray-800 text-gray-500 text-center">
        This is a laboratory file 
        intended for training students
        in the use of VueJS 3 created by
        Benjie B. Lenteria for the 
        students of Mater Dei College <br />
        Copyright &copy; 2023.<br />All rights reversed.
      </div>
    </div>
    <div class="main-content bg-green-200 flex-1">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.left-sidebar {
  width: 320px; 
  position: fixed;
  height: 100vh;
  overflow-y: auto;
}

.nav-links {
  flex:1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;
}

.nav-link {
  padding: 12px;
  background-color: #a7a47a;
  color: #cbd5e0;
  text-decoration: none;
  border-bottom: 1px solid #9c944d;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #9c944d;
}

.active {
  background-color: #9c944d;
}

.main-content{
  padding-top: 20px;
  padding-left: 350px;
}


</style>

