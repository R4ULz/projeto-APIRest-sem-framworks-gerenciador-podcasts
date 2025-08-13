# Podcast Manager

### Descrição
um app estilo netflix, onde possa centralizar diferentes episódios de podcasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios de podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- Filtrar episódio por nome de podcast

## Como

#### Feature:
Listar os episódios de podcasts em sessões de categorias

### Como vou implementar:
GET: retorna lista de episódios

response:    
```js
[
{
    podcastName: "flow",
    episode: "RICARDINHO ACF, ALEMAO DA CARAVAN e TORETTO DRAG RACE - Flow #462",
    videoId: "Jii85HtMOGA",
    cover: "https://i.ytimg.com/vi/Jii85HtMOGA/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=Jii85HtMOGA",
    categories: ["Carros", "Humor"]

},
{
    podcastName: "flow",
    episode: "TIAGO TCAR + RICARDINHO ACF - Flow #476",
    videoId: "grVc1z6lwVk",
    cover: "https://i.ytimg.com/vi/grVc1z6lwVk/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=grVc1z6lwVk",
    categories: ["Carros", "Conhecimento"]
}
]
```

GET: retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast

