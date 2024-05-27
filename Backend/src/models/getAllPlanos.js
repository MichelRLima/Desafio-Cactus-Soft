const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
    async execute() {
        try {
            const clientes = await prisma.clientes.findMany();

            // objeto para mapear 
            const planosMap = {};

            // Iteramos sobre os clientes para preencher o objeto planosMap
            clientes.forEach((cliente) => {
                const { planoContrato, valorPlano } = cliente;

                // Verifica se o plano já existe no objeto, se não existir, cria uma entrada para ele
                if (!planosMap[planoContrato]) {
                    planosMap[planoContrato] = valorPlano;
                }
            });

            // Converter o objeto planosMap para um array de objetos
            const planosArray = Object.keys(planosMap).map((plano) => ({
                nomePlano: plano,
                valorPlano: planosMap[plano]
            }));

            return planosArray;

        } catch (error) {
            error.path = "src/models/getAllPlanos.js";
            console.error(`Erro ao executar 'execute()' em getAllPlanos: ${error.message}`);
            console.error(error.stack);
            throw error;
        } finally {
            await prisma.$disconnect();
        }
    },
};
