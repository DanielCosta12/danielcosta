<script setup>
defineProps({
  skills: Array
})
</script>

<template>
  <div class="skills-section">
    <div class="skills-header">
      <span>SKILLS & EXPERTISE</span>
    </div>
    <div class="skills-container">
      <span v-for="skill in skills" :key="skill" class="skill-tag">
        {{ skill }}
      </span>
    </div>
    
    <footer class="site-footer">
      <p>Hosted on personal homelab via Cloudflare Tunnel</p>
    </footer>
  </div>
</template>

<style scoped>
.skills-section {
  width: 100%;
  max-width: 600px;
  margin: 2rem auto 0;
  text-align: center;
}
</style>
