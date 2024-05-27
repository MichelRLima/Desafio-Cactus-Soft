const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
    async execute(plano) {
        try {
            let clientes = await prisma.clientes.findMany({
                where: {
                    planoContrato: plano
                }, select: {
                    id: true,
                    nomeCliente: true,
                    statusInternet: true,
                    statusCliente: true,
                    valorPlano: true,

                },
            });

            return clientes

        } catch (error) {
            error.path = "src/models/getClientesForPlano.js";
            console.error(`Erro ao executar 'execute()' em getClientesForPlano: ${error.message}`);
            error.path = "src/models/getClientesForPlano.js";
            throw error;
        } finally {
            await prisma.$disconnect(); // desconecta o Prisma Client do banco de dados
        }
    },
};
