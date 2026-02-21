<script setup>
defineProps({
  name: String,
  image: String
})
</script>

<template>
  <div class="profile-header">
    <div class="image-glow">
      <img :src="image" class="profile-pic" :alt="name" />
    </div>
    <h1 class="name">{{ name }}</h1>
  </div>
</template>

<style scoped>
.profile-header {
  margin: 0 auto 3rem;
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.image-glow {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  box-shadow: 0 0 40px 10px rgba(139, 92, 246, 0.4);
  padding: 4px;
  background: linear-gradient(135deg, #7c3aed, #db2777);
}

.profile-pic {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: #111;
  border: 4px solid #000;
}

.name {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 1rem 0 0.75rem;
  letter-spacing: -0.04em;
  color: #ffffff;
}
</style>
