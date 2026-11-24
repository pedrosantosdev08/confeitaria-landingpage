# 🍰 Manu Confeitaria — Landing Page

Landing page responsiva desenvolvida para uma confeitaria premium, com foco em apresentar os produtos de forma elegante e levar o visitante ao contato.

🔗 **Demo:** [**manuelaconfeitaria.vercel.app**](https://manuelaconfeitaria.vercel.app/)

---

## 📌 Sobre o projeto

Projeto de portfólio que simula o site de uma confeitaria de alto padrão. O objetivo foi construir uma landing page do zero, com identidade visual própria, navegação clara e layout que funcione bem em celular e desktop.

## ✨ Funcionalidades

- Layout responsivo (mobile, tablet e desktop) com Tailwind CSS 4
- Animações de entrada e interações com Motion
- Ícones e links para redes sociais com Font Awesome
- Seções de apresentação da marca e dos produtos
- Chamadas para ação para contato/pedidos
- Código 100% em TypeScript, com checagem de tipos na build
- Deploy contínuo na Vercel

> **A preencher:** ajuste esta lista para refletir as seções reais da página (ex.: Hero, Cardápio, Sobre, Depoimentos, Contato).

## 🛠️ Tecnologias

| Categoria | Ferramentas |
| --- | --- |
| Biblioteca | [React 19](https://react.dev/) |
| Linguagem | [TypeScript 5.9](https://www.typescriptlang.org/) |
| Build/Dev server | [Vite 8](https://vite.dev/) |
| Estilização | [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`) |
| Animações | [Motion](https://motion.dev/) |
| Ícones | [Font Awesome](https://fontawesome.com/) (`react-fontawesome`) |
| Qualidade de código | ESLint 9 + typescript-eslint + regras de React Hooks |
| Deploy | Vercel |

## 📁 Estrutura do projeto

```
confeitaria-landingpage/
├── public/          # Arquivos estáticos (imagens, favicon)
├── src/             # Código-fonte (componentes, estilos, entrada da aplicação)
├── index.html       # Documento HTML base
├── vite.config.ts   # Configuração do Vite
├── eslint.config.js # Regras do ESLint
├── tsconfig*.json   # Configurações do TypeScript
└── package.json     # Dependências e scripts
```

## 🚀 Como rodar localmente

**Pré-requisitos:** [Node.js](https://nodejs.org/) 20.19 ou superior (requisito do Vite 8) e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/pedrosantosdev08/confeitaria-landingpage.git

# 2. Entre na pasta
cd confeitaria-landingpage

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Checa os tipos (`tsc -b`) e gera a build de produção na pasta `dist` |
| `npm run preview` | Visualiza localmente a build de produção |
| `npm run lint` | Executa o ESLint no projeto |

## ☁️ Deploy

O projeto é publicado na Vercel. Para publicar o seu próprio, importe o repositório na Vercel e mantenha as configurações padrão do Vite (build: `npm run build`, saída: `dist`).

## 🧠 O que aprendi

- Estruturação de uma landing page em componentes reutilizáveis com React e TypeScript
- Construção de layout responsivo do zero
- Configuração de projeto com Vite, Tailwind CSS 4 e ESLint
- Animações declarativas com Motion
- Publicação e deploy contínuo com a Vercel

> **A preencher:** troque por aprendizados reais, ex.: decisões de design, desafios de responsividade, otimização de imagens.

## 🗺️ Próximos passos

- [ ] Otimizar imagens e medir performance com o Lighthouse
- [ ] Adicionar formulário de contato / integração com WhatsApp
- [ ] Melhorar acessibilidade (contraste, navegação por teclado, `alt` nas imagens)

## 👨‍💻 Autor

**Pedro Santos** — Desenvolvedor Frontend

[LinkedIn](https://www.linkedin.com/in/pedrodevsantos/) | [Portfólio](https://portfolio-pedrosantos.vercel.app/) | [E-mail](mailto:pedrogsantosdev@outlook.com)
