<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app-container">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
/* Estilos globais mantidos */
@import './style.css';

#app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Regra para os containers de views ocuparem a largura total */
#app-container > .view-content,
#app-container > .about-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  padding-top: 2rem !important;
}
</style>
