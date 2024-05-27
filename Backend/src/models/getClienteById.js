const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
    async execute(id) {
        try {
            const cliente = await prisma.clientes.findUnique({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    nomeCliente: true,
                    statusInternet: true,
                    statusCliente: true,
                    valorPlano: true,
                    enderecoCliente: true,
                    bairroCliente: true,
                    cidadeCliente: true,
                    ipConcentrador: true,
                    nomeConcentrador: true,
                    consumoDownload: true,
                    consumoUpload: true,
                    tempoConectado: true,
                    popCliente: true,
                    planoContrato: true,
                    conexaoInicial: true,
                    conexaoFinal: true,
                    motivoDesconexao: true,
                },
            });

            // Converter BigInts para Strings antes de retornar
            if (cliente) {
                cliente.consumoDownload = cliente.consumoDownload.toString();
                cliente.consumoUpload = cliente.consumoUpload.toString();
            }

            return cliente;
        } catch (error) {
            console.error(`Erro ao executar 'execute()' em getClienteById: ${error.message}`);
            console.error(error.stack);
            error.path = "src/models/getClienteById.js";
            throw error;
        } finally {
            await prisma.$disconnect();
        }
    },
};
