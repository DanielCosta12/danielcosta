<script setup>
import { ref, onMounted } from 'vue';
import ProfileHeader from '../components/ProfileHeader.vue';
import SocialLinks from '../components/SocialLinks.vue';
import SkillsExpertise from '../components/SkillsExpertise.vue';

const profileData = ref({
  name: '',
  image: '',
  socialLinks: [],
  skills: [],
  biography: ''
});

onMounted(async () => {
  try {
    const response = await fetch('/profile.json');
    profileData.value = await response.json();
  } catch (error) {
    console.error('Erro ao carregar os dados:', error);
  }
});
</script>

<template>
  <div v-if="profileData.name" class="view-content">
    <ProfileHeader 
      :name="profileData.name" 
      :image="profileData.image" 
    />
    
    <SocialLinks :links="profileData.socialLinks" />
    
    <SkillsExpertise :skills="profileData.skills" />
  </div>
  <div v-else class="loading">Carregando perfil...</div>
</template>

<style scoped>
.loading {
  color: #a1a1aa;
  margin-top: 4rem;
}
.view-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
