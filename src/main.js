import './style.css'

async function init() {
  try {
    const response = await fetch('/profile.json');
    const data = await response.json();
    const { name, image, socialLinks, skills, biography } = data;

    function getIcon(text) {
      const lowerText = text.toLowerCase();
      if (lowerText.includes('linkedin')) return 'fa-brands fa-linkedin-in';
      if (lowerText.includes('github')) return 'fa-brands fa-github';
      if (lowerText.includes('gmail')) return 'fa-solid fa-envelope';
      if (lowerText.includes('whatsapp')) return 'fa-brands fa-whatsapp';
      return 'fa-solid fa-link';
    }

    function createSocialLinksHtml(links) {
      return `
        <div class="links-container">
          ${links.map(link => `
            <a href="${link.url}" class="social-button" target="_blank" rel="noopener noreferrer">
              <i class="${getIcon(link.text)}"></i>
              <span>${link.text}</span>
            </a>
          `).join('')}
        </div>
      `;
    }

    function createSkillsHtml(skillsList) {
      return `
        <div class="skills-section">
          <div class="skills-header">
            <span>SKILLS & EXPERTISE</span>
          </div>
          <div class="skills-container">
            ${skillsList.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        </div>
      `;
    }

    document.querySelector('#app').innerHTML = `
      <div class="profile-header">
        <div class="image-glow">
          <img src="${image}" class="profile-pic" alt="${name}" />
        </div>
        <h1 class="name">${name}</h1>
        <p class="biography">${biography}</p>
      </div>
      
      ${createSocialLinksHtml(socialLinks)}
      
      ${createSkillsHtml(skills)}

      <footer class="site-footer">
        <p>Hosted on personal homelab via Cloudflare Tunnel</p>
      </footer>
    `;
  } catch (error) {
    console.error('Erro ao carregar os dados:', error);
    document.querySelector('#app').innerHTML = '<p>Erro ao carregar perfil.</p>';
  }
}

init();
