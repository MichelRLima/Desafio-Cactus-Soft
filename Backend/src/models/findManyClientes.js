const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute() {
    try {

      let clientes = await prisma.clientes.findMany();
      clientes = JSON.stringify(clientes, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );

      return JSON.parse(clientes);
    } catch (error) {
      error.path = "src/models/findManyClientes.js";
      console.error(`Erro ao executar 'execute()' em findManyClientes: ${error.message}`);
      console.error(error.stack);
      throw error;

    } finally {
      await prisma.$disconnect(); // desconecta o Prisma Client do banco de dados
    }
  },
};
