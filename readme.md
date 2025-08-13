# 🎙 Podcast Manager

## 📖 Descrição

O **Podcast Manager** é um aplicativo no estilo Netflix, desenvolvido para centralizar episódios de podcasts em vídeo, organizados por categorias, permitindo fácil navegação e descoberta de conteúdo.


## ✨ Funcionalidades

* 📂 **Listar episódios** de podcasts organizados em sessões por categoria:

  * Saúde
  * Fitness
  * Mentalidade
  * Humor
* 🔍 **Filtrar episódios** pelo nome do podcast.

---

## 📡 API

### **1️⃣ Listar episódios**

**Rota:**

```
GET /api/list
```

**Resposta:**

```json
[
  {
    "podcastName": "flow",
    "episode": "RICARDINHO ACF, ALEMAO DA CARAVAN e TORETTO DRAG RACE - Flow #462",
    "videoId": "Jii85HtMOGA",
    "cover": "https://i.ytimg.com/vi/Jii85HtMOGA/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=Jii85HtMOGA",
    "categories": ["Carros", "Humor"]
  },
  {
    "podcastName": "flow",
    "episode": "TIAGO TCAR + RICARDINHO ACF - Flow #476",
    "videoId": "grVc1z6lwVk",
    "cover": "https://i.ytimg.com/vi/grVc1z6lwVk/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=grVc1z6lwVk",
    "categories": ["Carros", "Conhecimento"]
  }
]
```

---

### **2️⃣ Filtrar episódios por nome de podcast**

**Rota:**

```
GET /api/podcasts?p={podcastName}
```

**Resposta:**
Lista filtrada dos episódios que correspondem ao nome informado.

---

Aqui está a seção **"🛠 Tecnologias Utilizadas"** com cada tecnologia em formato de hiperlink Markdown:

---

## 🛠 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando:

* [**Node.js**](https://nodejs.org/) – Plataforma de execução JavaScript no lado do servidor.
* [**TypeScript**](https://www.typescriptlang.org/) – Superset do JavaScript que adiciona tipagem estática.
* [**TSX**](https://tsx.is/) – Ferramenta para executar arquivos TypeScript diretamente, com suporte a `.env`.
* [**Tsup**](https://tsup.egoist.dev/) – Empacotador rápido para gerar builds otimizadas.
* [**@types/node**](https://www.npmjs.com/package/@types/node) – Tipagens TypeScript para Node.js.


---

Se quiser, já posso **mesclar esse bloco no README completo** que te passei antes, para ele ficar finalizado e pronto para publicar no GitHub.


---

## 🚀 Como Executar

1. **Clonar repositório**

```bash
git clone https://github.com/R4ULz/projeto-APIRest-sem-framworks-gerenciador-podcasts.git
```

2. **Instalar dependências**

```bash
npm install
```

3. **Rodar o servidor**

```bash
npm run start:dev
```

---

## 📌 Observações

* Este projeto foi pensado para lidar inicialmente com um conjunto fixo de categorias, mas pode ser facilmente adaptado para receber categorias dinâmicas.
* A API foi estruturada de forma simples usando Node.js nativo, sem frameworks, para manter a leveza e o controle total sobre as rotas.

