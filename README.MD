# 🌐 danielcosta.dev.br

Meu site pessoal, feito com **Vite + JS**, hospedado no meu próprio homelab via **Cloudflare Tunnel** — sem abrir porta nenhuma no roteador.

## 🛠️ Tecnologias

- [Vite](https://vitejs.dev/) + JS
- Nginx (para servir os arquivos estáticos)
- Docker + Portainer (para orquestrar os containers)
- Cloudflare Tunnel (para expor o site sem IP público)
- Proxmox + Umbrel (infraestrutura do homelab)

## 🚀 Infraestrutura

O site roda em um servidor doméstico (homelab) com Proxmox, usando o Umbrel como base. O deploy é feito via Docker com a seguinte stack:

- **meu-site**: container Node que clona o repositório, instala dependências e faz o build
- **servidor**: container Nginx que serve os arquivos da pasta `dist`
- **cloudflared**: container que cria o túnel seguro com a Cloudflare

```yaml
services:
  meu-site:
    image: node:alpine
    command: >
      sh -c "apk add git &&
      git clone https://github.com/DanielCosta12/danielcosta.git /app &&
      cd /app &&
      npm install &&
      npm run build &&
      cp -r /app/dist/* /output"
    volumes:
      - site-dist:/output

  servidor:
    image: nginx:alpine
    volumes:
      - site-dist:/usr/share/nginx/html:ro
    restart: always

  cloudflared:
    image: cloudflare/cloudflared:latest
    command: tunnel --no-autoupdate run --token SEU_TOKEN_AQUI
    restart: always

volumes:
  site-dist:
```

## 💻 Rodando localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Fazer o build
npm run build
```

## 📦 Deploy

O deploy é feito manualmente reiniciando o container `meu-site` no Portainer, que clona o repositório e faz o build novamente.

## 📬 Contato

- Site: [danielcosta.dev.br](https://danielcosta.dev.br)
- GitHub: [@DanielCosta12](https://github.com/DanielCosta12)