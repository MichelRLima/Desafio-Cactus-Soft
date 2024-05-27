# Projeto Desafio FullStack - Cactus Soft

Este projeto foi desenvolvido como parte do desafio para a vaga de Desenvolvedor Web Javascript: Perfil FullStack na empresa Cactus Soft.

## Tecnologias Utilizadas

### Back-end
- Node.js
- Prisma
- PostgreSQL

## Estrutura Geral do Projeto

O projeto está estruturado da seguinte forma:
```
├───prisma
│   └───migrations
│       └───20240509213009_add_clientes_table  
└───src
    ├───controllers
    │   └───client
    ├───custom
    ├───data
    └───models
```

## Configuração do Ambiente de Desenvolvimento

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

## Pontos de Entrada do Código
- Backend: `index.js`, `routes.js`

## Endpoints da API
- `GET /findManyCliente`: Busca todos os clientes.
- `GET /getAllPlanos`: Busca todos os planos no banco.
- `GET /getClientesForPlano`: Busca todos os clientes por plano.
- `GET /getClienteById`: Busca o cliente pelo ID.