# Projeto Desafio FullStack - Cactus Soft

Este projeto foi desenvolvido como parte do desafio para a vaga de Desenvolvedor Web Javascript: Perfil FullStack na empresa Cactus Soft.

### Deploy
O projeto pode ser acesssado clicando [aqui](https://desafio-cactus-soft.netlify.app/)

## Tecnologias Utilizadas

### Front-end
- React
- Ant Design

### Back-end
- Node.js
- Prisma
- PostgreSQL

## Estrutura Geral do Projeto

O projeto está estruturado da seguinte forma:
```
├───Backend
│   ├───prisma
│   │   └───migrations
│   │       └───20240509213009_add_clientes_table
│   └───src
│       ├───controllers
│       │   └───client
│       ├───custom
│       ├───data
│       └───models
└───Frontend
    ├───public
    └───src
        ├───api
        ├───assets
        ├───components
        │   ├───Header
        │   ├───MetricasFinanceiras
        │   ├───Plano
        │   └───ProfileClient
        ├───context
        └───routes
```

## Configuração do Ambiente de Desenvolvimento

## Front-end

1 Instale as dependências:
`npm install`

2 Inicie o servidor local:
`npm run dev`

## Back-end

1 Configure o banco de dados PostgreSQL no arquivo `.env`

2 Execute as migrações e gere o cliente Prisma:

`npx prisma migrate dev`
`npx prisma db seed`
`npx prisma generate`

3 Inicie o servidor local:
`npm start`

## Dependências Principais
### Back-end
- cors
- prisma
- winston

### Front-end
- antd
- react-highlight-words
- axios
- react-router-dom

## Pontos de Entrada do Código
- Backend: `index.js`, `routes.js`
- Frontend: `index.js`

## Endpoints da API
- `GET /findManyCliente`: Busca todos os clientes.
- `GET /getAllPlanos`: Busca todos os planos no banco.
- `GET /getClientesForPlano`: Busca todos os clientes por plano.
- `GET /getClienteById`: Busca o cliente pelo ID.