<template>
  <nav class="main-nav">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/sobre" class="nav-link">Sobre</router-link>
  </nav>
</template>

<style scoped>
.main-nav {
  margin: 1rem 0 3rem;
  display: flex !important;
  flex-direction: row !important; /* Força horizontal */
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
}

.nav-link {
  color: #52525b;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link.router-link-active {
  color: #7c3aed;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #7c3aed, #db2777);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(124, 58, 237, 0.6);
}
</style>
