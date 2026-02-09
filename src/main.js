import './style.css'
import danielCosta from '/DanielCostapfp.png'

const socialLinks = [
  { url: 'https://www.linkedin.com/in/daniel-costa12/', text: 'LinkedIn' },
  { url: 'https://github.com/danielcosta12', text: 'GitHub' },
  { url: 'mailto:danieldossantosdacosta@gmail.com', text: 'Gmail' },
  { url: 'https://wa.me/5521968318309?text=Ol%C3%A1%20Daniel%2C%20vim%20pelo%20seu%20site.', text: 'WhatsApp' },
];

const skills = [
  'Análise e Desenvolvimento de Sistemas','SQL', 'BI', 'JavaScript', 'Arch Linux', 'Proxmox', 'Docker', 'pfSense', 'IA', 'Bitcoin', 'n8n', 'dns'
];

const biographyText = `Sou apaixonado pela área de Tecnologia, com formação em Análise e Desenvolvimento de Sistemas e experiência prática em SQL, Business Intelligence, Power BI e análise de indicadores. Atuo na transformação de dados em insights para otimização de processos, apoiando decisões estratégicas com base em KPIs e métricas de desempenho. Possuo conhecimentos em Python, JavaScript, Linux (Arch Linux), virtualização e infraestrutura com Proxmox, Docker e pfSense, além de automações inteligentes com n8n e integração de APIs. Tenho forte interesse em Inteligência Artificial, bitcoin, infraestrutura, automação e inovação tecnológica, sempre conectando tecnologia, dados e uma visão analítica sobre o impacto da tecnologia nos negócios e na sociedade.`;

function createSocialLinksHtml(links) {
  return `
    <div class="social-links">
      ${links.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer">
          <button>${link.text}</button>
        </a>
      `).join('')}
    </div>
  `;
}

function createSkillsListHtml(skills) {
  return `
      ${skills.map(skill => ` ${skill} |`).join('')}
    
  `;
}

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${danielCosta}" class="logo" alt="Daniel Costa foto" />
    <h1>Daniel Costa </h1>
    <p>${biographyText}</p>
    ${createSocialLinksHtml(socialLinks)}
    <footer>
      ${createSkillsListHtml(skills)}
    </footer>
  </div>
`;
