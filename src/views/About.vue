<script setup>
import { ref, onMounted } from 'vue';

const biography = ref('');

onMounted(async () => {
  try {
    const response = await fetch('/profile.json');
    const data = await response.json();
    biography.value = data.biography;
  } catch (error) {
    console.error('Erro ao carregar biografia:', error);
  }
});
</script>

<template>
  <div class="about-page">
    <h1 class="title">Sobre Mim</h1>
    <div class="bio-container">
      <p class="biography-text">
        {{ biography }}
      </p>
    </div>
    <router-link to="/" class="back-link">
      <i class="fa-solid fa-arrow-left"></i> Voltar ao Início
    </router-link>
  </div>
</template>

<style scoped>
.about-page {
  text-align: center;
  margin-top: 2rem;
  padding: 0 1.5rem;
  max-width: 700px;
  width: 100%;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  letter-spacing: -0.04em;
  background: linear-gradient(90deg, #ffffff, #a1a1aa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bio-container {
  background-color: #0a0a0a;
  border: 1px solid #1f1f23;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 3rem;
}

.biography-text {
  color: #d4d4d8;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  margin: 0;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #7c3aed;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.back-link:hover {
  transform: translateX(-5px);
  color: #a78bfa;
}

@media (max-width: 480px) {
  .bio-container {
    padding: 1.5rem;
  }
  .biography-text {
    font-size: 1rem;
    text-align: left;
  }
}
</style>
