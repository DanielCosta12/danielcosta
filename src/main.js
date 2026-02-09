import './style.css'
// // import viteLogo from '/vite.svg'
import danielCosta from '/DanielCostapfp.png'

document.querySelector('#app').innerHTML = `
  <div>
        <img src="${danielCosta}" class="logo" alt="Daniel Costa foto" />
      <h1>Daniel Costa </h1>
      <p>Sou Analista de Dados em transição consolidada para a área de Tecnologia, com formação em Análise e Desenvolvimento de Sistemas e experiência prática em SQL, Business Intelligence, Power BI e análise de indicadores. Atuo na transformação de dados em insights para otimização de processos, apoiando decisões estratégicas com base em KPIs e métricas de desempenho. Possuo conhecimentos em Python, JavaScript, Linux (Arch Linux), virtualização e infraestrutura com Proxmox, Docker e pfSense, além de automações inteligentes com n8n e integração de APIs. Tenho forte interesse em Inteligência Artificial, bitcoin, infraestrutura, automação e inovação tecnológica, sempre conectando tecnologia, dados e uma visão analítica sobre o impacto da tecnologia nos negócios e na sociedade.</p>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/daniel-costa12/" target="_blank" rel="noopener noreferrer">
          <button>LinkedIn</button>
        </a>
        <a href="https://github.com/danielcosta12" target="_blank" rel="noopener noreferrer">
          <button>GitHub</button>
        </a>
        <a href="mailto:danieldossantosdacosta@gmail.com">
          <button>Gmail</button>
        </a>
      </div>
      <footer>
        <p>SQL | BI | JavaScript | Linux(Arch Linux) | Proxmox | Docker | pfSense | IA | Bitcoin</p>
      </footer>
  </div>
`

setupCounter(document.querySelector('#counter'))
