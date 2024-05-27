const logger = require("../../custom/logger");
const getClienteById = require("../../models/getClienteById");

module.exports = {
    async handle(req, res) {
        try {
            const id = req.query.id;// Captura o ID do cliente dos parâmetros da requisição
            const client = await getClienteById.execute(id); // Chama a função execute com o ID do cliente

            logger.info(`Successfully found client with ID ${id}`);
            res.status(200).json(client); // Retorna o cliente encontrado em formato JSON
        } catch (error) {
            if (!error.path) {
                logger.error(`Erro ao buscar cliente: ${error.message}`);
                logger.error(error.stack);
                error.path = "src/controllers/client/getClienteById.js";
            }

            throw error;
        }
    },
};
